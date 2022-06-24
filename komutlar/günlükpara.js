module.exports = {
name: "günlük",
code: `$nomention
$reply
$allowUserMentions[]
$description[1;Günlük ödülün $random[100;1500]]
$setVar[coin;$sum[$random[100;1500];$getVar[c;$authorID]];$authorID] `
}