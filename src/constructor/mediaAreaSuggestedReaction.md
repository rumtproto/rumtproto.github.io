---
title: "mediaAreaSuggestedReaction (конструктор)"
original: "https://core.telegram.org/constructor/mediaAreaSuggestedReaction"
section: ref
kind: constructor
layout: layout.njk
---

# mediaAreaSuggestedReaction

*Конструктор из схемы TL.*

> Represents a reaction bubble.

## Определение TL

```
mediaAreaSuggestedReaction#14455871 flags:# dark:flags.0?true flipped:flags.1?true coordinates:MediaAreaCoordinates reaction:Reaction = MediaArea;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| dark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the reaction bubble has a dark background. |
| flipped | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the reaction bubble is mirrored (see [here »](https://core.telegram.org/api/stories#reactions) for more info). |
| coordinates | [MediaAreaCoordinates](/type/MediaAreaCoordinates/) | The coordinates of the media area corresponding to the reaction button. |
| reaction | [Reaction](/type/Reaction/) | The reaction that should be sent when this area is clicked. |

## Тип

[MediaArea](/type/MediaArea/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
