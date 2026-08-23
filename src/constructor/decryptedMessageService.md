---
title: "decryptedMessageService (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageService"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageService

*Конструктор из схемы TL.*

> Contents of an encrypted service message.

## Определение TL

```
===8===
decryptedMessageService#aa48327d random_id:long random_bytes:bytes action:DecryptedMessageAction = DecryptedMessage;

===17===
decryptedMessageService#73164160 random_id:long action:DecryptedMessageAction = DecryptedMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_id | [long](/type/long/) | Random message ID, assigned by the message author. Must be equal to the ID passed to the sending method. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| random_bytes | [bytes](/type/bytes/) | Random bytes, removed in Layer 17. |
| action | [DecryptedMessageAction](/type/DecryptedMessageAction/) | Action relevant to the service message |

## Тип

[DecryptedMessage](/type/DecryptedMessage/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
