import * as fs from 'fs';

const mail_address = "a@kjump.com.tw"
// console.log(__dirname, __filename)
let email_json:any = fs.readFileSync(__dirname + '/assets/a@kjump.com.tw.json');
let email = JSON.parse(email_json);
console.log("password: ", email["rv"][mail_address]["password"]);