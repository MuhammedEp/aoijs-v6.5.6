
module.exports = {
name: "unban",
code: `
$unban[$guildID;$message[1];$noMentionMessage]
$color[1;#2f3136]
$title[1;İşlem Başarılı]
$description[1;Bir sunucu üyesinin uzaklaştırması kaldırıldı...]
$addField[1;» Kaldırılma sebebi;› $if[$messageSlice[2;10]==;\`Sebeb Belirtilmedi\`;\`$messageSlice[2;10]\`]]
$addField[1;» Kaldıran yetkili;› $userTag[@$authorID]]
$addField[1;» Uzaklaştırılması kaldırılan kullanıcı;› $userTag[@$message[1]]]
$thumbnail[1;$authorAvatar]
$timezone[Turkey]
$footer[1;$username Tarafından]
$addTimeStamp[1]

$onlyIf[$message[1]!=$authorID;{newEmbed:{description:<@$authorID>, Dostum zaten bu sunucuda bulunuyorsun nasıl uzaklaştırılmış olabilirsin?.}{color:2f3136}}]
$onlyIf[$isBanned[$guildID;$message[1]]==true;{newEmbed:{description:<@$authorID>, Kullanıcı zaten uzaklaştırılmamış.}{color:2f3136}}]
$onlyIf[$userExists[$message[1]]==true;{newEmbed:{description:<@$authorID>, Böyle bir kullanıcı yok.}{color:2f3136}}]
$onlyIf[$isNumber[$message[1]]==true;{newEmbed:{description:<@$authorID>, Kullanıcı ID'si belirt.}{color:2f3136}]
`
}
