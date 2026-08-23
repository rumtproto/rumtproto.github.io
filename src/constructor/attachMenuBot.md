---
title: "attachMenuBot (конструктор)"
original: "https://core.telegram.org/constructor/attachMenuBot"
section: ref
kind: constructor
layout: layout.njk
---

# attachMenuBot

*Конструктор из схемы TL.*

> Represents a [bot mini app that can be launched from the attachment/side menu »](https://core.telegram.org/api/bots/attach)
> At least one of the `show_in_attach_menu` or the `show_in_side_menu` flags will always be set.

## Определение TL

```
attachMenuBot#d90d8dfe flags:# inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:long short_name:string peer_types:flags.3?Vector<AttachMenuPeerType> icons:Vector<AttachMenuBotIcon> = AttachMenuBot;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inactive | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, before launching the mini app the client should ask the user to add the mini app to the attachment/side menu, and only if the user accepts, after invoking [messages.toggleBotInAttachMenu](/method/messages.toggleBotInAttachMenu/) the app should be opened. |
| has_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Deprecated flag, can be ignored. |
| request_write_access | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the bot would like to send messages to the user. |
| show_in_attach_menu | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether, when installed, an attachment menu entry should be shown for the Mini App. |
| show_in_side_menu | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether, when installed, an entry in the main view side menu should be shown for the Mini App. |
| side_menu_disclaimer_needed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If inactive if set and the user hasn't previously accepted the third-party mini apps [Terms of Service](https://telegram.org/tos/mini-apps) for this bot, when showing the mini app installation prompt, an additional mandatory checkbox to accept the [mini apps TOS](https://telegram.org/tos/mini-apps) and a disclaimer indicating that this Mini App is not affiliated to Telegram should be shown. |
| bot_id | [long](/type/long/) | Bot ID |
| short_name | [string](/type/string/) | Attachment menu item name |
| peer_types | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[AttachMenuPeerType](/type/AttachMenuPeerType/)> | List of dialog types where this attachment menu entry should be shown |
| icons | [Vector](https://core.telegram.org/type/Vector%20t)<[AttachMenuBotIcon](/type/AttachMenuBotIcon/)> | List of platform-specific static icons and animations to use for the attachment menu button |

## Тип

[AttachMenuBot](/type/AttachMenuBot/)

## Related pages

#### [messages.toggleBotInAttachMenu](/method/messages.toggleBotInAttachMenu/)

Enable or disable [web bot attachment menu »](https://core.telegram.org/api/bots/attach)

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
