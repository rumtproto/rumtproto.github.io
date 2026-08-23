---
title: "account.setPrivacy (метод)"
original: "https://core.telegram.org/method/account.setPrivacy"
section: ref
kind: method
layout: layout.njk
---

# account.setPrivacy

*Метод из схемы TL.*

> Change privacy settings of current account

## Определение TL

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
---functions---
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| key | [InputPrivacyKey](/type/InputPrivacyKey/) | New privacy rule |
| rules | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPrivacyRule](/type/InputPrivacyRule/)> | Peers to which the privacy rule will apply. |

## Результат

[account.PrivacyRules](/type/account.PrivacyRules/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PRIVACY_KEY_INVALID | The privacy key is invalid. |
| 400 | PRIVACY_TOO_LONG | Too many privacy rules were specified, the current limit is 1000. |
| 400 | PRIVACY_VALUE_INVALID | The specified privacy rule combination is invalid. |
