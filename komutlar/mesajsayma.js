module.exports={
name:"$alwaysExecute",
code:`
$setUserVar[mesajs;$sum[$getUserVar[mesajs;$authorID];1];$authorID]
`
}