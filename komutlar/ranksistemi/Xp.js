module.exports={
name:"$alwaysExecute",
code:`
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getServerVar[xpm]];$authorID]
`
}