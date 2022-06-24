module.exports = {
name: "sil",
aliases:["temizle"],
code: `$clear[$message]
$onlyIf[$message!=;Lütfen silinecek mesaj sayısını giriniz]
$description[1;$message tane mesaj silindi]
$editIn[2s;$message tane mesajı uzaya attım by]
$deleteIn[5s]
$onlyPerms[admin;Yetkin yok kanki]`
}