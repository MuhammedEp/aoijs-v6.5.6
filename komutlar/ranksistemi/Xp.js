module.exports={
name:"$alwaysExecute",
code:`$onlyForIDs[$botOwnerID;]
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$getServerVar[xpm]];$authorID]
$if[$getUserVar[xp;$authorID]>=5000;$setUserVar[seviye;$sum[$getUserVar[seviye;$authorID];1];$authorID]
$setUserVar[xp;$sub[$getUserVar[xp;$authorID];5000];$authorID]
$channelSendMessage[$getServerVar[seviyeknl];<@$authorID> seviye atladın $getUserVar[seviye;$authorID] seviyeye ulaştın.]
`
}