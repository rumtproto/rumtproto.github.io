---
title: "account.sentEmailCode"
original: "https://core.telegram.org/constructor/account.sentEmailCode"
section: ref
kind: constructor
description: "Отправленный код из письма"
layout: layout.njk
---

# account.sentEmailCode

Отправленный код из письма

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>email_pattern</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес электронной почты, на который был отправлен код, должен соответствовать этому <a href="/api/pattern">шаблону</a></td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина кода подтверждения</td></tr></tbody></table>

### Тип

[account.SentEmailCode](/type/account.SentEmailCode/)

### Связанные страницы

#### [Сопоставление с шаблоном](/api/pattern/)

Некоторые методы требуют, чтобы клиент проверил, соответствуют ли данные, полученные из внешнего источника, определённому шаблону.
