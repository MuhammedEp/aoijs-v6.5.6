module.exports={
name:"paragönder",
aliases:["gönder","transfer","send"],
code:`
$suppressErrors[]
$reply[$messageID;no]
$onlyIf[$mentioned[1]!=;Lütfen bir kullanici etiketleyin lütfen.]

$onlyIf[$noMentionMessage>=0;<@$authorID> Eksili bir sayi veya sıfır (0) giremezsin.]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage];$authorID]
$color[1;$random[000000;999999]]
$title[1;Para Transferi Başarılı]
$description[1;💳 | <@$mentioned[1]> adlı kullanıcıya $numberSeparator[$noMentionMessage] <:MacCoin:1000805779592458370> MacCoin gönderdin.]


`
}