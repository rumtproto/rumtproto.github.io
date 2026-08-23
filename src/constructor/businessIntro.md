---
title: "businessIntro (конструктор)"
original: "https://core.telegram.org/constructor/businessIntro"
section: ref
kind: constructor
layout: layout.njk
---

# businessIntro

*Конструктор из схемы TL.*

> [Telegram Business introduction »](https://core.telegram.org/api/business#business-introduction).

## Определение TL

```
businessIntro#5a0a066d flags:# title:string description:string sticker:flags.0?Document = BusinessIntro;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title | [string](/type/string/) | Title of the introduction message (max [intro_title_length_limit »](https://core.telegram.org/api/config#intro-title-length-limit) UTF-8 characters). |
| description | [string](/type/string/) | Profile introduction (max [intro_description_length_limit »](https://core.telegram.org/api/config#intro-description-length-limit) UTF-8 characters). |
| sticker | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Document](/type/Document/) | Optional introduction [sticker](https://core.telegram.org/api/stickers). |

## Тип

[BusinessIntro](/type/BusinessIntro/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
