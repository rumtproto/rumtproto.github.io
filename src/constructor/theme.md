---
title: "theme (конструктор)"
original: "https://core.telegram.org/constructor/theme"
section: ref
kind: constructor
layout: layout.njk
---

# theme

*Конструктор из схемы TL.*

> Theme

## Определение TL

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the current user is the creator of this theme |
| default | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is the default theme |
| for_chat | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this theme is meant to be used as a [chat theme](https://telegram.org/blog/chat-themes-interactive-emoji-read-receipts) |
| id | [long](/type/long/) | Theme ID |
| access_hash | [long](/type/long/) | Theme access hash |
| slug | [string](/type/string/) | Unique theme ID |
| title | [string](/type/string/) | Theme name |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Document](/type/Document/) | Theme |
| settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[ThemeSettings](/type/ThemeSettings/)> | Theme settings |
| emoticon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[string](/type/string/) | Theme emoji |
| installs_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Installation count |

## Тип

[Theme](/type/Theme/)
