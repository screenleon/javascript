import * as loadtest from "loadtest";

// using json-server
const api = 'http://localhost:3000';

let httpHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
}
const options: loadtest.LoadTestOptions = {
    url: api + "/posts",
    concurrency: 5,
    method: "POST",
    requestsPerSecond: 1,
    maxSeconds: 1,
    requestGenerator: (params, options, client, callback) => {
        // options.headers["Content-Length"] = bodyString.length;
        options.contentType = 'application/json';
        options.headers['Content-Type'] = 'application/json; charset=utf-8';

        const tempAll: number[] = [];
        for (let index = 0; index < 3; index++) {
            tempAll.push(parseFloat((Math.random() * 7 + 33).toFixed(1)));
        }
        const temp = parseFloat((tempAll.reduce((a, b) => a + b) / tempAll.length).toFixed(1))
        const measuredAt = new Date();
        const randomPosition = (): number => parseInt((Math.random() * 500).toString());
        const battery = parseInt((Math.random() * 100).toString());

        const body = {
            "data": [
                {
                    "dataType": "tmm", temp, tempAll, measuredAt,
                    "movement": {
                        "x": randomPosition(), "y": randomPosition(), "z": randomPosition()
                    },
                    battery, "moving": true
                }
            ]
        }

        let request = client(options, callback);
        request.write(JSON.stringify(body));
        return request;
    },
}

loadtest.loadTest(options, (error: any, results: any) => {
    if (error) {
        return console.error(`Got an error: ${error}`)
    }
    console.log(paint("Tests run successfully"), { results })
})

function paint(tag: string) {
    return '\x1b[41m' + tag + '\x1b[0m';
}
