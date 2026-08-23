---
title: "upload.getFile (метод)"
original: "https://core.telegram.org/method/upload.getFile"
section: ref
kind: method
layout: layout.njk
---

# upload.getFile

*Метод из схемы TL.*

> Returns content of a whole file or its part.

## Определение TL

```
upload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;
---functions---
upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| precise | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Disable some checks on limit and offset values, useful for example to stream videos by keyframes |
| cdn_supported | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the current client supports [CDN downloads](https://core.telegram.org/cdn) |
| location | [InputFileLocation](/type/InputFileLocation/) | File location |
| offset | [long](/type/long/) | Number of bytes to be skipped |
| limit | [int](/type/int/) | Number of bytes to be returned |

## Результат

[upload.File](/type/upload.File/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CDN_METHOD_INVALID | You can't call this method in a CDN DC. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 406 | FILEREF_UPGRADE_NEEDED | The client has to be updated in order to support [file references](https://core.telegram.org/api/file-references). |
| 400 | FILE_ID_INVALID | The provided file id is invalid. |
| 400 | FILE_REFERENCE_EMPTY | An empty [file reference](https://core.telegram.org/api/file-references) was specified. |
| 400 | FILE_REFERENCE_EXPIRED | File reference expired, it must be refetched as described in [the documentation](https://core.telegram.org/api/file-references). |
| 400 | FILE_REFERENCE_INVALID | The specified [file reference](https://core.telegram.org/api/file-references) is invalid. |
| 420 | FLOOD_PREMIUM_WAIT_%d | Please wait %d seconds before repeating the action, or purchase a [Telegram Premium subscription](https://core.telegram.org/api/premium) to remove this rate limit. |
| 400 | LIMIT_INVALID | The provided limit is invalid. |
| 400 | LOCATION_INVALID | The provided location is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | OFFSET_INVALID | The provided offset is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
