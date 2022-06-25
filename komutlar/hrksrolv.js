module.exports = [{
  name:"herkese-rol-ver",
  code:`
  $description[1;
  **<@$authorID> Başarı İle Herekese <@&$mentionedRoles[1]> Adlı Rol Veriliyo**]
  $color[1;GREEN]
  $forEachMember[1;{"herkeserolver": "$mentionedRoles[1]"};hrv;]
  $onlyPerms[manageroles;**<@$authorID> Bu Komutu Kullanmak İçin \`Rolleri Yönet\` Yetkisine Sahip Olmalısın]
  $onlyBotPerms[manageroles;**Üzgünüm \`Rolleri Yönet\` Yetkim Olmdığı İçin İşlemi Gerçekleştiremiyorum**]
  $onlyIf[$message[1]!=;**<@$authorID> Lütfen Bir Rol Etiketle**]
  `
},{
  name:"hrv",
  type:"awaited",
  code:`
  $giveRole[$guildID;$authorID;$awaitData[hrv]]
  `
},{
  name:"herkesten-rol-al",
  code:`
  $description[1;
  **<@$authorID> Başarı İle Herkesten <@&$mentionedRoles[1]> Adlı Rol Alınıyor**]
  $color[1;GREEN]
  $forEachMember[1;{"herkestenrolal":"$mentionedRoles[1]"};hra;]
  $onlyPerms[manageroles;**<@$authorID> Bu Komutu Kullanmak İçin \`Rolleri Yönet\` Yetkisine Sahip Olmalısın]
  $onlyBotPerms[manageroles;**Üzgünüm \`Rolleri Yönet\` Yetkim Olmdığı İçin İşlemi Gerçekleştiremiyorum**]
  $onlyIf[$message[1]!=;**<@$authorID> Lütfen Bir Rol Etiketle**]
  `
},{
  name:"hra",
  type:"awaited",
  code:`
  $takeRole[$guildID;$authorID;$awaitData[hra]]
  `
}] 