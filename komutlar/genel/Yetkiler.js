module.exports = {
  name: "yetkililer",
  code: `
$title[1;$serverName Sunucusunun Yetkilileri]
$description[1;Bu Sunucunun **$djsEval[message.guild.members.fetch().then(üyeler => üyeler.filter(üye => !üye.user.bot && üye.permissions.has(7n)).size);yes]** Tane Yetkilisi Var **#SEMI#**
$djsEval[message.guild.members.fetch().then(üyeler => üyeler.filter(üye => !üye.user.bot && üye.permissions.has(7n)).map(üye => "\`------------------------\`" + "\\n" + "<" + "@" + üye.user.id + ">" + " " + "-" + " " + üye.user.tag + " " + "-" + " " + "(" + "**" + üye.user.id + "**" + ")" + " | " + üye.presence?.status).join("\\n").replace(/online/g, "Çevrimiçi").replace(/idle/g, "Boşta").replace(/offline/g, "Çevrimdışı").replace(/dnd/g, "Rahatsız Etmeyin").replace(/undefined/g, "Çevrimdışı"));yes]]
$color[1;GREEN]
$thumbnail[1;$serverIcon]
$footer[1;$userTag[$authorID] tarafından istendi]
$addTimestamp[1]
`
};   module.exports = {
  name: "yetkililer",
  code: `
$title[1;$serverName Sunucusunun Yetkilileri]
$description[1;Bu Sunucunun **$djsEval[message.guild.members.fetch().then(üyeler => üyeler.filter(üye => !üye.user.bot && üye.permissions.has(7n)).size);yes]** Tane Yetkilisi Var **#SEMI#**
$djsEval[message.guild.members.fetch().then(üyeler => üyeler.filter(üye => !üye.user.bot && üye.permissions.has(7n)).map(üye => "\`------------------------\`" + "\\n" + "<" + "@" + üye.user.id + ">" + " " + "-" + " " + üye.user.tag + " " + "-" + " " + "(" + "**" + üye.user.id + "**" + ")" + " | " + üye.presence?.status).join("\\n").replace(/online/g, "Çevrimiçi").replace(/idle/g, "Boşta").replace(/offline/g, "Çevrimdışı").replace(/dnd/g, "Rahatsız Etmeyin").replace(/undefined/g, "Çevrimdışı"));yes]]
$color[1;GREEN]
$thumbnail[1;$serverIcon]
$footer[1;$userTag[$authorID] tarafından istendi]
$addTimestamp[1]
`
};   
module.exports = {
  name: "yetkililer",
  code: `
$title[1;$serverName Sunucusunun Yetkilileri]
$description[1;Bu Sunucunun **$djsEval[message.guild.members.fetch().then(üyeler => üyeler.filter(üye => !üye.user.bot && üye.permissions.has(7n)).size);yes]** Tane Yetkilisi Var **#SEMI#**
$djsEval[message.guild.members.fetch().then(üyeler => üyeler.filter(üye => !üye.user.bot && üye.permissions.has(7n)).map(üye => "\`------------------------\`" + "\\n" + "<" + "@" + üye.user.id + ">" + " " + "-" + " " + üye.user.tag + " " + "-" + " " + "(" + "**" + üye.user.id + "**" + ")" + " | " + üye.presence?.status).join("\\n").replace(/online/g, "Çevrimiçi").replace(/idle/g, "Boşta").replace(/offline/g, "Çevrimdışı").replace(/dnd/g, "Rahatsız Etmeyin").replace(/undefined/g, "Çevrimdışı"));yes]]
$color[1;GREEN]
$thumbnail[1;$serverIcon]
$footer[1;$userTag[$authorID] tarafından istendi]
$addTimestamp[1]
`
};  