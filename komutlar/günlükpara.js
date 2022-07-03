
module.exports = {
name: "günlük",
code: `

$color[1;RANDOM]
$title[1;Günlük Para]

$description[1;Günlük ödülün $abb$random[2500;10000]]


$setGlobalUserVar[para;$sum[$random[100;500];$getGlobalUserVar[para;$authorID]];$authorID] 

$globalCooldown[24h; <@$authorID>, bu komutu kullanmak için %time% beklemelisin.]

`
}   