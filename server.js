const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token,
prefix: "$getServerVar[prefix]",
intents: "all"
})

//Eventler
bot.onMessage()
bot.onInteractionCreate();
bot.variables({
hgbb:"",
banlog:"",
spams:"kapalı",
spam:"-3",
meslek:"Yok",
mpara:"0",
banka:"0",
para:"0",
prefix:"+",
})    
bot.status({
text: "Macbot Destek",
type: "PLAYİNG",
status: "online",
time: "12",
},{
text:"$serverCount sunucuya hizmet veriyoruz",
type:"WATCHİNG",
status:"online",
},{
text:"$allMembersCount kişiyiz",
type:"Watching",
status:"idle",
})
bot.onJoin()
bot.onLeave()
bot.onBanAdd()
bot.onBanRemove()
bot.onMessageDelete()

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
<a:mgiris:974950521507045376> **$userTag** hoşgeldin **$serverName[$guildID]** sunucusuna seninle beraber \`$membersCount\` kişiyiz.
$wait[1s]
`
}) 

bot.leaveCommand({
channel: "$getServerVar[hgbb]", 
code: `
<a:mcikis:962963635909562378> **$userTag** görüşmek üzere sensiz \`$membersCount\` kişiyiz.
$wait[1s]
`
})

bot.banAddCommand({ 
channel: "$getServerVar[banlog]", 
code: `
$author[1;$userTag Adlı kişi sunucudan yasaklandı.;$authorAvatar]
$thumbnail[1;$authorAvatar]
$description[1;
$addField[1;Yasaklanma Tarihi:;
\`\`\`$date.$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;january;01;1];february;02;1];march;03;1];april;04;1];may;5;1];june;06;1];july;07;1];august;08;1];september;09;1];october;10;1];november;11;1];december;12;1].$year \`\`\`
;yes]
$addField[1;Yasaklanma Sebebi:;
$if[$getBanReason[$guildID;$authorID]==;\`\`\`Sebep Belirtilmedi\`\`\`;\`\`\`$getBanReason[$guildID;$authorID]\`\`\`]]]
$footer[1;Yasaklandığı sunucu:$serverName[$guildID]]
`
})

bot.banRemoveCommand({ 
channel: "$getServerVar[banlog]", 
code: `
$author[1;$userTag Adlı kişinin yasağı kaldırıldı.;$authorAvatar]
$thumbnail[1;$authorAvatar]

$footer[1;Yasak Kaldırılma Tarihi]
$addTimestamp[1]
` 
})
//Yardım Menu
bot.command({
  name: "menu",
  code:`
  Select an option.
  
  $addSelectMenu[1;helpCustomID;This placeholder won't show up cause we have selected default field as yes;1;1;no;A Option:Description of A option:helpValue0:no:👋;B Option::helpValue1:yes]
  `
});

bot.interactionCommand({
  name: "helpCustomID",
  prototype: "selectMenu", 
  code: `
  $interactionUpdate[A option's response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won't show up:helpValue0:Either this.:false}{selectMenuOptions:This won't show up either.:helpValue1:cause menu disabled.:false}}}]

  $onlyIf[$interactionData[values[0]]==0;]
  `
});

bot.interactionCommand({
  name: "helpCustomID",
  prototype: "selectMenu", 
  code: `
  $interactionUpdate[B option's response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won't show up:helpValue0:Either this.:false}{selectMenuOptions:This won't show up either.:helpValue1:cause menu disabled.:false}}}]

  $onlyIf[$interactionData[values[0]]==0;]
  `
});
bot.deletedCommand({
    channel: "1000316728955387944",
    code: `Message from , was deleted in <#$channelUsed>: $message`
  
  
  })