module.exports = {
name: "günlük",
code: `$nomention
$reply
$allowUserMentions[]
$description[1;Günlük ödülün $random[100;1500]]
$setVar[mc;$sum[$random[100;1500];$getVar[mc;$authorID]];$authorID] `
}