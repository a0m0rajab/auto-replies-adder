const puppeteer = require('puppeteer');

async function login(page, username, password) {
    console.log("Logging in...")
    let usernameSelector = '#login_field'
    let passwordSelector = '#password'
    let loginButton = '#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block'
    await page.type(usernameSelector, username);
    await page.type(passwordSelector, password);
    await page.click(loginButton);
    console.log("Logged in :)")
}
async function submitReply(page, title, text) {
    let titleSelector = "#saved-reply-title-field"
    let fieldSelector = "#saved_reply_field"
    let repliesSubmitButtonSelector = "#new_saved_reply > div > div > button"
    await page.type(titleSelector, title);
    await page.type(fieldSelector, text);
    await page.click(repliesSubmitButtonSelector)
}
async function run(username, password, replies) {
    const browser = await puppeteer.launch({
        // executablePath: '/usr/bin/chromium-browser',
        // headless: false,
    });
    const page = await browser.newPage();
    await page.goto(`https://github.com/settings/replies`);
    login(page, username, password)
    await page.waitForNavigation()
    let repLength = replies.length;
    for (let i = 0; i < repLength; i++) {
        console.log(i + 1, "out of", repLength)
        submitReply(page, replies[i].title, replies[i].text)
        await page.waitForNavigation()
    }
    console.log("Thank you for using Auto-reply adder!")
    browser.close();
}

module.exports = { run }