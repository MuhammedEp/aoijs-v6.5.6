module.exports={
name:"sunucu",
aliases:["server"],
code:`
$author[1;$serverName[$guildID] Sunucu bilgileri;$serverIcon]
$thumbnail[1;$serverIcon]
$description[1;
**Kanallar**:[$channelCount[$guildID]]
<:metinkanali:990718310205259888>$channelCount[$guildID;Text] <:ses:990718268895559790>$channelCount[$guildID;Voice] <:kategori:990979997978214400>$channelCount[$guildID;Category]

**Sunucu Sahibi**:
<:tac:981253324584149002> $userTag[$ownerID]

**Sunucu Kuruluş Tarihi**:
📆\`$creationDate[$guildID]\`

**Sunucu Güvenlik Seviyesi**:
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;NONE;Yok;1];LOW;Düşük;1];MEDIUM;Orta;1];HIGH;Yüksek;1];VERY_;Çok ;1]

**Sunucu Bilgisi**:
<:kullanici:977869477247082546> Toplam Üye: $membersCount
<:boost:990915063089094696> Boost sayısı: $serverBoostCount
<a:BAN:954984243816189962> Toplam Yasaklı: $banCount

**Üyeler**:
<:cevrimici:977696691601952768>$membersCount[$guildID;Online]<:bosta:977697844385443970>$membersCount[$guildID;Idle]<:mesgul:977697566332452874>$membersCount[$guildID;Dnd]<:cevrimdisi:977697007810514984>$membersCount[$guildID;all;no]<:bot:977866256931762226>$botCount
]
$footer[1;Sorgulayan: $userTag;$authorAvatar]
$color[1;GREEN]
`
}