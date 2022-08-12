module.exports={
name:"kullanıcı",
aliases:["kb","user"],
code:`
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$author[1;$userTag[$mentioned[1;yes]] adlı kişinin bilgileri;$userAvatar[$mentioned[1;yes]]]
$footer[1;Sorgulayan $userTag ;$authorAvatar]
$description[1;
$addField[Rozetler;$getUserBadges]
$if[$


]
`
}