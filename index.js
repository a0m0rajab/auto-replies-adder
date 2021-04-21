const prompt = require("prompt-sync")({ sigint: true });
const headLess = require("./headless")
let args = process.argv.slice(2);
if (!args[0]) {
    throw "Please enter a TSV file"
}
// CSV reader 
const csv = require('csv-parser')
const fs = require('fs');
const replies = [];

console.log("Parsing the file")
fs.createReadStream(args[0])
    .pipe(csv({ separator: '\t' }))
    .on('data', (data) => replies.push(data))
    .on('end', () => {
        console.log("File Parsed");
        // console.log(replies)
        submitReplies()
    });

function submitReplies() {
    console.log("GitHub Log in:")
    const username = prompt("Username:");
    const password = prompt("Password:", { echo: "*" })
    headLess.run(username, password, replies)
}