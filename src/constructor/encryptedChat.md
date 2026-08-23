---
title: "encryptedChat (конструктор)"
original: "https://core.telegram.org/constructor/encryptedChat"
section: ref
kind: constructor
layout: layout.njk
---

# encryptedChat

*Конструктор из схемы TL.*

> Encrypted chat

## Определение TL

```
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | Chat ID |
| access_hash | [long](/type/long/) | Check sum dependent on the user ID |
| date | [int](/type/int/) | Date chat was created |
| admin_id | [long](/type/long/) | Chat creator ID |
| participant_id | [long](/type/long/) | ID of the second chat participant |
| g_a_or_b | [bytes](/type/bytes/) | B = g ^ b mod p, if the currently authorized user is the chat's creator, or A = g ^ a mod p otherwise See [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) for more info |
| key_fingerprint | [long](/type/long/) | 64-bit fingerprint of received key |

## Тип

[EncryptedChat](/type/EncryptedChat/)
