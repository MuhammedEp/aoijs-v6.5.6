module.exports={
name:"günlük",
code:`
$title[1;Günlük paran]
$description[1;
***Hesabına yatırılan toplam para:*** $numberSeparator[$sum[$random[15000;25000];$getGlobalUserVar[mpara;$authorID]]]
$setGlobalUserVar[para;$sum[$random[15000;25000];$getGlobalUserVar[para;$authorID];$getGlobalUserVar[mpara;$authorID]];$authorID]

***Mevcut Mesleğin:***$getGlobalUserVar[meslek;$authorID]
**Maaş:**$getGlobalUserVar[mpara;$authorID]]
$replaceText[$rel$cooldown[24h;%time% süre beklemelisin]

`
}
