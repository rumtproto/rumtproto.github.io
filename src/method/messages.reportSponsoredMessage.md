---
title: "messages.reportSponsoredMessage (метод)"
original: "https://core.telegram.org/method/messages.reportSponsoredMessage"
section: ref
kind: method
layout: layout.njk
---

# messages.reportSponsoredMessage

*Метод из схемы TL.*

> Report a [sponsored message »](https://core.telegram.org/api/sponsored-messages), see [here »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages) for more info on the full flow.

## Определение TL

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;
---functions---
messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_id | [bytes](/type/bytes/) | The ad's unique ID. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| option | [bytes](/type/bytes/) | Chosen report option, initially an empty string, see [here »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages) for more info on the full flow. |

## Результат

[channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/)

## Only users can use this method

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.
