---
title: "account.saveAutoDownloadSettings (метод)"
original: "https://core.telegram.org/method/account.saveAutoDownloadSettings"
section: ref
kind: method
layout: layout.njk
---

# account.saveAutoDownloadSettings

*Метод из схемы TL.*

> Change media autodownload settings

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveAutoDownloadSettings#76f36233 flags:# low:flags.0?true high:flags.1?true settings:AutoDownloadSettings = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| low | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to save media in the low data usage preset |
| high | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to save media in the high data usage preset |
| settings | [AutoDownloadSettings](/type/AutoDownloadSettings/) | Media autodownload settings |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
