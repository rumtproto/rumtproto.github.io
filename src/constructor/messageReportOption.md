---
title: "messageReportOption"
original: "https://core.telegram.org/constructor/messageReportOption"
section: ref
kind: constructor
description: "Пункт меню жалобы"
layout: layout.njk
---

# messageReportOption

Пункт меню жалобы

```
messageReportOption#7903e3d9 text:string option:bytes = MessageReportOption;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название варианта</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Идентификатор варианта: если пользователь выберет этот вариант, следует повторно вызвать <a href="/method/messages.report">messages.report</a>, передав этот вариант в <code>option</code></td></tr></tbody></table>

### Тип

[MessageReportOption](/type/MessageReportOption/)

### Связанные страницы

#### [messages.report](/method/messages.report/)

Пожаловаться на сообщение в чате за нарушение условий использования Telegram
