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
bot.onBanRemove()

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
channel: "991253350165258270", 
code: `
$author[1;$userTag Adlı kişi sunucudan yasaklandı.;$authorAvatar]
$thumbnail[1;$authorAvatar]
$description[1;
$addField[1;Yasaklanma Tarihi:;
\`\`\`$date.$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;january;01;1];february;02;1];march;03;1];april;04;1];may;5;1];june;06;1];july;07;1];august;08;1];september;09;1];october;10;1];november;11;1];december;12;1].$year \`\`\`
;yes]
$addField[1;Yasaklanma Sebebi:;
\`\`\`$getBanReason[$guildID;$authorID]\`\`\`;yes]]
$footer[1;Yasaklandığı sunucu:$serverName[$guildID];<a:BAN:954984243816189962>]
`
})

bot.banRemoveCommand({ 
channel: "991253350165258270", 
code: `
$author[1;$userTag Adlı kişinin yasağı kaldırıldı.;$authorAvatar]
$thumbnail[1;$authorAvatar]
$description[1;
Yasağı kaldıran:
$userTag]
$footer[1;Yasak Kaldırılma Tarihi]
$addTimestamp[1]
` 
})