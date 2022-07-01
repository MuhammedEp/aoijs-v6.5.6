
module.exports = ({
name: "ban",
aliases:["yasakla"],
code: `
$ban[$guildID;$mentioned[1];0;$noMentionMessage[1]]
$color[1;#2f3136]
$title[1;İşlem Başarılı]
$description[1;Bir sunucu üyesi sunucudan uzaklaştrıldı...]
$addField[1;» Uzaklaştırma sebebi;› $if[$noMentionMessage==;\`Sebeb Belirtilmedi\`;\`$noMentionMessage\`]]
$addField[1;» Uzaklaştıran yetkili;› <@$authorID>]
$addField[1;» Uzaklaştırılan sunucu üyesi;› <@$mentioned[1]>]
$image[1;https://c.tenor.com/20Bv1f8Vx30AAAAC/thor-banned-ban-hammer.gif]
$thumbnail[1;$authorAvatar]
$timezone[Turkey]
$footer[1;$username Tarafından]
$addTimeStamp[1]

$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:<@$authorID>, Kendini uzaklaştıramazsın.}{color:2f3136}}]
$onlyIf[$isBanned[$guildID;$message[1]]==false;{newEmbed:{description:<@$authorID>, Kullanıcı zaten uzaklaştırılmış.}{color:2f3136}}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{description:<@$authorID>, Rolünden üstte/eşit birini uzaklaştıramazsın.}{color:2f3136}}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{description:<@$authorID>, Rolünden üstte/eşit birini uzaklaştıramazsın.}{color:2f3136}}]
$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{description:<@$authorID>, Bir kullanıcı etiketlemelisin.}{color:2f3136}}]
$onlyIf[$message!=;{newEmbed:{description:<@$authorID>, Kullanıcı belirt.}{color:2f3136}}]
$addButton[1;Onayla;primary;ban;no;✔️]
$addButton[1;İptal;primary;iptal;no;❌]
$addButton[1;Mesaj silmeden banla;primary;msjsilme;no;💬]
`
});
bot.interactionCommand({
  name: "helloButton",
  prototype: 'button',
  code: `
  $interactionReply[Bye, bye!]
  `bot.interactionCommand({
  name: "helloButton",
  prototype: 'button',
  code: `
  $interactionReply[Bye, bye!]
  `
bot.interactionCommand({
  name: "helloButton",
  prototype: 'button',
  code: `
  $interactionReply[Bye, bye!]
bot.interactionCommand({
  name: "helloButton