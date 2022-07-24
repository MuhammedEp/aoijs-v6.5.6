module.exports=({
name:"setprefix",
aliases:["prefix,prefix-ayarla"],
code:`
$nomention
$onlyPerms[admin;:x: Yetkiniz yetmiyor]
$description[1;Sunucu özel prefixim $getServerVar[prefix] olarak belirlendi.]
$setServerVar[prefix;$message[1]]
$onlyIf[$message[1]!=;Lütfen bir prefix giriniz.]
`
})