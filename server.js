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
bot.status({
text: "Macbot Destek",
type: "GAMEİNG",
status: "online",
time: "12",
})
bot.onJoin()
bot.onLeave()

//Bot açıldığında konsola gönderilecek komut
bot.readyCommand({
    channel: "",
    code: `$log[Şu hesapla hazırım: $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

//CALLBACKLER
bot.joinCommand({ 
channel: "990212719280025630", 
code: `
<a:mgiris:974950521507045376> **$username** hoşgeldin **$serverName[$guildID]** sunucusuna seninle beraber \`$membersCount\` kişiyiz.
$wait[1s]
`
}) 

bot.leaveCommand({
channel: "990212719280025630", 
code: `
<a:mcikis:962963635909562378> **$username** görüşmek üzere sensiz \`$membersCount\` kişiyiz.
$wait[1s]
`
})