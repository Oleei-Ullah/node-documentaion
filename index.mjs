import fs from "node:fs";

fs.readFile("user/test.txt", 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
