---
title: "contacts.setBlocked (метод)"
original: "https://core.telegram.org/method/contacts.setBlocked"
section: ref
kind: method
layout: layout.njk
---

# contacts.setBlocked

*Метод из схемы TL.*

> Replace the contents of an entire [blocklist, see here for more info »](https://core.telegram.org/api/block).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.setBlocked#94c65c76 flags:# my_stories_from:flags.0?true id:Vector<InputPeer> limit:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to edit the story blocklist; if not set, will edit the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Full content of the blocklist. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
