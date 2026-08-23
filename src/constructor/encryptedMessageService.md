---
title: "encryptedMessageService (конструктор)"
original: "https://core.telegram.org/constructor/encryptedMessageService"
section: ref
kind: constructor
layout: layout.njk
---

# encryptedMessageService

*Конструктор из схемы TL.*

> Encrypted service message

## Определение TL

```
encryptedMessageService#23734b06 random_id:long chat_id:int date:int bytes:bytes = EncryptedMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_id | [long](/type/long/) | Random message ID, assigned by the author of message. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| chat_id | [int](/type/int/) | ID of encrypted chat |
| date | [int](/type/int/) | Date of sending |
| bytes | [bytes](/type/bytes/) | TL-serialization of the [DecryptedMessage](/type/DecryptedMessage/) type, encrypted with the key created at chat initialization |

## Тип

[EncryptedMessage](/type/EncryptedMessage/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
