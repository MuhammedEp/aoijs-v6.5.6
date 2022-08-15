module.exports = {
  name: "banlist",
  code: `
$title[1;$serverName Sunucusundan Yasaklananlar]
$description[1;
Bu Sunucuda Toplam \`$banCount\` Tane Yasaklı Kullanıcı Var **#SEMI#**
$djsEval[message.guild.bans.fetch().then(banlılar => banlılar.map(üye => "\`======================\`" + "\\n" + "**Yasaklanan Kişi**:" + " " + "<" + "@" + üye.user.id + ">" + " " + "~" + " " + üye.user.tag + " " + "~" + " " + üye.user.id + " " + "|" + " " + "**Yasaklanma Nedeni**:" + " " + üye.reason).join("\\n"));yes]
]
$color[1;GREEN]
$thumbnail[1;$serverIcon[$guildID]]
$footer[1;$userTag[$authorID] tarafından istendi]
$addTimestamp[1]
$onlyPerms[admin;Bu komutu kullanabilmek için \`Yönetici\` İznine Sahip Olman Gerekiyor!]
`
}  
