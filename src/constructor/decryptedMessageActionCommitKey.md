---
title: "decryptedMessageActionCommitKey (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageActionCommitKey"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageActionCommitKey

*Конструктор из схемы TL.*

> Commit new key, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs)

## Определение TL

```
===20===
decryptedMessageActionCommitKey#ec2e0b9b exchange_id:long key_fingerprint:long = DecryptedMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| exchange_id | [long](/type/long/) | Exchange ID, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs) |
| key_fingerprint | [long](/type/long/) | Key fingerprint, see [rekeying process](https://core.telegram.org/api/end-to-end/pfs) |

## Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

## Related pages

#### [Perfect Forward Secrecy](https://core.telegram.org/api/end-to-end/pfs)

Perfect Forward Secrecy in secret chats.
