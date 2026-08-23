---
title: "messages.sentEncryptedFile (конструктор)"
original: "https://core.telegram.org/constructor/messages.sentEncryptedFile"
section: ref
kind: constructor
layout: layout.njk
---

# messages.sentEncryptedFile

*Конструктор из схемы TL.*

> Message with a file enclosure sent to a protected chat

## Определение TL

```
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| date | [int](/type/int/) | Sending date |
| file | [EncryptedFile](/type/EncryptedFile/) | Attached file |

## Тип

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)
