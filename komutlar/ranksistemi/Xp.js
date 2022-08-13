module.exports={
name:"$alwaysExecute",
code:`
$if[$getUserVar[xp;$authorID]!=5550;$setUserVar[xp;$sum[$getServerVar[xpm];$getUserVar[xp;$authorID]];$authorID];$setUserVar[seviye;$sum[$getUserVar[seviye;$authorID];1];$authorID] $setUserVar[xp;$sub[$getUserVar[xp;$authorID];5000];$authorID]
$useChannel[$getServerVar[seviyeknl]]
<@$authorID> tebrikler seviye atladın $getUserVar[seviye;$authorID] seviyeye ulaştın.🥳]
$suppressErrors
`
}