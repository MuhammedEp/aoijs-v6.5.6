module.exports={
name:"ban",
code:`
$author[1;$userTag yasaklamak istiyormusun?;$authorAvatar;]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$description[1;
**Yasaklanacak kişi:**
$userTag[$mentioned[1]]

**Yasaklanma sebebi:**
$noMentionMessage
]
$onlyIf[$noMentionMessage!=;<:reddet:973447718301216768> Lütfen yasaklama sebebi giriniz.]
`
}