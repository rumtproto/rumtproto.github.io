---
title: "account.installTheme (метод)"
original: "https://core.telegram.org/method/account.installTheme"
section: ref
kind: method
layout: layout.njk
---

# account.installTheme

*Метод из схемы TL.*

> Install a theme

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.installTheme#c727bb3b flags:# dark:flags.0?true theme:flags.1?InputTheme format:flags.2?string base_theme:flags.3?BaseTheme = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| dark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to install the dark version |
| theme | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputTheme](/type/InputTheme/) | Theme to install |
| format | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Theme format, a string that identifies the theming engines supported by the client |
| base_theme | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[BaseTheme](/type/BaseTheme/) | Indicates a basic theme provided by all clients |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
