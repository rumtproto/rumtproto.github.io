---
title: "messages.requestEncryption (метод)"
original: "https://core.telegram.org/method/messages.requestEncryption"
section: ref
kind: method
layout: layout.njk
---

# messages.requestEncryption

*Метод из схемы TL.*

> Sends a request to start a secret chat to the user.

## Определение TL

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
---functions---
messages.requestEncryption#f64daf43 user_id:InputUser random_id:int g_a:bytes = EncryptedChat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | User ID |
| random_id | [int](/type/int/) | Unique client request ID required to prevent resending. This also doubles as the chat ID. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| g_a | [bytes](/type/bytes/) | A = g ^ a mod p, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |

## Результат

[EncryptedChat](/type/EncryptedChat/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DH_G_A_INVALID | g_a invalid. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | RANDOM_ID_DUPLICATE | You provided a random ID that was already used. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
| 403 | USER_IS_BLOCKED | You were blocked by this user. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
