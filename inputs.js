let readline = require('readline');

let customeReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hideInput() {
    customeReadLine._writeToOutput = function _writeToOutput(stringToWrite) {
        if (customeReadLine.stdoutMuted)
            customeReadLine.output.write("*");
        else
            customeReadLine.output.write(stringToWrite);
    };
}

function askForInput(message) {
    let userInput;
    customeReadLine.question(`Password: `, function (text) {
        userInput = text;
        if (customeReadLine.stdoutMuted) console.log()
        customeReadLine.close();
    });
    hideInput()
}

function input(message, hidden = false) {
    customeReadLine.stdoutMuted = hidden;
    return askForInput(message)
}


module.exports = { input }