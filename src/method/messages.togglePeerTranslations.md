---
title: "messages.togglePeerTranslations (метод)"
original: "https://core.telegram.org/method/messages.togglePeerTranslations"
section: ref
kind: method
layout: layout.njk
---

# messages.togglePeerTranslations

*Метод из схемы TL.*

> Show or hide the [real-time chat translation popup](https://core.telegram.org/api/translation) for a certain chat

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.togglePeerTranslations#e47cb579 flags:# disabled:flags.0?true peer:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to disable or enable the real-time chat translation popup |
| peer | [InputPeer](/type/InputPeer/) | The peer |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Message translation](https://core.telegram.org/api/translation)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.
