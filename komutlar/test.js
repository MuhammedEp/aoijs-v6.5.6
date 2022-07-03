module.exports = [{
  name:"test",
  aliases:["tes"],
  code:`
  $title[1;İstatistik]
  $description[1;
  Sahibim --> <@$botOwnerID>
  Toplam Sunucu Sayım --> **$serverCount**
  Toplam Üye Sayım --> **$allMembersCount**
  Dilim --> **Aoi.js**
  Sürümüm --> **v5.2.0**
  Toplam Komut Sayım --> **$commandsCount**
  Uptime Sürem --> **$uptime**
  **・Bağlantılar:**
  ** [Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8 **]
  $color[1;RANDOM]
  $addButton[1;Yenile;3;yenile;no;:arrows_clockwise:]
  `
},{
   type: "interaction",
  prototype: "button",
  name: "yenile",
  code: `$interactionUpdate[;{newEmbed:{title:İstatistik}{color:RANDOM}
  {description:
  Sahibim --> <@$botOwnerID>
  Toplam Sunucu Sayım --> **$serverCount**
  Toplam Üye Sayım --> **$allMembersCount**
  Dilim --> **Aoi.js**
  Sürümüm --> **v5.2.0**
  Toplam Komut Sayım --> **$commandsCount**
  Uptime Sürem --> **$uptime**
  **・Bağlantılar:**
  ** [Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8)**}}
  ;{actionRow:
  {button:Yenile:3:yenile:no::arrows_clockwise:}
  };;;;;true]
  `
  }]