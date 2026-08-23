---
title: "messages.sendEncryptedFile (метод)"
original: "https://core.telegram.org/method/messages.sendEncryptedFile"
section: ref
kind: method
layout: layout.njk
---

# messages.sendEncryptedFile

*Метод из схемы TL.*

> Sends a message with a file attachment to a secret chat

## Определение TL

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
---functions---
messages.sendEncryptedFile#5559481d flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes file:InputEncryptedFile = messages.SentEncryptedMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to send the file without triggering a notification |
| peer | [InputEncryptedChat](/type/InputEncryptedChat/) | Secret chat ID |
| random_id | [long](/type/long/) | Unique client message ID necessary to prevent message resending. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| data | [bytes](/type/bytes/) | TL-serialization of [DecryptedMessage](/type/DecryptedMessage/) type, encrypted with a key generated during chat initialization |
| file | [InputEncryptedFile](/type/InputEncryptedFile/) | File attachment for the secret chat |

## Результат

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | DATA_TOO_LONG | Data too long. |
| 400 | ENCRYPTION_DECLINED | The secret chat was declined. |
| 400 | FILE_EMTPY | An empty file was provided. |
| 400 | MD5_CHECKSUM_INVALID | The MD5 checksums do not match. |
| 400 | MSG_WAIT_FAILED | A waiting call returned an error. |

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
