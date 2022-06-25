
module.exports = {
name: "cüzdan", 
aliases:["param"],
code: `

$color[1;RANDOM]
$thumbnail[1;$authorAvatar]
$title[1;Para Bilgileri]
$description[1;

Cüzdanında $getGlobalUserVar[para;$mentioned[1;yes]] 💵 var.
Banka hesabında $getGlobalUserVar[banka;$mentioned[1;yes]] 💵 var.]

$footer[1;$username#$discriminator[$authorID]]

`
}   