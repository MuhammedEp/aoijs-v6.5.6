module.exports=({
name:"setprefix",
aliases:["prefix,prefix-ayarla"],
code:`
$reply[$messageID;;no]
$onlyPerms[admin;:x: Yetkiniz yetmiyor]
$setServerVar[prefix;$message[1]]
$description[1;Sunucu özel prefixim $message[1] olarak belirlendi.]
$onlyIf[$message[1]!=;Lütfen yeni prefixi giriniz.]
$wait[1s]
`
})