module.exports={
name:"ban",
code:`
$author[1;$userTag yasaklamak istiyormusun?;$authorAvatar;]
$thumbnail[1;$userAvatar[$mentioned[1]]]

$description[1;
$addField[1;Yasaklanacak kişi:;$userTag[$mentioned[1]]]
$addField[2;Yasaklanma sebebi:;$noMentionedMessage]
]
`
}