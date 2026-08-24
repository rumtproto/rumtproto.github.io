---
title: "updateBotInlineQuery"
original: "https://core.telegram.org/constructor/updateBotInlineQuery"
section: ref
kind: constructor
description: "Входящий инлайн-запрос"
layout: layout.njk
---

# updateBotInlineQuery

Входящий инлайн-запрос

```
updateBotInlineQuery#496f379c flags:# query_id:long user_id:long query:string geo:flags.0?GeoPoint peer_type:flags.1?InlineQueryPeerType offset:string = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, отправивший запрос</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст запроса</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/GeoPoint">GeoPoint</a></td><td>Вложенная геопозиция</td></tr><tr><td><strong>peer_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InlineQueryPeerType">InlineQueryPeerType</a></td><td>Тип чата, из которого был отправлен инлайн-запрос.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Смещение для перемещения по результатам</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
