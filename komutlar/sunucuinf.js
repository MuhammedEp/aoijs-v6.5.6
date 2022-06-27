module.exports={
name:"sunucu",
aliases:["server"],
code:`
$author[1;$serverName[$guildID] sunucusu bilgileri;$serverIcon]
$thumbnail[1;$serverIcon]
$description[1;
**Kanallar**:[$channelCount[$guildID]]
<:metinkanali:990718310205259888>$channelCount[$guildID;text] <:ses:990718268895559790>$channelCount[$guildID;voice] <:kategori:990718359270203392>$channelCount[$guildID;category]

**Sunucu Sahibi**:
<:tac:981253324584149002> $userTag[$ownerID]

**Sunucu Kuruluş Tarihi**:
$creationDate[$guildID]

**Sunucu Güvenlik Seviyesi**:
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;None;Yok;1];Low;Düşük;1];Medium;Orta;1];High;Yüksek;1];VeryHigh;Çok Yüksek;1]

]
`
}