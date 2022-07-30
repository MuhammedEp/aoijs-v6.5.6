module.exports =({
name: "ban",
aliases:["yasakla"],
code: `
$color[1;RED]
$description[1;İstiyon mu?]
$addField[1;» Yasaklanama Sebebi;› $if[$noMentionMessage==;\`Sebeb Belirtilmedi\`;\`$noMentionMessage\`]]
$addField[1;» Yasaklanacak Kişi;› <@$mentioned[1]>]
$thumbnail[1;$mentioned[1]]

$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:<@$authorID>, Kendini uzaklaştıramazsın.}{color:BLACK}}]
$onlyIf[$isBanned[$guildID;$message[1]]==false;{newEmbed:{description:<@$authorID>, Kullanıcı zaten uzaklaştırılmış.}{color:RED}}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{description:<@$authorID>, Rolünden üstte/eşit birini uzaklaştıramazsın.}{color:RED}}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{description:<@$authorID>, Rolünden üstte/eşit birini uzaklaştıramazsın.}{color:RED}}]
$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{description:<@$authorID>, Bir kullanıcı etiketlemelisin.}{color:RED}}]
$onlyIf[$message!=;{newEmbed:{description:<@$authorID>, Kullanıcı belirt.}{color:RED}}]
$addButton[1;Mesaj silmeden banla;secondary;msjsilme;no;💬]
$addButton[1;İptal;secondary;iptal;no;❎]
$addButton[1;Banla;secondary;ban;no;✅]
`
})