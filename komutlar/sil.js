module.exports = {
name: "sil",
aliases:["temizle"],
code: `$clear[$message]
$title[1;$message tane mesaj silindi]
$deleteIn[5s]
$onlyPerms[admin;Yetkin yok kanki]`
}