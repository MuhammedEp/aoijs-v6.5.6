module.exports={
name:"ban",
aliases:["yasakla"],
code:`$reply
$author[1;$userTag yasaklamak istiyormusun?;$authorAvatar;]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$description[1;
**Yasaklanacak kişi:**
$message[1]

**Yasaklanma sebebi:**
$message[2]
]

$onlyIf[$findUser[$message[1];no]!=;<:reddet:973447718301216768> Lütfen yasaklanacak kişiyi etiketleyin.]
$onlyIf[$message[1]!=$ownerID;Sunucu sahibini yasaklayamazsın.]

`
}