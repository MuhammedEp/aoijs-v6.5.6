module.exports={
name:"banner",
aliases:["afiş"],
code:`
$reply[$messageID;no]
$$if[$getUserBanner[$mentioned[1;yes]]!=null;$getUserBanner[$mentioned[1;yes]];$serverIcon]
`
}