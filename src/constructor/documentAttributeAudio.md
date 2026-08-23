---
title: "documentAttributeAudio (конструктор)"
original: "https://core.telegram.org/constructor/documentAttributeAudio"
section: ref
kind: constructor
layout: layout.njk
---

# documentAttributeAudio

*Конструктор из схемы TL.*

> Represents an audio file
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===23===
> documentAttributeAudio#051448e5 duration:int = DocumentAttribute;
> ===45===
> documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute;
> ===46===
> documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;
> ```
> #### API schema

## Определение TL

```
documentAttributeAudio#9852f9c6 flags:# voice:flags.10?true duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| voice | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Whether this is a voice message |
| duration | [int](/type/int/) | Duration in seconds |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Name of song |
| performer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Performer |
| waveform | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[bytes](/type/bytes/) | Waveform: consists in a series of bitpacked 5-bit values. Example implementation: [android](https://github.com/DrKLO/Telegram/blob/4d7a3a40c88ce28a211aa2814e9569389fc40567/TMessagesProj/jni/audio.c#L562). |

## Тип

[DocumentAttribute](/type/DocumentAttribute/)
