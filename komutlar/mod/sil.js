module.exports = {
name: "sil",
aliases:["temizle"],
code: `$onlyIf[$message[1]!=;Lütfen silinecek mesaj sayısını giriniz en az 2 olsun!]
$clear[$message[1]]
$color[1;$random[000000;999999]]
$suppressErrors[Lütfen sayısal bir değer giriniz]
$description[1;**$message[1]** tane mesaj silindi..]
$deleteIn[5s]
$onlyPerms[admin;Yetkin yok kanki]
`
}