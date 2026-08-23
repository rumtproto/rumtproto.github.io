---
title: "attachMenuBotIcon (конструктор)"
original: "https://core.telegram.org/constructor/attachMenuBotIcon"
section: ref
kind: constructor
layout: layout.njk
---

# attachMenuBotIcon

*Конструктор из схемы TL.*

> Represents an attachment menu icon for [bot mini apps »](https://core.telegram.org/api/bots/attach)

## Определение TL

```
attachMenuBotIcon#b2a7386b flags:# name:string icon:Document colors:flags.0?Vector<AttachMenuBotIconColor> = AttachMenuBotIcon;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| name | [string](/type/string/) | One of the following values: note that animated icons must be played when the user clicks on the button, activating the bot mini app. default_static - Default attachment menu icon in SVG format placeholder_static - Default placeholder for opened Web Apps in SVG format ios_static - Attachment menu icon in SVG format for the official iOS app ios_animated - Animated attachment menu icon in TGS format for the official iOS app android_animated - Animated attachment menu icon in TGS format for the official Android app macos_animated - Animated attachment menu icon in TGS format for the official native Mac OS app ios_side_menu_static - Side menu icon in PNG format for the official iOS app android_side_menu_static - Side menu icon in SVG format for the official android app macos_side_menu_static - Side menu icon in PNG format for the official native Mac OS app |
| icon | [Document](/type/Document/) | The actual icon file. |
| colors | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[AttachMenuBotIconColor](/type/AttachMenuBotIconColor/)> | Attachment menu icon colors. |

## Тип

[AttachMenuBotIcon](/type/AttachMenuBotIcon/)

## Related pages

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
