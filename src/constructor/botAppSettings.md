---
title: "botAppSettings (конструктор)"
original: "https://core.telegram.org/constructor/botAppSettings"
section: ref
kind: constructor
layout: layout.njk
---

# botAppSettings

*Конструктор из схемы TL.*

> [Mini app »](https://core.telegram.org/api/bots/webapps) settings

## Определение TL

```
botAppSettings#c99b1950 flags:# placeholder_path:flags.0?bytes background_color:flags.1?int background_dark_color:flags.2?int header_color:flags.3?int header_dark_color:flags.4?int = BotAppSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| placeholder_path | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | SVG placeholder logo, compressed using the same format used for [vector thumbnails »](https://core.telegram.org/api/files/#vector-thumbnails). |
| background_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Default light mode background color |
| background_dark_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Default dark mode background color |
| header_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Default light mode header color |
| header_dark_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Default dark mode header color |

## Тип

[BotAppSettings](/type/BotAppSettings/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
