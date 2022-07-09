module.exports={
name:"günlük",
code:`
$title[1;Günlük paran]
$description[1;
***Hesabına yatırılan toplam para:***$numberSeparator[$sum[$random[15000;25000];$getGlobalUserVar[mpara;$authorID]]]
$set


`
}
