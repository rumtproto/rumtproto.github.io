---
title: "inputStarsTransaction"
original: "https://core.telegram.org/constructor/inputStarsTransaction"
section: ref
kind: constructor
description: "Используется для получения информации о транзакции с Telegram Stars »."
layout: layout.njk
---

# inputStarsTransaction

Используется для получения информации о [транзакции с Telegram Stars »](/api/stars/#balance-and-transaction-history).

```
inputStarsTransaction#206ae6d1 flags:# refund:flags.0?true id:string = InputStarsTransaction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>refund</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, получает сведения о транзакции возврата средств для этой транзакции.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор транзакции.</td></tr></tbody></table>

### Тип

[InputStarsTransaction](/type/InputStarsTransaction/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
