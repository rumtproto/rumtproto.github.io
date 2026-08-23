---
title: "storiesStealthMode (конструктор)"
original: "https://core.telegram.org/constructor/storiesStealthMode"
section: ref
kind: constructor
layout: layout.njk
---

# storiesStealthMode

*Конструктор из схемы TL.*

> Information about the current [stealth mode](https://core.telegram.org/api/stories#stealth-mode) session.

## Определение TL

```
storiesStealthMode#712e27fd flags:# active_until_date:flags.0?int cooldown_until_date:flags.1?int = StoriesStealthMode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| active_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | The date up to which stealth mode will be active. |
| cooldown_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | The date starting from which the user will be allowed to re-enable stealth mode again. |

## Тип

[StoriesStealthMode](/type/StoriesStealthMode/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
