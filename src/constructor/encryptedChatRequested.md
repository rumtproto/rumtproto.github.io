---
title: "encryptedChatRequested (конструктор)"
original: "https://core.telegram.org/constructor/encryptedChatRequested"
section: ref
kind: constructor
layout: layout.njk
---

# encryptedChatRequested

*Конструктор из схемы TL.*

> Request to create an encrypted chat.

## Определение TL

```
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| id | [int](/type/int/) | Chat ID |
| access_hash | [long](/type/long/) | Check sum depending on user ID |
| date | [int](/type/int/) | Chat creation date |
| admin_id | [long](/type/long/) | Chat creator ID |
| participant_id | [long](/type/long/) | ID of second chat participant |
| g_a | [bytes](/type/bytes/) | A = g ^ a mod p, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |

## Тип

[EncryptedChat](/type/EncryptedChat/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
