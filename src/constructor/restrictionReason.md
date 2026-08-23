---
title: "restrictionReason (конструктор)"
original: "https://core.telegram.org/constructor/restrictionReason"
section: ref
kind: constructor
layout: layout.njk
---

# restrictionReason

*Конструктор из схемы TL.*

> Restriction reason.
> See [here »](https://core.telegram.org/api/age-verification) for the full flow to use for restricted or age-gated content.

## Определение TL

```
restrictionReason#d072acb4 platform:string reason:string text:string = RestrictionReason;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| platform | [string](/type/string/) | Platform identifier (ios, android, wp, all, etc.), can be concatenated with a dash as separator (android-ios, ios-wp, etc) |
| reason | [string](/type/string/) | Restriction reason (porno, terms, etc.). Ignore this restriction reason if it is contained in the [ignore_restriction_reasons »](https://core.telegram.org/api/config#ignore-restriction-reasons) client configuration parameter. |
| text | [string](/type/string/) | Error message to be shown to the user |

## Тип

[RestrictionReason](/type/RestrictionReason/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Age verification](https://core.telegram.org/api/age-verification)

Some legislations require age verification to view restricted content: Telegram implements this through the Main Mini App of a special bot.
