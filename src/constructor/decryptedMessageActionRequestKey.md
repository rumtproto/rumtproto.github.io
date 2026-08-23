---
title: "decryptedMessageActionRequestKey (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageActionRequestKey"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageActionRequestKey

*Конструктор из схемы TL.*

> Request rekeying, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs)

## Определение TL

```
===20===
decryptedMessageActionRequestKey#f3c9611b exchange_id:long g_a:bytes = DecryptedMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| exchange_id | [long](/type/long/) | Exchange ID |
| g_a | [bytes](/type/bytes/) | g_a, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs) |

## Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

## Related pages

#### [Perfect Forward Secrecy](https://core.telegram.org/api/end-to-end/pfs)

Perfect Forward Secrecy in secret chats.
