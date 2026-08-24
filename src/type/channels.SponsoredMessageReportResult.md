---
title: "channels.SponsoredMessageReportResult"
original: "https://core.telegram.org/type/channels.SponsoredMessageReportResult"
section: ref
kind: type
description: "Состояние вызова метода, использованного для жалобы на спонсируемое сообщение »."
layout: layout.njk
---

# channels.SponsoredMessageReportResult

Состояние вызова метода, использованного для жалобы на [спонсируемое сообщение »](/api/sponsored-messages/).

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;

---functions---

messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channels.sponsoredMessageReportResultChooseOption">channels.sponsoredMessageReportResultChooseOption</a></td><td>Пользователь должен выбрать вариант жалобы из локализованных вариантов, доступных в <code>options</code>, после чего необходимо повторно вызвать <a href="/method/messages.reportSponsoredMessage">messages.reportSponsoredMessage</a>, передав поле <code>option</code> выбранного варианта в параметр <code>option</code> метода.</td></tr><tr><td><a href="/constructor/channels.sponsoredMessageReportResultAdsHidden">channels.sponsoredMessageReportResultAdsHidden</a></td><td>Спонсируемые сообщения были скрыты для пользователя во всех чатах.</td></tr><tr><td><a href="/constructor/channels.sponsoredMessageReportResultReported">channels.sponsoredMessageReportResultReported</a></td><td>Жалоба на рекламное сообщение успешно отправлена.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.reportSponsoredMessage">messages.reportSponsoredMessage</a></td><td>Пожаловаться на <a href="/api/sponsored-messages">рекламное сообщение »</a>; подробнее обо всём процессе см. <a href="/api/sponsored-messages#reporting-sponsored-messages">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.
