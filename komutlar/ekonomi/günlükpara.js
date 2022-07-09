module.exports={
name:"günlük",
code:`

$color[1;#ffff]
$title[1;Günlük Para]

$description[1;
***Hesabına yatırlan toplam para:*** $sum[$getGlobalUserVar[mpara;$authorID];$random[2500;10000]]
$setGlobalUserVar[para;$sum[$getGlobUserVar[mpara;$authorID];$random[2500;10000];$getGlobalUserVar[para;$authorID]];$authorID]

***Mevcut Mesleğin:***$getGlobalUserVar[meslek;$authorID]
**Maaş:**$numberSeparator[$getGlobalUserVar[mpara;$authorID]]]

$cooldown[1m; $username,\`bu komutu kullanmak için %time% beklemelisin.\`]

`
}
