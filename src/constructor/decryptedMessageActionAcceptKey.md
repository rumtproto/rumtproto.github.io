---
title: "decryptedMessageActionAcceptKey (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageActionAcceptKey"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageActionAcceptKey

*Конструктор из схемы TL.*

> Accept new key

## Определение TL

```
===20===
decryptedMessageActionAcceptKey#6fe1735b exchange_id:long g_b:bytes key_fingerprint:long = DecryptedMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| exchange_id | [long](/type/long/) | Exchange ID |
| g_b | [bytes](/type/bytes/) | B parameter, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs) |
| key_fingerprint | [long](/type/long/) | Key fingerprint, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs) |

## Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

## Related pages

#### [Perfect Forward Secrecy](https://core.telegram.org/api/end-to-end/pfs)

Perfect Forward Secrecy in secret chats.
