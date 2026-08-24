---
title: "updateBotInlineSend"
original: "https://core.telegram.org/constructor/updateBotInlineSend"
section: ref
kind: constructor
description: "Результат инлайн-запроса, который пользователь выбрал и отправил своему собеседнику. О том, как включить эти обновления для вашего бота, см. документацию по сбору обратной связи."
layout: layout.njk
---

# updateBotInlineSend

Результат инлайн-запроса, который пользователь выбрал и отправил своему собеседнику. О том, как включить эти обновления для вашего бота, см. документацию по [сбору обратной связи](https://core.telegram.org/bots/inline#collecting-feedback).

```
updateBotInlineSend#12f12a07 flags:# user_id:long query:string geo:flags.0?GeoPoint id:string msg_id:flags.1?InputBotInlineMessageID = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, выбравший результат</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Запрос, по которому был получен результат</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/GeoPoint">GeoPoint</a></td><td>Необязательное поле. Местоположение отправителя, только для ботов, которым требуется местоположение пользователя</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Уникальный идентификатор выбранного результата</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>[@term:msg_id] Идентификатор отправленного инлайн-сообщения. Доступен, только если к сообщению приложена инлайн-клавиатура. Также будет приходить в callback-запросах и может использоваться для изменения сообщения.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
