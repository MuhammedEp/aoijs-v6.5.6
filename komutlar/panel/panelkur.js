module.exports=({
name:"panel",
code:`
$onlyPerms[admin;]
$description[1;Sunucu panel kuruldu]
$setServerVar[panel;açık]
$createChannel[$guildID;Üye Sayısı・$membersCount;Voice;no;$channelID[Sunucu Bilgi]]
$createChannel[$guildID;Bot Sayısı・$botCount;Voice;no;$channelID[Sunucu Bilgi]]
$createChannel[$guildID;Sunucu Bilgi;Category;no]
`
})