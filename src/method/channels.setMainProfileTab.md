---
title: "channels.setMainProfileTab (метод)"
original: "https://core.telegram.org/method/channels.setMainProfileTab"
section: ref
kind: method
layout: layout.njk
---

# channels.setMainProfileTab

*Метод из схемы TL.*

> Changes the main profile tab of a channel, see [here »](https://core.telegram.org/api/profile#tabs) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setMainProfileTab#3583fcb1 channel:InputChannel tab:ProfileTab = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The channel. |
| tab | [ProfileTab](/type/ProfileTab/) | The tab to set as main tab. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |

## Related pages

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
