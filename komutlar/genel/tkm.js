
module.exports = [{
  name:"tkm",
  code:`
  $setMessageVar[id;$authorID;$get[id]]
  $let[id;$apiMessage[$channelID;;{newEmbed:{color:WHITE}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{description:
  **__Lütfen Bir Buton Seçin__**
  • Taş Seçmek İçin : ✊
  
  • Kağıt Seçmek İçin : ✋
  
  • Makas Seçmek İçin: ✂️
  }};{actionRow:{button:Taş:1:taş:no:✊}{button:Kağıt:2:kağıt:no:✋}{button:Makas:3:makas:no:✂️}};;;;;yes]]
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