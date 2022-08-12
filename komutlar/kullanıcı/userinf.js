module.exports={
name:"kullanıcı",
aliases:["kb","user"],
code:`
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$author[1;$userTag[$mentioned[1;yes]] adlı kişinin bilgileri;$userAvatar[$mentioned[1;yes]]]
$footer[1;Sorgulayan $userTag ;$authorAvatar]
$description[1;
$addField[Rozetler;$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes];HOUSE_BALANCE;]
$if[$hasPerms[$guildID;$mentioned[1;yes];admin]==true;$addField[Üye izinleri;Yönetici];]


]
`
}