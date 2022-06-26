module.exports={
name:"ban",
code:`
$argsCheck[>1;<:reddet:973447718301216768>Lütfen yasaklanacak kişiyi etiketleyin.]
$argsCheck[>2;\<:reddet:973447718301216768>Lütfen bir yasaklama sebebi giriniz.]
$author[1;$userTag yasaklamak istiyormusun?;$authorAvatar;]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$description[1;
**Yasaklanacak kişi:**
$userTag[$mentioned[1]]

**Yasaklanma sebebi:**
$noMentionMessage
]
`
}