---
title: "channels.sponsoredMessageReportResultChooseOption (конструктор)"
original: "https://core.telegram.org/constructor/channels.sponsoredMessageReportResultChooseOption"
section: ref
kind: constructor
layout: layout.njk
---

# channels.sponsoredMessageReportResultChooseOption

*Конструктор из схемы TL.*

> The user must choose a report option from the localized options available in `options`, and after selection, [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/) must be invoked again, passing the option's `option` field to the `option` param of the method.

## Определение TL

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | Title of the option selection popup. |
| options | [Vector](https://core.telegram.org/type/Vector%20t)<[SponsoredMessageReportOption](/type/SponsoredMessageReportOption/)> | Localized list of options. |

## Тип

[channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/)

## Related pages

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Report a [sponsored message »](https://core.telegram.org/api/sponsored-messages), see [here »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages) for more info on the full flow.
