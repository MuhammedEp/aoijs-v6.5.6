module.exports={
name:"istatistik",
aliases:["i","bot","botbilgi"],
code:`
$addField[1;Gecikmeler;
**Ping:** $pingms
**Mesaj Ping:** $executionTimems]

$addField[1;Node Sürümü;$nodeVersion]

$addField[1;Ram;$ram[heapTotal]]
`
}