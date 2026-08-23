---
title: "messages.acceptEncryption (метод)"
original: "https://core.telegram.org/method/messages.acceptEncryption"
section: ref
kind: method
layout: layout.njk
---

# messages.acceptEncryption

*Метод из схемы TL.*

> Confirms creation of a secret chat

## Определение TL

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
---functions---
messages.acceptEncryption#3dbc0415 peer:InputEncryptedChat g_b:bytes key_fingerprint:long = EncryptedChat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputEncryptedChat](/type/InputEncryptedChat/) | Secret chat ID |
| g_b | [bytes](/type/bytes/) | B = g ^ b mod p, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |
| key_fingerprint | [long](/type/long/) | 64-bit fingerprint of the received key |

## Результат

[EncryptedChat](/type/EncryptedChat/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | ENCRYPTION_ALREADY_ACCEPTED | Secret chat already accepted. |
| 400 | ENCRYPTION_ALREADY_DECLINED | The secret chat was already declined. |
