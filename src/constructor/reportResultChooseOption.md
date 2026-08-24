---
title: "reportResultChooseOption"
original: "https://core.telegram.org/constructor/reportResultChooseOption"
section: ref
kind: constructor
description: "Пользователь должен выбрать один из следующих вариантов, после чего необходимо повторно вызвать messages.report, передав идентификатор option выбранного варианта в…"
layout: layout.njk
---

# reportResultChooseOption

Пользователь должен выбрать один из следующих вариантов, после чего необходимо повторно вызвать [messages.report](/method/messages.report/), передав идентификатор `option` выбранного варианта в [messages.report](/method/messages.report/).`option`.

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Заголовок всплывающего окна выбора</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageReportOption">MessageReportOption</a>&gt;</td><td>Доступные варианты, отображаемые как пункты меню.</td></tr></tbody></table>

### Тип

[ReportResult](/type/ReportResult/)

### Связанные страницы

#### [messages.report](/method/messages.report/)

Пожаловаться на сообщение в чате за нарушение условий использования Telegram
