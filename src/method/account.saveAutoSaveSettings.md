---
title: "account.saveAutoSaveSettings (метод)"
original: "https://core.telegram.org/method/account.saveAutoSaveSettings"
section: ref
kind: method
layout: layout.njk
---

# account.saveAutoSaveSettings

*Метод из схемы TL.*

> Modify autosave settings

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveAutoSaveSettings#d69b8361 flags:# users:flags.0?true chats:flags.1?true broadcasts:flags.2?true peer:flags.3?InputPeer settings:AutoSaveSettings = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the new settings should affect all private chats |
| chats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the new settings should affect all groups |
| broadcasts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the new settings should affect all [channels](https://core.telegram.org/api/channel) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InputPeer](/type/InputPeer/) | Whether the new settings should affect a specific peer |
| settings | [AutoSaveSettings](/type/AutoSaveSettings/) | The new autosave settings |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
