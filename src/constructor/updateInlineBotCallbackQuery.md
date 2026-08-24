---
title: "updateInlineBotCallbackQuery"
original: "https://core.telegram.org/constructor/updateInlineBotCallbackQuery"
section: ref
kind: constructor
description: "Это уведомление получают боты при нажатии кнопки"
layout: layout.njk
---

# updateInlineBotCallbackQuery

Это уведомление получают боты при нажатии кнопки

```
updateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, нажавшего кнопку</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>[@term:msg_id] Идентификатор инлайн-сообщения с кнопкой</td></tr><tr><td><strong>chat_instance</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Глобальный идентификатор, однозначно соответствующий чату, в который было отправлено сообщение с callback-кнопкой. Полезен для рекордов в играх.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Данные, связанные с callback-кнопкой. Учтите, что недобросовестный клиент может передать в этом поле произвольные данные.</td></tr><tr><td><strong>game_short_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Короткое имя игры, которую нужно вернуть; служит её уникальным идентификатором</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
