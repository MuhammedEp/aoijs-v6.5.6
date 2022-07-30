module.exports =({
name: "ban",
aliases:["yasakla"],
code: `
$color[1;#2f3136]
$author[1;$username sunucudan yasaklamak istiyormusun?]

$addField[1;» Yasaklanama Sebebi;› $if[$noMentionMessage==;\`Sebeb Belirtilmedi\`;\`$noMentionMessage\`]]
$addField[1;» Yasaklanacak Kişi;› <@$mentioned[1]>]
$thumbnail[1;$mentioned[1]]
$timezone[Turkey]
$addTimeStamp[1]

$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:<@$authorID>, Kendini uzaklaştıramazsın.}{color:2f3136}}]
$onlyIf[$isBanned[$guildID;$message[1]]==false;{newEmbed:{description:<@$authorID>, Kullanıcı zaten uzaklaştırılmış.}{color:2f3136}}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{description:<@$authorID>, Rolünden üstte/eşit birini uzaklaştıramazsın.}{color:2f3136}}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{description:<@$authorID>, Rolünden üstte/eşit birini uzaklaştıramazsın.}{color:2f3136}}]
$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{description:<@$authorID>, Bir kullanıcı etiketlemelisin.}{color:2f3136}}]
$onlyIf[$message!=;{newEmbed:{description:<@$authorID>, Kullanıcı belirt.}{color:2f3136}}]
$addButton[1;Mesaj silmeden banla;secondary;msjsilme;no;💬]
$addButton[1;İptal;secondary;iptal;no;❎]
$addButton[1;Banla;secondary;ban;no;✅]
`
})