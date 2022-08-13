module.exports={
name:"$alwaysExecute",
code:`
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getServerVar[xpm]];$authorID]
$if[$getUserVar[xp;$authorID]==5000;
$setUserVar[xp;$sub[$getUserVar[xp;$auyhorID];5000];$authorID]
$setUserVar[seviye;$sum[$getUserVar[seviye;$authorID];1];$authorID]
$useChannel[$getServerVar[seviyeknl]]
<@$authorID> seviye atladın $getUserVar[seviye;$authorID] seviyeye ulaştın.;$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getServerVar[xpm]];$au]
$suppressErrors
`
}