import * as fs from 'fs';
async function test() {
    let waitCount = 0;
    for (let i = waitCount; i < 15; i++) {
        console.log('test', Date.now());
        if (fs.existsSync('./packag.json')) {
            i = 100;
        } else {
            await sleep(200);
        }
    }
}

const getEmailJSON = async (ms = 200): Promise<any> => {
    const filePath = './packag.json';
    const waitTimeMax: number = 3000;
    let startWaitTime = Date.now();

    let isFileExists = fs.existsSync(filePath);
    while (!isFileExists) {
        console.log('Email json', Date.now());
        if (!fs.existsSync(filePath)) {
            if (Date.now() - startWaitTime > waitTimeMax) {
                console.error('file write for too long');
                return null;
            }
            await sleep(ms);
        } else {
            isFileExists = true;
        }
    }
}

const sleep = async (ms: number = 200): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test();
getEmailJSON();