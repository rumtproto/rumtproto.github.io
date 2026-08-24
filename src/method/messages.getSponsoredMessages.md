---
title: "messages.getSponsoredMessages"
original: "https://core.telegram.org/method/messages.getSponsoredMessages"
section: ref
kind: method
description: "Получить список рекламных сообщений для пира, подробнее см. здесь »."
layout: layout.njk
---

# messages.getSponsoredMessages

Получить список [рекламных сообщений для пира, подробнее см. здесь »](/api/sponsored-messages/).

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
messages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;
---functions---
messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Открытый в данный момент канал или бот.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>[@term:msg_id] Обязано устанавливаться при получении <a href="/api/sponsored-messages#getting-sponsored-video-advertisements">спонсорских сообщений для показа в видео канала »</a>.</td></tr></tbody></table>

### Результат

[messages.SponsoredMessages](/type/messages.SponsoredMessages/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr></tbody></table>

### Связанные страницы

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.
