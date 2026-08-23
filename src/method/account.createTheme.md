---
title: "account.createTheme (метод)"
original: "https://core.telegram.org/method/account.createTheme"
section: ref
kind: method
layout: layout.njk
---

# account.createTheme

*Метод из схемы TL.*

> Create a theme

## Определение TL

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;
---functions---
account.createTheme#652e4400 flags:# slug:string title:string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| slug | [string](/type/string/) | Unique theme ID used to generate [theme deep links](https://core.telegram.org/api/links#theme-links), can be empty to autogenerate a random ID. |
| title | [string](/type/string/) | Theme name |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](/type/InputDocument/) | Theme file |
| settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[InputThemeSettings](/type/InputThemeSettings/)> | Theme settings, multiple values can be provided for the different base themes (day/night mode, etc). |

## Результат

[Theme](/type/Theme/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | THEME_MIME_INVALID | The theme's MIME type is invalid. |
| 400 | THEME_TITLE_INVALID | The specified theme title is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
