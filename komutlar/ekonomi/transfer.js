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
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:Kendine para göndermezsin.}{color:RED}} ]
$onlyIf[$noMentionMessage!=;{newEmbed:{description:Bir miktar belirtmelisin.}{color:GREEN}}]
$onlyIf[$userExists[$mentioned[1]]==false;Bir kullanici belirt]
$onlyIf[$mentioned[1]!=;{newEmbed:{description:Bir kullanıcı etiketlemelisin.}


`
}