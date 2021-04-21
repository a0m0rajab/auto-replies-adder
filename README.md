# auto-replies

GitHub_ara: github auto saved replies adder.

Auto-replies-adder is a tool to autoamtically add replies from TSV file to any github account. It's helpful for those who review codes a lot and use the same replies always with some minor changes! 

## How to use it: 

### NPM

Coming soon.

### Repo

- Clone this repo to your local PC.
- run ```npm install``` to install the needed packages.
- ```node index.js FILEPATH``` write your TSV path to start.

## How it works: 

1- parses the TSV file
2- Ask the user for username/password 
3- log in to github and navigate to replies settings 
4- start adding the replies! 

## Technologies: 

- NodeJs 
- Headless browser: [puppeteer](https://www.npmjs.com/package/puppeteer) 
- [csv-parser](https://www.npmjs.com/package/csv-parser)
- [prompt-sync"](https://www.npmjs.com/package/prompt-sync)

## Imporvments/todo: 

The tool is just wokring fine right now but it's not handling any error that may happen or mistakes. For that reason the imrpovements to the tool could be the next: 

- [ ] Handling empy file, wrong file inputs.
- [ ] Handling wrong password/username.
- [ ] Changing the file type from CLI (CSV,TSV,TXT, Specific type).
- [ ] Handling unexpected errors.
- [ ] Removing all saved replies. 
- [ ] Removing replies with specific words.
- [ ] Handling path errors for puppeteer.
- [ ] Adding a fancy TUI (text user interface).

## Known issues: 

### Path error 

If the headless browser could not work, you may need to give the chrome agent file by yourself.

## Debugging: 

Just unccomment the commented lines to start debugging the file :) 