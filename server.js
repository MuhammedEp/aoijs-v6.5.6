const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.token,
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

bot.variables({
  hgbb: "",
  banlog: "",
  spams: "kapalı",
  spam: "-3",
  meslek: "Yok",
  mpara: "0",
  banka: "0",
  para: "0",
  prefix: "+",
  panel:"kapalı",
  id:"",
  mesajs:"0",
  xp:"0",
  xpm:"25",
  seviye:"0",
  seviyeknl:"",
});
bot.status(
  {
    name: "$serverCount sunucu | $allMembersCount kişiyiz ",
    type: "WATCHİNG",
    status: "idle",
  }
);
//Bot açıldığında konsola gönderilecek komut
bot.readyCommand({
  channel: "",
  code: `$log[Şu hesapla hazırım: $userTag[$clientID]]`,
});

bot.loadCommamds("./komutlar/", true);

//CALLBACKLER
bot.joinCommand({
  channel: "$getServerVar[hgbb]",
  code: `

<a:mgiris:974950521507045376> **$userTag** hoşgeldin **$serverName[$guildID]** sunucusuna seninle beraber \`$membersCount\` kişiyiz.
$wait[1s]

`,
});

bot.leaveCommand({
  channel: "$getServerVar[hgbb]",
  code: `
<a:mcikis:962963635909562378> **$userTag** görüşmek üzere sensiz \`$membersCount\` kişiyiz.
$wait[1s]

`,
});

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
`,
});

bot.banRemoveCommand({
  channel: "$getServerVar[banlog]",
  code: `
$author[1;$userTag Adlı kişinin yasağı kaldırıldı.;$authorAvatar]
$thumbnail[1;$authorAvatar]
$description[1;$username]
$footer[1;Yasak Kaldırılma Tarihi]
$addTimestamp[1]
`,
});

bot.deletedCommand({
  channel: "channel ıd",
  code: `
$author[1; $userTag[$authorID] adlı kişinin mesajı silindi;$authorAvatar;]
$thumbnail[1;$authorAvatar]
$footer[1;Mesajı Silen: $userTag[$authorID] | Kanal:#$channelName[$channelUsed];$authorAvatar]
$description[1;
$addField[1;Silinen Mesaj:;$if[$message==;\`\`\`Bilinmiyor\`\`\`;\`\`\`$message\`\`\`]]]
`,
});

bot.onGuildJoin()


bot.guildJoinCommand({
  channel:"Channel ıd",
  code:`
  $createFile[$joinSplitText[
]
$textSplit[$serverNames;, ];sunucular.txt]
  $color[1;WHITE]
  $title[1;Bir Sunucuya Katıldım]
  $thumbnail[1;$serverIcon[$guildID]]
  $addTimestamp[1]
  $description[1;
  **Sunucunun İsmi** -> **$serverName**
  
  **Sunucunun Açıklaması** -> **$if[$serverDescription==;Yok;$serverDescription]**
  
  **Sunucudaki Kişi Sayisi** -> **$membersCount**
  ]
  `
})


bot.onGuildLeave()
bot.guildLeaveCommand({
  channel:"Channel ıd",
  code:`
  $createFile[$joinSplitText[
]
$textSplit[$serverNames;, ];sunucular.txt]
  $color[1;WHITE]
  $title[1;Bir Sunucuya Ayrıldım ]
  $thumbnail[1;$serverIcon[$guildID]]
  $addTimestamp[1]
  $description[1;
  **Sunucunun İsmi** -> **$serverName**
  
  **Sunucunun Açıklaması** -> **$if[$serverDescription==;Yok;$serverDescription]**
  
  **Sunucudaki Kişi Sayisi** -> **$membersCount**
  ]
  `
})
