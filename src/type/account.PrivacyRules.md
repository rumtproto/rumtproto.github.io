---
title: "Account.PrivacyRules (тип)"
original: "https://core.telegram.org/type/account.PrivacyRules"
section: ref
kind: type
layout: layout.njk
---

# Account.PrivacyRules

*Тип из схемы TL.*

> Privacy rules

## Определение TL

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;

---functions---

account.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.privacyRules](/constructor/account.privacyRules/) | Privacy rules |

## Методы

| Method | Описание |
|---|---|
| [account.getPrivacy](/method/account.getPrivacy/) | Get privacy settings of current account |
| [account.setPrivacy](/method/account.setPrivacy/) | Change privacy settings of current account |
