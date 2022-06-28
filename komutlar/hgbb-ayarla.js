module.exports=[{
name:"giriş-çıkış-ayarla",
aliases:["hgbb-ayarla"],
code:`
$setServerVar[hgbb;$mentionedChannels[1;yes]]
$description[1;Giriş-çıkış kanalı <#$mentionedChannels[1;yes]> olarak ayarlandı.]

`
},{
name:"giriş-çıkış-kapat",
aliases:["hgbb-kapat"],
code:`
$setServerVar[hgbb;]
$description[1;Giriş-çıkış kanalı s
`
}]