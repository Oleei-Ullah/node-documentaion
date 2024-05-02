import fs from "node:fs/promises";

const example = async () => {
    try {
        const stats = await fs.stat('user/test.txt');
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.size);
    } catch (error) {
        console.log(error);
    }
}
example();