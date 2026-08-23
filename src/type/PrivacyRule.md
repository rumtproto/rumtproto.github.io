---
title: "PrivacyRule (тип)"
original: "https://core.telegram.org/type/PrivacyRule"
section: ref
kind: type
layout: layout.njk
---

# PrivacyRule

*Тип из схемы TL.*

> Privacy **rules** together with [privacy keys](https://core.telegram.org/api/privacy#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).
> See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

## Определение TL

```
privacyValueAllowContacts#fffe1bac = PrivacyRule;
privacyValueAllowAll#65427b82 = PrivacyRule;
privacyValueAllowUsers#b8905fb2 users:Vector<long> = PrivacyRule;
privacyValueDisallowContacts#f888fa1a = PrivacyRule;
privacyValueDisallowAll#8b73e763 = PrivacyRule;
privacyValueDisallowUsers#e4621141 users:Vector<long> = PrivacyRule;
privacyValueAllowChatParticipants#6b134e8e chats:Vector<long> = PrivacyRule;
privacyValueDisallowChatParticipants#41c87565 chats:Vector<long> = PrivacyRule;
privacyValueAllowCloseFriends#f7e8d89b = PrivacyRule;
privacyValueAllowPremium#ece9814b = PrivacyRule;
privacyValueAllowBots#21461b5d = PrivacyRule;
privacyValueDisallowBots#f6a5f82f = PrivacyRule;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [privacyValueAllowContacts](/constructor/privacyValueAllowContacts/) | Allow all contacts |
| [privacyValueAllowAll](/constructor/privacyValueAllowAll/) | Allow all users |
| [privacyValueAllowUsers](/constructor/privacyValueAllowUsers/) | Allow only certain users |
| [privacyValueDisallowContacts](/constructor/privacyValueDisallowContacts/) | Disallow only contacts |
| [privacyValueDisallowAll](/constructor/privacyValueDisallowAll/) | Disallow all users |
| [privacyValueDisallowUsers](/constructor/privacyValueDisallowUsers/) | Disallow only certain users |
| [privacyValueAllowChatParticipants](/constructor/privacyValueAllowChatParticipants/) | Allow all participants of certain chats |
| [privacyValueDisallowChatParticipants](/constructor/privacyValueDisallowChatParticipants/) | Disallow only participants of certain chats |
| [privacyValueAllowCloseFriends](/constructor/privacyValueAllowCloseFriends/) | Allow only [close friends »](https://core.telegram.org/api/privacy) |
| [privacyValueAllowPremium](/constructor/privacyValueAllowPremium/) | Allow only users with a [Premium subscription »](https://core.telegram.org/api/premium), currently only usable for [inputPrivacyKeyChatInvite](/constructor/inputPrivacyKeyChatInvite/). |
| [privacyValueAllowBots](/constructor/privacyValueAllowBots/) | Allow bots and mini apps |
| [privacyValueDisallowBots](/constructor/privacyValueDisallowBots/) | Disallow bots and mini apps |

## Related pages

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [PrivacyRule](/type/PrivacyRule/)

Privacy **rules** together with [privacy keys](https://core.telegram.org/api/privacy#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.

#### [InputPrivacyRule](/type/InputPrivacyRule/)

Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](https://core.telegram.org/api/privacy) for more info.
