---
title: "channels.SponsoredMessageReportResult (тип)"
original: "https://core.telegram.org/type/channels.SponsoredMessageReportResult"
section: ref
kind: type
layout: layout.njk
---

# channels.SponsoredMessageReportResult

*Тип из схемы TL.*

> Status of the method call used to report a [sponsored message »](https://core.telegram.org/api/sponsored-messages).

## Определение TL

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;

---functions---

messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channels.sponsoredMessageReportResultChooseOption](/constructor/channels.sponsoredMessageReportResultChooseOption/) | The user must choose a report option from the localized options available in options, and after selection, [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/) must be invoked again, passing the option's option field to the option param of the method. |
| [channels.sponsoredMessageReportResultAdsHidden](/constructor/channels.sponsoredMessageReportResultAdsHidden/) | Sponsored messages were hidden for the user in all chats. |
| [channels.sponsoredMessageReportResultReported](/constructor/channels.sponsoredMessageReportResultReported/) | The sponsored message was reported successfully. |

## Методы

| Method | Описание |
|---|---|
| [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/) | Report a [sponsored message »](https://core.telegram.org/api/sponsored-messages), see [here »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages) for more info on the full flow. |

## Related pages

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.
