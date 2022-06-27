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
📆\`$creationDate[$guildID]\`

**Sunucu Güvenlik Seviyesi**:
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;NONE;Yok;1];LOW;Düşük;1];MEDİUM;Orta;1];HİGH;Yüksek;1];VERYHİGH;Çok Yüksek;1]

**Sunucu Bilgisi**:
<:kullanici:977869477247082546> Toplam Üye: $membersCount
<:boost:990915063089094696> Boost sayısı: $serverBoostCount

]
`
}