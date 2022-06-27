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
$onlyIf[$findUser[$mentioned[1];no]!=;<:reddet:973447718301216768> Lütfen yasaklanacak kişiyi etiketleyin.]
$onlyIf[$mentioned[1]!=$serverOwner;<:reddet:973447718301216768> Sunucu sahibini yasaklamazsın.]
$onlyIf[$mentioned[1]!=$authorID;Kendini yasaklamazsın knk.]
$onlyIf[$noMentionMessage==;Lütfen yasaklama sebebi giriniz.]
`
}