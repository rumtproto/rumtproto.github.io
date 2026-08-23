---
title: "EncryptedMessage (тип)"
original: "https://core.telegram.org/type/EncryptedMessage"
section: ref
kind: type
layout: layout.njk
---

# EncryptedMessage

*Тип из схемы TL.*

> Object contains encrypted message.

## Определение TL

```
encryptedMessage#ed18c118 random_id:long chat_id:int date:int bytes:bytes file:EncryptedFile = EncryptedMessage;
encryptedMessageService#23734b06 random_id:long chat_id:int date:int bytes:bytes = EncryptedMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [encryptedMessage](/constructor/encryptedMessage/) | Encrypted message. |
| [encryptedMessageService](/constructor/encryptedMessageService/) | Encrypted service message |
