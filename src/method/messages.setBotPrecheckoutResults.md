---
title: "messages.setBotPrecheckoutResults"
original: "https://core.telegram.org/method/messages.setBotPrecheckoutResults"
section: ref
kind: method
description: "После того как пользователь подтвердил платёж и данные доставки, бот получает обновление updateBotPrecheckoutQuery."
layout: layout.njk
---

# messages.setBotPrecheckoutResults

После того как пользователь подтвердил платёж и данные доставки, бот получает обновление [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/).  
Используйте этот метод, чтобы ответить на такие запросы предварительной проверки заказа.  
**Примечание**: Telegram должен получить ответ в течение 10 секунд после отправки запроса предварительной проверки заказа.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setBotPrecheckoutResults#9c2dd95 flags:# success:flags.1?true query_id:long error:flags.0?string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>success</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если всё в порядке (товары в наличии и т. п.) и бот готов продолжить оформление заказа; иначе не устанавливайте его, а вместо этого заполните поле <code>error</code></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Уникальный идентификатор запроса, на который нужно ответить</td></tr><tr><td><strong>error</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Обязательно, если не установлено поле <code>success</code>. Сообщение об ошибке в понятной человеку форме, объясняющее причину, по которой оформление заказа не может быть продолжено (например: «Извините, пока вы вводили платёжные данные, кто-то купил последнюю из наших замечательных чёрных футболок. Пожалуйста, выберите другой цвет или другую вещь!»). Telegram покажет это сообщение пользователю.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ERROR_TEXT_EMPTY</td><td>Указанный текст ошибки пуст.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/)

Этот объект содержит информацию о входящем запросе предварительной проверки заказа.
