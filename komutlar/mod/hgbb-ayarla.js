module.exports=[{
name:"giriş-çıkış",
aliases:["hgbb-ayarla","hgbb"],
code:`
$setServerVar[hgbb;$mentionedChannels[1;yes]]
$description[1;Giriş-çıkış kanalı <#$mentionedChannels[1;yes]> olarak ayarlandı.]
$onlyPerms[admin;$username Yetkin Yok]
`
},{
name:"giriş-çıkış-kapat",
aliases:["hgbb-kapat"],
code:`
$setServerVar[hgbb;]
$description[1;Giriş-çıkış kanalı sıfırlandı.]
$onlyPerms[admin;$username Yetkin Yok]
`
}]