function myFunction() {
    const token = PropertiesService.getScriptProperties().getProperty("token");
    const account = "aichan_nel"
    const count = 2;
    const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${account}&count=${count}`;
    const headers = {"Authorization": `Bearer ${token}`}
    response = UrlFetchApp.fetch(url, {"headers": headers});
    console.log(response.getContentText());
    // GmailApp.sendEmail(mail, "morning_ai_bot", url)
}
