const dns = require('dns'); //name -- address

// dns.lookup('healthcare.oucare.com', (err, address) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log(address);
// })

dns.resolveMx('oucare.com', (err, address) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('resolve: ', address);
});

//get ipv4
dns.resolve4('oucare.com', (err, address) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('resolve4: ', address);
});

dns.reverse('52.217.42.59', (err, hostnames) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('hostname:', hostnames);
})