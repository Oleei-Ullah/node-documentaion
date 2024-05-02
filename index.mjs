import fs from "node:fs";
import path from 'node:path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readableStream = fs.createReadStream(__dirname+'/user/test.txt');

readableStream.on('data', (chunk) => {
    console.log('Chunking');
    console.log(chunk);
})
