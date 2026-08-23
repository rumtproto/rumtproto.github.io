---
title: "account.getPrivacy (метод)"
original: "https://core.telegram.org/method/account.getPrivacy"
section: ref
kind: method
layout: layout.njk
---

# account.getPrivacy

*Метод из схемы TL.*

> Get privacy settings of current account

## Определение TL

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
---functions---
account.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| key | [InputPrivacyKey](/type/InputPrivacyKey/) | Peer category whose privacy settings should be fetched |

## Результат

[account.PrivacyRules](/type/account.PrivacyRules/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PRIVACY_KEY_INVALID | The privacy key is invalid. |
