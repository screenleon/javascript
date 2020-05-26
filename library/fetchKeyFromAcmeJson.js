const fs = require('fs');

const readDirectory = __dirname + '/data';
const readFileName = 'acme.json';
const createDirectory = function (directoryPath) {
    directoryPath = __dirname + `/${directoryPath}`;
    const directoryNames = directoryPath.match(/\/[\w.]+/gi);
    let checkDirectoryPath = "";
    while (directoryNames.length > 0) {
        checkDirectoryPath += directoryNames.shift();
        if (!fs.existsSync(checkDirectoryPath)) fs.mkdirSync(checkDirectoryPath);
    }
    return;
}

const atob = function (string) {
    return new Buffer(string, 'base64').toString('utf8');
}

const handleFile = function (fileName) {
    const data = JSON.parse(fs.readFileSync(fileName).toString());
    for (let index = 0; index < Object.keys(data).length; index++) {
        const resolver = data.hasOwnProperty('Account') ? data : data[Object.keys(data)[index]];
        let acme_version;
        if (resolver['Account']['Registration'].hasOwnProperty('uri')) {
            acme_version = resolver['Account']['Registration']['uri'].search(/acme-v02/) ? 2 : 1;
        } else {
            acme_version = resolver.hasOwnProperty('DomainsCertificate') ? 1 : 2;
        }

        const certs = acme_version === 1 ? resolver['DomainsCertificate']['Certs'] : resolver['Certificates'];
        console.log('Certificate storage contains', certs.length, 'certificates');
        let name, privatekey, fullchain, sans;
        for (let c of certs) {
            if (acme_version === 1) {
                name = c['Certificate']['Domain'];
                privatekey = c['Certificate']['PrivateKey'];
                fullchain = c['Certificate']['Certificate'];
                sans = c['Domains']['SANs'];
            } else {
                name = c['domain']['main'];
                privatekey = c['key'];
                fullchain = c['certificate'];
                if (c['domain'].hasOwnProperty('sans'))
                    sans = c['domain']['sans'];
            }
            privatekey = atob(privatekey);
            fullchain = atob(fullchain);

            let start = fullchain.search('-----END CERTIFICATE-----')
            const cert = fullchain.slice(0, start + 26).trim();
            const chain = fullchain.slice(start + fullchain.slice(start).search('-----BEGIN CERTIFICATE-----')).trim();

            const directory = './certs/' + name;
            createDirectory(directory);
            fs.writeFileSync(directory + '/privkey.pem', privatekey);
            fs.writeFileSync(directory + '/cert.pem', cert);
            fs.writeFileSync(directory + '/chain.pem', chain);
            fs.writeFileSync(directory + '/fullchain.pem', fullchain);

            const flatDirectory = './certs_flat/'
            createDirectory(flatDirectory);
            fs.writeFileSync(flatDirectory + `/${name}.key`, privatekey);
            fs.writeFileSync(flatDirectory + `/${name}.chain.pem`, chain);
            fs.writeFileSync(flatDirectory + `/${name}.crt`, fullchain);

            if (typeof sans !== 'undefined') {
                for (let san of sans) {
                    fs.writeFileSync(flatDirectory + `/${san}.key`, privatekey);
                    fs.writeFileSync(flatDirectory + `/${san}.chain.pem`, chain);
                    fs.writeFileSync(flatDirectory + `/${san}.crt`, fullchain);
                }
            }
            console.log('Extracted certificate for: ' + name + (typeof sans !== 'undefined' ? ', ' + sans.join(', ') : ''))
        }
    }


}
handleFile(readDirectory + `/${readFileName}`)