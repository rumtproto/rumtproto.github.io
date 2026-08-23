---
title: "Help.PeerColors (тип)"
original: "https://core.telegram.org/type/help.PeerColors"
section: ref
kind: type
layout: layout.njk
---

# Help.PeerColors

*Тип из схемы TL.*

> Contains info about multiple [color palettes »](https://core.telegram.org/api/colors).

## Определение TL

```
help.peerColorsNotModified#2ba1f5ce = help.PeerColors;
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;

---functions---

help.getPeerColors#da80f42f hash:int = help.PeerColors;
help.getPeerProfileColors#abcfa9fd hash:int = help.PeerColors;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.peerColorsNotModified](/constructor/help.peerColorsNotModified/) | The list of color palettes has not changed. |
| [help.peerColors](/constructor/help.peerColors/) | Contains info about multiple [color palettes »](https://core.telegram.org/api/colors). |

## Методы

| Method | Описание |
|---|---|
| [help.getPeerColors](/method/help.getPeerColors/) | Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used for message accents. |
| [help.getPeerProfileColors](/method/help.getPeerProfileColors/) | Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used in profile page backgrounds. |

## Related pages

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
