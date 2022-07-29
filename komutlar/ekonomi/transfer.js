module.exports={
name:"paragönder",
aliases:["gönder","transfer","send"],
code:`
$suppressErrors[]
$reply[$messageID;no]
$onlyIf[$mentioned[1]!=;Lütfen bir kullanici etiketleyin lütfen.]
$embedSuppressErrors[;<@$authorID> Lütfen göndermek istediğiniz miktarı yazın.]
$onlyIf[$noMentionMessage>0;<@$authorID> Eksili bir sayi veya sıfır (0) giremezsin.]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setVar[para;$sub[$getVar[para;$authorID];$noMentionMessage];$authorID]
$onlyIf[$mentioned[1]!=$authorID; <@$authorID> kendine para gönderemezsin.]
$onlyIf[$noMentionMessage<$getVar[para;$authorID];<@$authorID> o kadar paran yok.]
$color[$random[000000;999999]]
$onlyIf[$isBot[$mentioned[1]]!=true;Bota para gönderemezsin.]
$title[1;Para Transferi Başarılı]
$description[1;💳 | <@$mentioned[1]> adlı kullanıcıya $numberSeparator[$noMentionMessage] <:MacCoin:1000805779592458370> MacCoin gönderdin.]
$onlyIf[$noMentionMessage<10000001; <@$authorID>,  10.000.000 üstü sayı giremezsin.]
$setUserVar[vergi;$sum[$getUserVar[vergi;$authorID];1];$authorID] 
`
}