function morning_ai_bot() {
  const token = PropertiesService.getScriptProperties().getProperty("token");
  const mail = PropertiesService.getScriptProperties().getProperty("mail");
  const account = "aichan_nel";
  const count = 3;
  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${account}&count=${count}`;
  const headers = {"Authorization": `Bearer ${token}`};
  const response = JSON.parse(UrlFetchApp.fetch(url, {"headers": headers}).getContentText());
  let flg = 0;
  for (let i of response) {
    for (let j of i.entities.hashtags) {
      if (j.text === "モーニングアイちゃん") {
        const tweet_id = i.id_str;
        GmailApp.sendEmail(mail, "morning_ai_bot", `https://twitter.com/${account}/status/${tweet_id}`)
        flg = 1;
        break;
      }
    }
    if (flg === 1) break;
  }
}
