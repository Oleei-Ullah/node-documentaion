import fs from "node:fs/promises";

fs.stat('user', (err, stat) => {
    if(err) {
        console.log(err);
    } else {
        console.log(stat.isDirectory());
    }
})