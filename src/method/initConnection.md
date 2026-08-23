---
title: "initConnection (метод)"
original: "https://core.telegram.org/method/initConnection"
section: ref
kind: method
layout: layout.njk
---

# initConnection

*Метод из схемы TL.*

> Initialize connection

## Определение TL

```
---functions---
initConnection#c1cd5ea9 {X:Type} flags:# api_id:int device_model:string system_version:string app_version:string system_lang_code:string lang_pack:string lang_code:string proxy:flags.0?InputClientProxy params:flags.1?JSONValue query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| api_id | [int](/type/int/) | Application identifier (see. [App configuration](https://core.telegram.org/myapp)) |
| device_model | [string](/type/string/) | Device model |
| system_version | [string](/type/string/) | Operation system version |
| app_version | [string](/type/string/) | Application version |
| system_lang_code | [string](/type/string/) | Code for the language used on the device's OS, ISO 639-1 standard |
| lang_pack | [string](/type/string/) | Platform identifier (i.e. android, tdesktop, etc). |
| lang_code | [string](/type/string/) | Either an ISO 639-1 language code or a language pack name obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links). |
| proxy | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputClientProxy](/type/InputClientProxy/) | Info about an MTProto proxy |
| params | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[JSONValue](/type/JSONValue/) | Additional initConnection parameters. For now, only the tz_offset field is supported, for specifying the timezone offset in seconds. |
| query | !X | The query itself |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CONNECTION_LAYER_INVALID | Layer invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
