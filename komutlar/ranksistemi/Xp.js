module.exports={
name:"$alwaysExecute",
code:`$onlyForIDs[$botOwnerID;]
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getServerVar[xpm]];$authorID]
$if[$getUserVar[xp;$authorID]>=
`
}