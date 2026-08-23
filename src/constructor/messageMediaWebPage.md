---
title: "messageMediaWebPage (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaWebPage"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaWebPage

*Конструктор из схемы TL.*

> Preview of webpage

## Определение TL

```
messageMediaWebPage#ddf10c3b flags:# force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:WebPage = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| force_large_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, specifies that a large media preview should be used. |
| force_small_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, specifies that a small media preview should be used. |
| manual | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, indicates that the URL used for the webpage preview was specified manually using [inputMediaWebPage](/constructor/inputMediaWebPage/), and may not be related to any of the URLs specified in the message. |
| safe | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, the webpage can be opened directly without user confirmation; otherwise, user confirmation is required, showing the exact URL that will be opened. |
| webpage | [WebPage](/type/WebPage/) | Webpage preview |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [inputMediaWebPage](/constructor/inputMediaWebPage/)

Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message.
