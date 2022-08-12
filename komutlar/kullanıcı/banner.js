module.exports={
name:"banner",
aliases:["afiş"],
code:`
$reply[$messageID;no]
$image[1;$if[$getUserBanner[$mentioned[1;yes]]!=null;$getUserBanner[$mentioned[1;yes]];$userAvatar[$clientID]]
`
}