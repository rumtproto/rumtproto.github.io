---
title: "InputPrivacyRule"
original: "https://core.telegram.org/type/InputPrivacyRule"
section: ref
kind: type
description: "**Правила** приватности указывают, _кто_ может и кто не может что-либо делать; они задаются типом PrivacyRule и его входным аналогом InputPrivacyRule."
layout: layout.njk
---

# InputPrivacyRule

**Правила** приватности указывают, _кто_ может и кто не может что-либо делать; они задаются типом [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/).

Подробнее см. [документацию по приватности »](/api/privacy/).

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

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputPrivacyValueAllowContacts">inputPrivacyValueAllowContacts</a></td><td>Разрешить только контактам</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowAll">inputPrivacyValueAllowAll</a></td><td>Разрешить всем пользователям</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowUsers">inputPrivacyValueAllowUsers</a></td><td>Разрешить только определённым пользователям</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowContacts">inputPrivacyValueDisallowContacts</a></td><td>Запретить только контактам</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowAll">inputPrivacyValueDisallowAll</a></td><td>Запретить всем</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowUsers">inputPrivacyValueDisallowUsers</a></td><td>Запретить только определённым пользователям</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowChatParticipants">inputPrivacyValueAllowChatParticipants</a></td><td>Разрешить только участникам определённых чатов</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowChatParticipants">inputPrivacyValueDisallowChatParticipants</a></td><td>Запретить только участникам определённых чатов</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowCloseFriends">inputPrivacyValueAllowCloseFriends</a></td><td>Разрешить только <a href="/api/privacy">близким друзьям »</a></td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowPremium">inputPrivacyValueAllowPremium</a></td><td>Разрешить только пользователям с <a href="/api/premium">подпиской Premium »</a>; в настоящее время применимо только для <a href="/constructor/inputPrivacyKeyChatInvite">inputPrivacyKeyChatInvite</a>.</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowBots">inputPrivacyValueAllowBots</a></td><td>[@term:Mini App] Разрешить ботам и mini app</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowBots">inputPrivacyValueDisallowBots</a></td><td>Запретить ботам и мини-приложениям</td></tr></tbody></table>

### Связанные страницы

#### [PrivacyRule](/type/PrivacyRule/)

**Правила** приватности вместе с [ключами приватности](/api/privacy/#privacy-keys) указывают, _что_ можно и что нельзя делать; они задаются конструктором [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/).

Подробнее см. [документацию по приватности »](/api/privacy/).

#### [InputPrivacyRule](/type/InputPrivacyRule/)

**Правила** приватности указывают, _кто_ может и кто не может что-либо делать; они задаются типом [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/).

Подробнее см. [документацию по приватности »](/api/privacy/).

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.
