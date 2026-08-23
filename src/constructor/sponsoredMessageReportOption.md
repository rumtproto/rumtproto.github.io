---
title: "sponsoredMessageReportOption (конструктор)"
original: "https://core.telegram.org/constructor/sponsoredMessageReportOption"
section: ref
kind: constructor
layout: layout.njk
---

# sponsoredMessageReportOption

*Конструктор из схемы TL.*

> A [report option for a sponsored message »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages).

## Определение TL

```
sponsoredMessageReportOption#430d3150 text:string option:bytes = SponsoredMessageReportOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| text | [string](/type/string/) | Localized description of the option. |
| option | [bytes](/type/bytes/) | Option identifier to pass to [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/). |

## Тип

[SponsoredMessageReportOption](/type/SponsoredMessageReportOption/)

## Related pages

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Report a [sponsored message »](https://core.telegram.org/api/sponsored-messages), see [here »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages) for more info on the full flow.

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.
