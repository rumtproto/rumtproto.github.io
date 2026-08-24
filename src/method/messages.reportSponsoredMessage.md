---
title: "messages.reportSponsoredMessage"
original: "https://core.telegram.org/method/messages.reportSponsoredMessage"
section: ref
kind: method
description: "Пожаловаться на рекламное сообщение »; подробнее обо всём процессе см. здесь »."
layout: layout.njk
---

# messages.reportSponsoredMessage

Пожаловаться на [рекламное сообщение »](/api/sponsored-messages/); подробнее обо всём процессе см. [здесь »](/api/sponsored-messages/#reporting-sponsored-messages).

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;
---functions---
messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:random_id] Уникальный идентификатор рекламного объявления. Подробнее о дедупликации по случайным идентификаторам и сопоставлении через updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Выбранный вариант жалобы, изначально — пустая строка; подробнее о полном порядке действий см. <a href="/api/sponsored-messages#reporting-sponsored-messages">здесь »</a>.</td></tr></tbody></table>

### Результат

[channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.
