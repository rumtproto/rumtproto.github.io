---
title: "help.dismissSuggestion (метод)"
original: "https://core.telegram.org/method/help.dismissSuggestion"
section: ref
kind: method
layout: layout.njk
---

# help.dismissSuggestion

*Метод из схемы TL.*

> Dismiss a [suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.dismissSuggestion#f50dbaa1 peer:InputPeer suggestion:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | In the case of pending suggestions in [channels](/constructor/channelFull/), the channel ID. |
| suggestion | [string](/type/string/) | [Suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
