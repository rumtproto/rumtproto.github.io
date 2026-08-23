---
title: "suggestedPost (конструктор)"
original: "https://core.telegram.org/constructor/suggestedPost"
section: ref
kind: constructor
layout: layout.njk
---

# suggestedPost

*Конструктор из схемы TL.*

> Contains info about a [suggested post »](https://core.telegram.org/api/suggested-posts).

## Определение TL

```
suggestedPost#e8e37e5 flags:# accepted:flags.1?true rejected:flags.2?true price:flags.3?StarsAmount schedule_date:flags.0?int = SuggestedPost;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| accepted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the suggested post was accepted. |
| rejected | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the suggested post was rejected. |
| price | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[StarsAmount](/type/StarsAmount/) | Price of the suggested post. |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Scheduling date. |

## Тип

[SuggestedPost](/type/SuggestedPost/)

## Related pages

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.
