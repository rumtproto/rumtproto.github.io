---
title: "channels.sponsoredMessageReportResultChooseOption"
original: "https://core.telegram.org/constructor/channels.sponsoredMessageReportResultChooseOption"
section: ref
kind: constructor
description: "Пользователь должен выбрать вариант жалобы из локализованных вариантов, доступных в options, после чего необходимо повторно вызвать messages.reportSponsoredMessage, передав поле…"
layout: layout.njk
---

# channels.sponsoredMessageReportResultChooseOption

Пользователь должен выбрать вариант жалобы из локализованных вариантов, доступных в `options`, после чего необходимо повторно вызвать [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/), передав поле `option` выбранного варианта в параметр `option` метода.

```
channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Заголовок всплывающего окна выбора варианта.</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SponsoredMessageReportOption">SponsoredMessageReportOption</a>&gt;</td><td>Локализованный список вариантов.</td></tr></tbody></table>

### Тип

[channels.SponsoredMessageReportResult](/type/channels.SponsoredMessageReportResult/)

### Связанные страницы

#### [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)

Пожаловаться на [рекламное сообщение »](/api/sponsored-messages/); подробнее обо всём процессе см. [здесь »](/api/sponsored-messages/#reporting-sponsored-messages).
