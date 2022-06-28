const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token,
prefix: process.env.prefix,
intents: "all"
})

//Eventler
bot.onJoined()
bot.onMessage()

bot.onInteractionCreate();

bot.variables({
para:"0",
banka:"0",
})    


bot.status({
text: "Macbot Destek",
type: "GAMEİNG",
status: "online",
time: "12",
})


//Bot açıldığında konsola gönderilecek komut
bot.readyCommand({
    channel: "",
    code: `$log[Şu hesapla hazırım: $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")