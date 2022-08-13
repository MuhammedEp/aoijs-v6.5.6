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
  $color[1;GREEN]
  $setServerVar[xpm;$message[1]]
  $onlyIf[$message[1]<=500;{newEmbed:{description:Tecrübe-miktar sayısını 1 ile 500 arasında belirleyebilirsin.}{color:RED}}]
  $onlyIf[$message[1]=>1;{newEmbed:{description:Tecrübe-miktar sayısını 1 ile 500 arasında belirleyebilirsin.}{color:RED}}]
  $onlyIf[$isNumber[$message[1]]!=false;{newEmbed:{description:Bir sayı giriniz lütfen.}{color:RED}}]
`
}]