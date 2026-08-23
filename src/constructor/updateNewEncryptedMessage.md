---
title: "updateNewEncryptedMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateNewEncryptedMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateNewEncryptedMessage

*Конструктор из схемы TL.*

> New encrypted message.

## Определение TL

```
updateNewEncryptedMessage#12bcbd9a message:EncryptedMessage qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| message | [EncryptedMessage](/type/EncryptedMessage/) | Message |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
