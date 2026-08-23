---
title: "autoSaveSettings (конструктор)"
original: "https://core.telegram.org/constructor/autoSaveSettings"
section: ref
kind: constructor
layout: layout.njk
---

# autoSaveSettings

*Конструктор из схемы TL.*

> Media autosave settings

## Определение TL

```
autoSaveSettings#c84834ce flags:# photos:flags.0?true videos:flags.1?true video_max_size:flags.2?long = AutoSaveSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| photos | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether photos should be autosaved to the gallery. |
| videos | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether videos should be autosaved to the gallery. |
| video_max_size | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | If set, specifies a size limit for autosavable videos |

## Тип

[AutoSaveSettings](/type/AutoSaveSettings/)
