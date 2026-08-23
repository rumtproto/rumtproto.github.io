---
title: "decryptedMessageLayer (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageLayer"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageLayer

*Конструктор из схемы TL.*

> Sets the layer number for the contents of an encrypted message.

## Определение TL

```
===17===
decryptedMessageLayer#1be31789 random_bytes:bytes layer:int in_seq_no:int out_seq_no:int message:DecryptedMessage = DecryptedMessageLayer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_bytes | [bytes](/type/bytes/) | Set of random bytes to prevent content recognition in short encrypted messages. Clients are required to check that there are at least 15 random bytes included in each message. Messages with less than 15 random bytes must be ignored. Parameter moved here from [decryptedMessage](/constructor/decryptedMessage/) in Layer 17. |
| layer | [int](/type/int/) | Layer number. Mimimal value - 17 (the layer in which the constructor was added). |
| in_seq_no | [int](/type/int/) | 2x the number of messages in the sender's inbox (including deleted and service messages), incremented by 1 if current user was not the chat creator Parameter added in Layer 17. |
| out_seq_no | [int](/type/int/) | 2x the number of messages in the recipient's inbox (including deleted and service messages), incremented by 1 if current user was the chat creator Parameter added in Layer 17. |
| message | [DecryptedMessage](/type/DecryptedMessage/) | The content of message itself |

## Тип

[DecryptedMessageLayer](/type/DecryptedMessageLayer/)

## Related pages

#### [decryptedMessage](/constructor/decryptedMessage/)

Contents of an encrypted message.
