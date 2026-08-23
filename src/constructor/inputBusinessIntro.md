---
title: "inputBusinessIntro (конструктор)"
original: "https://core.telegram.org/constructor/inputBusinessIntro"
section: ref
kind: constructor
layout: layout.njk
---

# inputBusinessIntro

*Конструктор из схемы TL.*

> [Telegram Business introduction »](https://core.telegram.org/api/business#business-introduction).

## Определение TL

```
inputBusinessIntro#9c469cd flags:# title:string description:string sticker:flags.0?InputDocument = InputBusinessIntro;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title | [string](/type/string/) | Title of the introduction message |
| description | [string](/type/string/) | Profile introduction |
| sticker | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputDocument](/type/InputDocument/) | Optional introduction [sticker](https://core.telegram.org/api/stickers). |

## Тип

[InputBusinessIntro](/type/InputBusinessIntro/)

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
