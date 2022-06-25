module.exports = {
name: "günlük",
code: 
`
$description[1;Günlük ödülün $random[100;1500]]
$setVar[param;$sum[$random[100;1500];$getVar[param;$authorID]];$authorID] `
}