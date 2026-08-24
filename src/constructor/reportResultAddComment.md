---
title: "reportResultAddComment"
original: "https://core.telegram.org/constructor/reportResultAddComment"
section: ref
kind: constructor
description: "Пользователь должен ввести дополнительный комментарий для модераторов, после чего необходимо повторно вызвать messages.report, передав комментарий в messages.report.message."
layout: layout.njk
---

# reportResultAddComment

Пользователь должен ввести дополнительный комментарий для модераторов, после чего необходимо повторно вызвать [messages.report](/method/messages.report/), передав комментарий в [messages.report](/method/messages.report/).`message`.

```
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>optional</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Может ли пользователь пропустить этот шаг, передав пустое поле <code>message</code> в <a href="/method/messages.report">messages.report</a>, или же непустое поле <code>message</code> обязательно.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Метод <a href="/method/messages.report">messages.report</a> необходимо вызвать повторно, передав этот вариант в <code>option</code></td></tr></tbody></table>

### Тип

[ReportResult](/type/ReportResult/)

### Связанные страницы

#### [messages.report](/method/messages.report/)

Пожаловаться на сообщение в чате за нарушение условий использования Telegram
