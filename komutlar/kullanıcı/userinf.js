module.exports={
name:"kullanıcı",
aliases:["kb","user"],
code:`
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$author[1;$userTag[$mentioned[1;yes]] adlı kişinin bilgileri;$userAvatar[$mentioned[1;yes]]]
$footer[1;Sorgulayan $userTag ;$authorAvatar]
$color[1;GREEN]
$description[1;
$addField[Rozetler;> $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes]];HOUSE_BALANCE;<a:balance:1007562254465650789>;1];HOUSE_BRILLIANCE;<a:brilliance:1007562598994149467>;1];HOUSE_BRAVERY;<a:bravery:1007562832268754946>;1]
;VERIFIED_BOT;<a:onayl_bot:1007563011185188944>;1];none;Yok;1]]
$addField[Üye izinleri;$if[$hasPerms[$guildID;$mentioned[1;yes];admin]==true;<:tac:981253324584149002> Yönetici;$if[$hasPerms[$guildID;$mentioned[1;yes];ban;kick;managemessages]==true;<a:05:981249055827067000> Moderatör;<:kullanici:977869477247082546> Üye]]
$addField[Toplam mesaj sayısı;$getUserVar[mesajs;$authorID]
$addField[Ban Sayısı;(yakında)]



]
`
}