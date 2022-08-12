module.exports=[{
name:"seviye-log",
code:`
$description[1;Seviye Log kanalı <#$mentionedChannels[1;yes]> olarak belirlendi.]
$color[1;GREEN]
$setServerVar[seviyeknl;$mentionedChannels[1;yes]]

`
},{
name:"seviye-log-kapat",
code:`
$description[1;Seviye Log kanalı kapatıldı.]
$color[1;GREEN]
$setServerVar[seviyeknl;]
`
},{
name:"tecrübe-miktar",
  code:`
  $description[1;Seviye artış miktarı **$message[1]** olarak ayarlandı.]
  $color[1;RED]
  $setServerVar[xpm;$message[1]]
  $onlyIf[$isNumber[$message[1]]!=false;{newEmbed{:description:Bir sayı giriniz lütfen.}{color:RED}}]
`
}]