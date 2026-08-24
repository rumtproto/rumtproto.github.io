---
title: "messages.setTyping"
original: "https://core.telegram.org/method/messages.setTyping"
section: ref
kind: method
description: "Отправляет событие набора текста текущим пользователем (все типы событий см. в SendMessageAction) собеседнику или в группу."
layout: layout.njk
---

# messages.setTyping

Отправляет событие набора текста текущим пользователем (все типы событий см. в [SendMessageAction](/type/SendMessageAction/)) собеседнику или в группу.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setTyping#58943ee2 flags:# peer:InputPeer top_msg_id:flags.0?int action:SendMessageAction = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Целевой пользователь или группа</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td><a href="/api/threads">Идентификатор темы форума</a></td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction">SendMessageAction</a></td><td>Тип действия</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Через текущее <a href="/api/business#connected-bots">бизнес-подключение</a> нельзя отправлять сообщения указанному пиру.</td></tr><tr><td>400</td><td>BUSINESS_PEER_USAGE_MISSING</td><td>Нельзя отправить сообщение пользователю через <a href="/api/business#connected-bots">бизнес-подключение</a>, если этот пользователь недавно нам не писал.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_MONOFORUM_UNSUPPORTED</td><td><a href="/api/channel#monoforums">Монофорумы</a> не поддерживают эту возможность.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>Указанный групповой звонок нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>Указанное сообщение слишком длинное.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>406</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>TEXTDRAFT_PEER_INVALID</td><td>sendMessageTextDraftAction может использоваться только в личных чатах между двумя пользователями.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr><tr><td>400</td><td>USER_IS_BOT</td><td>Боты не могут отправлять сообщения другим ботам.</td></tr></tbody></table>

### Связанные страницы

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.

#### [SendMessageAction](/type/SendMessageAction/)

Действия пользователя. Используйте это, чтобы показывать пользователям подробные сведения о действиях собеседника: наборе текста или отправке вложений любого рода.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
