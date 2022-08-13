
module.exports = [{
  name:"emojiler",
  code:`
  $setMessageVar[id;$authorID;$get[id]]
  $let[id;$apiMessage[$channelID;;{newEmbed:{color:GREEN}{thumbnail:$authorAvatar}{footer:Sorgulayan $userTag:$authorAvatar}{description:
  $serverEmojis
  }};{actionRow:{button:Emojileri Winrarla:1:winrar:no:📚}{button:Sil:2:sil:no:🗑️};;;;;yes]]
  `
},{
  name:"taş",
  $if: "v4",
  type:"interaction",
  prototype:"button",
  code:`
  $if[$randomText[taş;kağıt;makas]==taş]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✊ • Bilgisayarda Taş Seçti Berabere Kaldınız
  }};;;;;yes]
  $endif
  $if[$randomText[taş;kağıt;makas]==kağıt]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✋ • Bilgisayar Kağıt Seçti Yenildiniz
  }};;;;;yes]
  $endif
  $if[$randomText[taş;kağıt;makas]==makas]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✊ • Bilgisayar Makas Seçti Kazandınız
  }};;;;;yes]
  $endif
  
  `
  
},{
  
  name:"kağıt",
  $if: "v4",
  type:"interaction",
  prototype:"button",
  code:`
  $if[$randomText[taş;kağıt;makas]==taş]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✊ • Bilgisayar Taş Seçti Kazandınız
  }};;;;;yes]
  $endif
  $if[$randomText[taş;kağıt;makas]==kağıt]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✋ • Bilgisayarda Kağıt Seçti Berabere Kaldınız
  }};;;;;yes]
  $endif
  $if[$randomText[taş;kağıt;makas]==makas]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✊ • Bilgisayar Makas Seçti Kazandınız
  }};;;;;yes]
  $endif
  `
},{
  
  name:"makas",
  $if: "v4",
  type:"interaction",
  prototype:"button",
  code:`
  $if[$randomText[taş;kağıt;makas]==taş]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✊ • Bilgisayarda Taş Seçti Kazandınız
  }};;;;;yes]
  $endif
  $if[$randomText[taş;kağıt;makas]==kağıt]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✋ • Bilgisayar Kağıt Seçti Yenildiniz
  }};;;;;yes]
  $endif
  $if[$randomText[taş;kağıt;makas]==makas]
  $interactionReply[;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{description:
  ✊ • Bilgisayarda Makas Seçti Berabere Kaldınız
  }};;;;;yes]
  $endif
  `
}]