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
hgbb:"",
banlog:"",
})    
bot.status({
text: "Macbot Destek",
type: "GAMEİNG",
status: "online",
time: "12",
})
bot.onJoin()
bot.onLeave()
bot.onBanAdd()

//Bot açıldığında konsola gönderilecek komut
bot.readyCommand({
    channel: "",
    code: `$log[Şu hesapla hazırım: $userTag[$clientID]]`
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

//CALLBACKLER
bot.joinCommand({ 
channel: "$getServerVar[hgbb]", 
code: `
<a:mgiris:974950521507045376> **$username** hoşgeldin **$serverName[$guildID]** sunucusuna seninle beraber \`$membersCount\` kişiyiz.
$wait[1s]
`
}) 

bot.leaveCommand({
channel: "$getServerVar[hgbb]", 
code: `
<a:mcikis:962963635909562378> **$username** görüşmek üzere sensiz \`$membersCount\` kişiyiz.
$wait[1s]
`
})
bot.banAddCommand({ 
channel: "991250636911947866", 
code: `
$author[1;$userTag Adlı kişi sunucudan yasaklandı.;$authorAvatar]
$thumbnail[1;$authorAvatar]
$description[1;
**Yasaklanma Sebebi:**
\`\`\`$getBanReason[$guildID;$authorID]\`\`\`

**Yasaklanma Tarihi:**
\`\`\`$date\`\`\`
]
$footer[1;Yasaklayan Kişi:$userTag[$authorID];$serverIcon]
`
})

