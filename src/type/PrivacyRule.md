---
title: "PrivacyRule"
original: "https://core.telegram.org/type/PrivacyRule"
section: ref
kind: type
description: "**Правила** приватности вместе с ключами приватности указывают, _что_ можно и что нельзя делать; они задаются конструктором PrivacyRule и его входным аналогом InputPrivacyRule."
layout: layout.njk
---

# PrivacyRule

**Правила** приватности вместе с [ключами приватности](/api/privacy/#privacy-keys) указывают, _что_ можно и что нельзя делать; они задаются конструктором [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/).

Подробнее см. [документацию по приватности »](/api/privacy/).

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

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/privacyValueAllowContacts">privacyValueAllowContacts</a></td><td>Разрешить всем контактам</td></tr><tr><td><a href="/constructor/privacyValueAllowAll">privacyValueAllowAll</a></td><td>Разрешить всем пользователям</td></tr><tr><td><a href="/constructor/privacyValueAllowUsers">privacyValueAllowUsers</a></td><td>Разрешить только определённым пользователям</td></tr><tr><td><a href="/constructor/privacyValueDisallowContacts">privacyValueDisallowContacts</a></td><td>Запретить только контактам</td></tr><tr><td><a href="/constructor/privacyValueDisallowAll">privacyValueDisallowAll</a></td><td>Запретить всем пользователям</td></tr><tr><td><a href="/constructor/privacyValueDisallowUsers">privacyValueDisallowUsers</a></td><td>Запретить только определённым пользователям</td></tr><tr><td><a href="/constructor/privacyValueAllowChatParticipants">privacyValueAllowChatParticipants</a></td><td>Разрешить всем участникам определённых чатов</td></tr><tr><td><a href="/constructor/privacyValueDisallowChatParticipants">privacyValueDisallowChatParticipants</a></td><td>Запретить только участникам определённых чатов</td></tr><tr><td><a href="/constructor/privacyValueAllowCloseFriends">privacyValueAllowCloseFriends</a></td><td>Разрешить только <a href="/api/privacy">близким друзьям »</a></td></tr><tr><td><a href="/constructor/privacyValueAllowPremium">privacyValueAllowPremium</a></td><td>Разрешить только пользователям с <a href="/api/premium">подпиской Premium »</a>; в настоящее время применимо только для <a href="/constructor/inputPrivacyKeyChatInvite">inputPrivacyKeyChatInvite</a>.</td></tr><tr><td><a href="/constructor/privacyValueAllowBots">privacyValueAllowBots</a></td><td>[@term:Mini App] Разрешить ботам и mini app</td></tr><tr><td><a href="/constructor/privacyValueDisallowBots">privacyValueDisallowBots</a></td><td>Запретить ботам и мини-приложениям</td></tr></tbody></table>

### Связанные страницы

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [PrivacyRule](/type/PrivacyRule/)

**Правила** приватности вместе с [ключами приватности](/api/privacy/#privacy-keys) указывают, _что_ можно и что нельзя делать; они задаются конструктором [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/).

Подробнее см. [документацию по приватности »](/api/privacy/).

#### [InputPrivacyRule](/type/InputPrivacyRule/)

**Правила** приватности указывают, _кто_ может и кто не может что-либо делать; они задаются типом [PrivacyRule](/type/PrivacyRule/) и его входным аналогом [InputPrivacyRule](/type/InputPrivacyRule/).

Подробнее см. [документацию по приватности »](/api/privacy/).
