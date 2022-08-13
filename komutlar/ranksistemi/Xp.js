module.exports={
name:"$alwaysExecute",
code:`
$if[$get
$useChannel[$getServerVar[seviyeknl]]
<@$authorID> seviye atladın $getUserVar[seviye;$authorID] seviyeye ulaştın.
$suppressErrors
`
}