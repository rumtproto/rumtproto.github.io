---
title: "updateChannelUserTyping"
original: "https://core.telegram.org/constructor/updateChannelUserTyping"
section: ref
kind: constructor
description: "Пользователь набирает текст в супергруппе, канале или ветке сообщений"
layout: layout.njk
---

# updateChannelUserTyping

Пользователь набирает текст в [супергруппе, канале](/api/channel/) или [ветке сообщений](/api/threads/)

```
updateChannelUserTyping#8c88c923 flags:# channel_id:long top_msg_id:flags.0?int from_id:Peer action:SendMessageAction = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td><a href="/api/threads">Идентификатор ветки</a></td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Пир, который печатает</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction">SendMessageAction</a></td><td>Набирает ли пользователь текст, отправляет ли медиа или занят чем-то ещё</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
