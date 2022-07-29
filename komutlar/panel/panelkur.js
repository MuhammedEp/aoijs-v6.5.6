module.exports={
name:"panel",
code:`
$onlyPerms[admin;]
$description[1;Sunucu panel kuruldu]
$createChannel[$guildID;Üye Sayısı・$getServerVar[puye];Voice;no]
$createChannel[$guildID;Bot Sayısı・$getServerVar[pbot];Voice;no]

`
}