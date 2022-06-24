module.exports = {
name: "günlük",
code: `$nomention
$reply
$allowUserMentions[]
$description[1;Günlük ödülün $random[100;1500]]
$setVar[para;$sum[$random[100;1500];$getVar[para;$authorID]];$authorID] `
}