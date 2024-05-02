import fs from "node:fs";

const data = fs.readFileSync('user/test.txt', 'utf8');
console.log(data);
