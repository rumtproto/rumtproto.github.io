---
title: "account.privacyRules (конструктор)"
original: "https://core.telegram.org/constructor/account.privacyRules"
section: ref
kind: constructor
layout: layout.njk
---

# account.privacyRules

*Конструктор из схемы TL.*

> Privacy rules

## Определение TL

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| rules | [Vector](https://core.telegram.org/type/Vector%20t)<[PrivacyRule](/type/PrivacyRule/)> | Privacy rules |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats to which the rules apply |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users to which the rules apply |

## Тип

[account.PrivacyRules](/type/account.PrivacyRules/)
