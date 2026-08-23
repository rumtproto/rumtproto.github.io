---
title: "StoriesStealthMode (тип)"
original: "https://core.telegram.org/type/StoriesStealthMode"
section: ref
kind: type
layout: layout.njk
---

# StoriesStealthMode

*Тип из схемы TL.*

> [Story stealth mode status](https://core.telegram.org/api/stories#stealth-mode)

## Определение TL

```
storiesStealthMode#712e27fd flags:# active_until_date:flags.0?int cooldown_until_date:flags.1?int = StoriesStealthMode;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [storiesStealthMode](/constructor/storiesStealthMode/) | Information about the current [stealth mode](https://core.telegram.org/api/stories#stealth-mode) session. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
