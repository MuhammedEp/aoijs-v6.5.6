const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token,
prefix: process.env.prefix,
intents: "all"
})

//Eventler
bot.onMessage()

bot.variables({
para:"0"
})

//Bot açıldığında konsola gönderilecek komut
bot.readyCommand({
    channel: "",
    code: `$log[Şu hesapla hazırım: $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")