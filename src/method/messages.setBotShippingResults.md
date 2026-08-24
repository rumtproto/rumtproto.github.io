---
title: "messages.setBotShippingResults"
original: "https://core.telegram.org/method/messages.setBotShippingResults"
section: ref
kind: method
description: "Если вы отправили счёт, запрашивающий адрес доставки, и был указан параметр is\\_flexible, бот получит обновление updateBotShippingQuery. Используйте этот метод, чтобы ответить на…"
layout: layout.njk
---

# messages.setBotShippingResults

Если вы отправили счёт, запрашивающий адрес доставки, и был указан параметр is\_flexible, бот получит обновление [updateBotShippingQuery](/constructor/updateBotShippingQuery/). Используйте этот метод, чтобы ответить на запросы доставки.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setBotShippingResults#e5f672fa flags:# query_id:long error:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Уникальный идентификатор запроса, на который нужно ответить</td></tr><tr><td><strong>error</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Сообщение об ошибке в понятной человеку форме, объясняющее, почему невозможно выполнить заказ (например, «Извините, доставка по указанному вами адресу недоступна»). Telegram покажет это сообщение пользователю.</td></tr><tr><td><strong>shipping_options</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ShippingOption">ShippingOption</a>&gt;</td><td>Вектор доступных вариантов доставки.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>QUERY_ID_INVALID</td><td>Указанный идентификатор запроса недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [updateBotShippingQuery](/constructor/updateBotShippingQuery/)

Этот объект содержит информацию о входящем запросе доставки.
