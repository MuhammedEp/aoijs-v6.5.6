
module.exports = {
name: "günlük",
code: `

$color[1;RANDOM]
$title[1;Günlük Para]

$description[1;Günlük ödülün $random[100;500] 💵]


$setGlobalUserVar[para;$sum[$random[100;500];$getGlobalUserVar[para;$authorID]];$authorID] 

$globalCooldown[24h; <@$authorID>, bu komutu kullanmak için %time% beklemelisin.]

`
}   