---
title: "inputStickerSetShortName (конструктор)"
original: "https://core.telegram.org/constructor/inputStickerSetShortName"
section: ref
kind: constructor
layout: layout.njk
---

# inputStickerSetShortName

*Конструктор из схемы TL.*

> Stickerset by short name, from a [stickerset deep link »](https://core.telegram.org/api/links#stickerset-links)
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
> ```
> #### API schema

## Определение TL

```
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| short_name | [string](/type/string/) | Short name from a [stickerset deep link »](https://core.telegram.org/api/links#stickerset-links) |

## Тип

[InputStickerSet](/type/InputStickerSet/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
