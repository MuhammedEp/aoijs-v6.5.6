module.exports={
name:"paragönder",
aliases:["gönder","transfer","send"],
code:`
$suppressErrors[]
$reply[$messageID;no]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage];$authorID]
$color[1;$random[000000;999999]]
$title[1;Para Transferi Başarılı]
$description[1;💳 | <@$mentioned[1]> adlı kullanıcıya $numberSeparator[$noMentionMessage] <:MacCoin:1000805779592458370> MacCoin gönderdin.]
$onlyIf[$mentioned[1]!=$authorID;Bu sensin ]

`
}