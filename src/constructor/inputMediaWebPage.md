---
title: "inputMediaWebPage (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaWebPage"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaWebPage

*Конструктор из схемы TL.*

> Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message.

## Определение TL

```
inputMediaWebPage#c21b8849 flags:# force_large_media:flags.0?true force_small_media:flags.1?true optional:flags.2?true url:string = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| force_large_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, specifies that a large media preview should be used. |
| force_small_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, specifies that a small media preview should be used. |
| optional | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If not set, a WEBPAGE_NOT_FOUND RPC error will be emitted if a webpage preview cannot be generated for the specified url; otherwise, no error will be emitted (unless the provided message is also empty, in which case a MESSAGE_EMPTY will be emitted, instead). |
| url | [string](/type/string/) | The URL to use for the link preview. |

## Тип

[InputMedia](/type/InputMedia/)
