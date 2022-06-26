module.exports={
name:"ban",
aliases:["yasakla"],
code:`$reply
$author[1;$userTag yasaklamak istiyormusun?;$authorAvatar;]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$description[1;
**Yasaklanacak kişi:**
$userTag[$mentioned[1]]

**Yasaklanma sebebi:**
$noMentionMessage
]
$onlyIf[$noMentionMessage!=;<:reddet:973447718301216768> Lütfen yasaklama sebebi giriniz.]
$onlyIf[$mentioned[1]==$serverOwner;<:reddet:973447718301216768> Sunucu sahibini yasaklamazsın.]
$onlyIf[$mentioned[1]==$authorID;Kendini yasaklamazsın knk.]
$argsCheck[>1;Lütfen yasaklanacak kişiyi etiketleyin.]
`
}