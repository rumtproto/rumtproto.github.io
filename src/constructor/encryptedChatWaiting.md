---
title: "encryptedChatWaiting (конструктор)"
original: "https://core.telegram.org/constructor/encryptedChatWaiting"
section: ref
kind: constructor
layout: layout.njk
---

# encryptedChatWaiting

*Конструктор из схемы TL.*

> Chat waiting for approval of second participant.

## Определение TL

```
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | Chat ID |
| access_hash | [long](/type/long/) | Checking sum depending on user ID |
| date | [int](/type/int/) | Date of chat creation |
| admin_id | [long](/type/long/) | Chat creator ID |
| participant_id | [long](/type/long/) | ID of second chat participant |

## Тип

[EncryptedChat](/type/EncryptedChat/)
