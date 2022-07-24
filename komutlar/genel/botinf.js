module.exports={
name:"istatistik",
aliases:["i","bot","botbilgi"],
code:`
$addField[1;Gecikme:;$pingms]

$addField[1;Node Sürümü:;$nodeVersion]

$addField[1;Ram:;$ram[heapTotal]]

$addField[1;Kullanıcı Sayısı:;$allMembersCount]

$addField[1;Sunucu Sayısı:;$serverCount]

$addField[1;Kütüphane:;Glitch[Aoi.js]]

$addField[1;Bot Sahibi:;[$userTag[$botOwnerID]](https://discord.com/users/$botOwnerID)]

$addField[1;Yapım tarihi:;$creationDate[$clientID]]

$author[1;$username[$clientID] bot bilgileri;$userAvatar[$clientID];]
$footer[1;Sorgulayan: $userTag;$authorAvatar;]
$thumbnail[1;$userAvatar[$clientID]]
$color[1;GREEN]
`
}