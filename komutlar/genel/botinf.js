module.exports={
name:"istatistik",
aliases:["i","bot","botbilgi"],
code:`
$addField[1;Gecikmeler:;
**Ping:** $pingms
**Mesaj Ping:** $executionTimems]

$addField[1;Node Sürümü:;$nodeVersion]

$addField[1;Ram:;$ram[heapTotal]]

$addField[1;Kullanıcı Sayısı:;$allMembersCount]

$addField[1;Sunucu Sayısı:;$serverCount]

$addField[1;Kütüphane:;Glitch[Aoi.js]]

$addField[1;$Bot Sahibi
`
}