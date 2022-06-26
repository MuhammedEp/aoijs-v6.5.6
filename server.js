const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token,
prefix: process.env.prefix,
intents: "all"
})

//Eventler
bot.onMessage()

bot.onInteractionCreate();

bot.variables({
para:"0",
banka:"0",
})    

//Bot açıldığında konsola gönderilecek komut
bot.readyCommand({
    channel: "",
    code: `$log[Şu hesapla hazırım: $userTag[$clientID]]`
})
bot.readyCommand({
  channel: "955007368146587668",
  code: `
Yeniden aktifim Uptime sürem $uptime
`
});``
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")