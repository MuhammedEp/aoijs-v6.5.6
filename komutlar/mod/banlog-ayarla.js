module.exports=[{
name:"banlog-ayarla",
aliases:["banlog"],
code:`
$setServerVar[banlog;$mentionedChannels[1;yes]]
$description[1;Banlog kanalı <#$mentionedChannels[1;yes]> olarak ayarlandı.]
$onlyPerms[admin;$username Yetkin Yok]
`
},{
name:"banlog-kapat",
aliases:["banlog-kapat"],
code:`
$setServerVar[banlog;]
$description[1;Banlog kanalı sıfırlandı.]
$onlyPerms[admin;$username Yetkin Yok]
`
}]