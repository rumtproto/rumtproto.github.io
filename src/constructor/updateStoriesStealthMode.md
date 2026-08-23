---
title: "updateStoriesStealthMode (конструктор)"
original: "https://core.telegram.org/constructor/updateStoriesStealthMode"
section: ref
kind: constructor
layout: layout.njk
---

# updateStoriesStealthMode

*Конструктор из схемы TL.*

> Indicates that [stories stealth mode](https://core.telegram.org/api/stories#stealth-mode) was activated.

## Определение TL

```
updateStoriesStealthMode#2c084dc1 stealth_mode:StoriesStealthMode = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stealth_mode | [StoriesStealthMode](/type/StoriesStealthMode/) | Information about the current [stealth mode](https://core.telegram.org/api/stories#stealth-mode) session. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
