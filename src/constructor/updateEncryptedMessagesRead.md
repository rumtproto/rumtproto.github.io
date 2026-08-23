---
title: "updateEncryptedMessagesRead (конструктор)"
original: "https://core.telegram.org/constructor/updateEncryptedMessagesRead"
section: ref
kind: constructor
layout: layout.njk
---

# updateEncryptedMessagesRead

*Конструктор из схемы TL.*

> Communication history in an encrypted chat was marked as read.

## Определение TL

```
updateEncryptedMessagesRead#38fe25b7 chat_id:int max_date:int date:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [int](/type/int/) | Chat ID |
| max_date | [int](/type/int/) | Maximum value of data for read messages |
| date | [int](/type/int/) | Time when messages were read |

## Тип

[Update](/type/Update/)
