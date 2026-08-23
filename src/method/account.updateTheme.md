---
title: "account.updateTheme (метод)"
original: "https://core.telegram.org/method/account.updateTheme"
section: ref
kind: method
layout: layout.njk
---

# account.updateTheme

*Метод из схемы TL.*

> Update theme

## Определение TL

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;
---functions---
account.updateTheme#2bf40ccc flags:# format:string theme:InputTheme slug:flags.0?string title:flags.1?string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| format | [string](/type/string/) | Theme format, a string that identifies the theming engines supported by the client |
| theme | [InputTheme](/type/InputTheme/) | Theme to update |
| slug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Unique theme ID |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Theme name |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](/type/InputDocument/) | Theme file |
| settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[InputThemeSettings](/type/InputThemeSettings/)> | Theme settings |

## Результат

[Theme](/type/Theme/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | THEME_INVALID | Invalid theme provided. |
