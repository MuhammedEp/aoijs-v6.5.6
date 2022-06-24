module.exports = {
name: "sil",
aliases:["temizle"],
code: `$clear[$message[1]]
$onlyIf[$message[1]!=;Lütfen silinecek mesaj sayısını giriniz en az 2 olsun!]
$suppressErrors[Lütfen sayısal bjr değer giriniz]
$description[1;$message[1] tane mesaj silindi]
$editIn[2s;$message[1] tane mesajı uzaya attım by]
$deleteIn[5s]
$onlyPerms[admin;Yetkin yok kanki]`
}