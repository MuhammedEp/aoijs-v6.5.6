module.exports={
name:"günlük",
code:`

$color[1;RANDOM]
$title[1;<a:coinnn:981248265603383416>Günlük Para<a:coinnn:981248265603383416>]

$description[1;
***Hesabına yatırlan toplam para:*** $numberSeparator[$sum[$getGlobalUserVar[mpara;$authorID];$random[2500;10000]]]
$setGlobalUserVar[para;$sum[$getGlobUserVar[mpara;$authorID];$random[2500;10000];$getGlobalUserVar[para;$authorID]];$authorID]

***Mevcut Mesleğin:***$getGlobalUserVar[meslek;$authorID]
**Maaş:**$numberSeparator[$getGlobalUserVar[mpara;$authorID]]]

$cooldown[1; <@$authorID>,\`bu komutu kullanmak için %time% beklemelisin.\`]

`
}
