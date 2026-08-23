---
title: "attachMenuBotIconColor (конструктор)"
original: "https://core.telegram.org/constructor/attachMenuBotIconColor"
section: ref
kind: constructor
layout: layout.njk
---

# attachMenuBotIconColor

*Конструктор из схемы TL.*

> Represents an attachment menu icon color for [bot mini apps »](https://core.telegram.org/api/bots/attach)

## Определение TL

```
attachMenuBotIconColor#4576f3f0 name:string color:int = AttachMenuBotIconColor;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| name | [string](/type/string/) | One of the following values: light_icon - Color of the attachment menu icon (light mode) light_text - Color of the attachment menu label, once selected (light mode) dark_icon - Color of the attachment menu icon (dark mode) dark_text - Color of the attachment menu label, once selected (dark mode) |
| color | [int](/type/int/) | Color in RGB24 format |

## Тип

[AttachMenuBotIconColor](/type/AttachMenuBotIconColor/)

## Related pages

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
