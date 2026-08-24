---
title: "updateBotShippingQuery"
original: "https://core.telegram.org/constructor/updateBotShippingQuery"
section: ref
kind: constructor
description: "Этот объект содержит информацию о входящем запросе доставки."
layout: layout.njk
---

# updateBotShippingQuery

Этот объект содержит информацию о входящем запросе доставки.

```
updateBotShippingQuery#b5aefd7d query_id:long user_id:long payload:bytes shipping_address:PostAddress = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Уникальный идентификатор запроса</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, отправивший запрос</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Полезная нагрузка счёта, заданная ботом</td></tr><tr><td><strong>shipping_address</strong></td><td style="text-align: center;"><a href="/type/PostAddress">PostAddress</a></td><td>Указанный пользователем адрес доставки</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
