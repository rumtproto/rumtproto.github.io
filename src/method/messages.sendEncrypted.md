---
title: "messages.sendEncrypted (метод)"
original: "https://core.telegram.org/method/messages.sendEncrypted"
section: ref
kind: method
layout: layout.njk
---

# messages.sendEncrypted

*Метод из схемы TL.*

> Sends a text message to a secret chat.

## Определение TL

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
---functions---
messages.sendEncrypted#44fa7a15 flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Send encrypted message without a notification |
| peer | [InputEncryptedChat](/type/InputEncryptedChat/) | Secret chat ID |
| random_id | [long](/type/long/) | Unique client message ID, necessary to avoid message resending. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| data | [bytes](/type/bytes/) | TL-serialization of [DecryptedMessage](/type/DecryptedMessage/) type, encrypted with a key that was created during chat initialization |

## Результат

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | DATA_INVALID | Encrypted data invalid. |
| 400 | DATA_TOO_LONG | Data too long. |
| 400 | ENCRYPTION_DECLINED | The secret chat was declined. |
| 500 | MSG_WAIT_FAILED | A waiting call returned an error. |
| 403 | USER_IS_BLOCKED | You were blocked by this user. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
