---
title: "decryptedMessageActionNotifyLayer (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageActionNotifyLayer"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageActionNotifyLayer

*Конструктор из схемы TL.*

> A notification stating the API layer that is used by the client. You should use your current layer and take notice of the layer used on the other side of a conversation when sending messages.

## Определение TL

```
===17===
decryptedMessageActionNotifyLayer#f3048883 layer:int = DecryptedMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| layer | [int](/type/int/) | Layer number, must be 17 or higher (this constructor was introduced in Layer 17. |

## Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)
