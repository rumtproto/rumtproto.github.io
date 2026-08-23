---
title: "InputPrivacyRule (тип)"
original: "https://core.telegram.org/type/InputPrivacyRule"
section: ref
kind: type
layout: layout.njk
---

# InputPrivacyRule

*Тип из схемы TL.*

> Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).
> See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

## Определение TL

```
inputPrivacyValueAllowContacts#d09e07b = InputPrivacyRule;
inputPrivacyValueAllowAll#184b35ce = InputPrivacyRule;
inputPrivacyValueAllowUsers#131cc67f users:Vector<InputUser> = InputPrivacyRule;
inputPrivacyValueDisallowContacts#ba52007 = InputPrivacyRule;
inputPrivacyValueDisallowAll#d66b66c9 = InputPrivacyRule;
inputPrivacyValueDisallowUsers#90110467 users:Vector<InputUser> = InputPrivacyRule;
inputPrivacyValueAllowChatParticipants#840649cf chats:Vector<long> = InputPrivacyRule;
inputPrivacyValueDisallowChatParticipants#e94f0f86 chats:Vector<long> = InputPrivacyRule;
inputPrivacyValueAllowCloseFriends#2f453e49 = InputPrivacyRule;
inputPrivacyValueAllowPremium#77cdc9f1 = InputPrivacyRule;
inputPrivacyValueAllowBots#5a4fcce5 = InputPrivacyRule;
inputPrivacyValueDisallowBots#c4e57915 = InputPrivacyRule;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputPrivacyValueAllowContacts](/constructor/inputPrivacyValueAllowContacts/) | Allow only contacts |
| [inputPrivacyValueAllowAll](/constructor/inputPrivacyValueAllowAll/) | Allow all users |
| [inputPrivacyValueAllowUsers](/constructor/inputPrivacyValueAllowUsers/) | Allow only certain users |
| [inputPrivacyValueDisallowContacts](/constructor/inputPrivacyValueDisallowContacts/) | Disallow only contacts |
| [inputPrivacyValueDisallowAll](/constructor/inputPrivacyValueDisallowAll/) | Disallow all |
| [inputPrivacyValueDisallowUsers](/constructor/inputPrivacyValueDisallowUsers/) | Disallow only certain users |
| [inputPrivacyValueAllowChatParticipants](/constructor/inputPrivacyValueAllowChatParticipants/) | Allow only participants of certain chats |
| [inputPrivacyValueDisallowChatParticipants](/constructor/inputPrivacyValueDisallowChatParticipants/) | Disallow only participants of certain chats |
| [inputPrivacyValueAllowCloseFriends](/constructor/inputPrivacyValueAllowCloseFriends/) | Allow only [close friends »](https://core.telegram.org/api/privacy) |
| [inputPrivacyValueAllowPremium](/constructor/inputPrivacyValueAllowPremium/) | Allow only users with a [Premium subscription »](https://core.telegram.org/api/premium), currently only usable for [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/). |
| [inputPrivacyValueAllowBots](/constructor/inputPrivacyValueAllowBots/) | Allow bots and mini apps |
| [inputPrivacyValueDisallowBots](/constructor/inputPrivacyValueDisallowBots/) | Disallow bots and mini apps |

## Related pages

#### [PrivacyRule](/type/PrivacyRule/)

Privacy **rules** together with [privacy keys](https://core.telegram.org/api/privacy#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

#### [InputPrivacyRule](/type/InputPrivacyRule/)

Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.
