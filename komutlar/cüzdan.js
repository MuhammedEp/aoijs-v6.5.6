module.exports={
name:"cüzdan",
aliases:["param"],
code:`
$reply
$allowUserMentions[]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;\`Hata Algılandı\` Bu Bir Bot]
 
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$title[1;**$username[$mentioned[1;yes]] kişisinin parası**]
$color[1;RANDOM]
$description[1;**Cüzdan:**
<a:coinnn:981248265603383416> $abbreviate[$getVar[para;$mentioned[1;yes]];1]
 
**Banka:**
<:ekonomi:992883154346049587> $abbreviate[$getVar[bank;$mentioned[1;yes]];1]
 
**Meslek**
Meslek:$getVar[meslek;$mentioned[1;yes]]
Maaş:$abbreviate[$getVar[mpara;$mentioned[1;yes]]]

**Toplam Para:**
:money_with_wings: $numberSeparator[$sum[$getVar[para;$mentioned[1;yes]];$getVar[bank;$mentioned[1;yes]]]]]
 
$footer[1;Sorgulayan:$userTag;$authorAvatar]

`
}
