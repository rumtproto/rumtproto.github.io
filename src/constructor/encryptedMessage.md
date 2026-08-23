---
title: "encryptedMessage (конструктор)"
original: "https://core.telegram.org/constructor/encryptedMessage"
section: ref
kind: constructor
layout: layout.njk
---

# encryptedMessage

*Конструктор из схемы TL.*

> Encrypted message.

## Определение TL

```
encryptedMessage#ed18c118 random_id:long chat_id:int date:int bytes:bytes file:EncryptedFile = EncryptedMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_id | [long](/type/long/) | Random message ID, assigned by the author of message. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| chat_id | [int](/type/int/) | ID of encrypted chat |
| date | [int](/type/int/) | Date of sending |
| bytes | [bytes](/type/bytes/) | TL-serialization of [DecryptedMessage](/type/DecryptedMessage/) type, encrypted with the key created at chat initialization |
| file | [EncryptedFile](/type/EncryptedFile/) | Attached encrypted file |

## Тип

[EncryptedMessage](/type/EncryptedMessage/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
