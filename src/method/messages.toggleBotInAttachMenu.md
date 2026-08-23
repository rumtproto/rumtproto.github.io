---
title: "messages.toggleBotInAttachMenu (метод)"
original: "https://core.telegram.org/method/messages.toggleBotInAttachMenu"
section: ref
kind: method
layout: layout.njk
---

# messages.toggleBotInAttachMenu

*Метод из схемы TL.*

> Enable or disable [web bot attachment menu »](https://core.telegram.org/api/bots/attach)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleBotInAttachMenu#69f59d69 flags:# write_allowed:flags.0?true bot:InputUser enabled:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| write_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the user authorizes the bot to write messages to them, if requested by [attachMenuBot](/constructor/attachMenuBot/).request_write_access |
| bot | [InputUser](/type/InputUser/) | Bot ID |
| enabled | [Bool](/type/Bool/) | Toggle |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [attachMenuBot](/constructor/attachMenuBot/)

Represents a [bot mini app that can be launched from the attachment/side menu »](https://core.telegram.org/api/bots/attach)

At least one of the `show_in_attach_menu` or the `show_in_side_menu` flags will always be set.

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
