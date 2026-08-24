---
title: "updateChannelReadMessagesContents"
original: "https://core.telegram.org/constructor/updateChannelReadMessagesContents"
section: ref
kind: constructor
description: "Указанные сообщения канала или супергруппы были прочитаны (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл…"
layout: layout.njk
---

# updateChannelReadMessagesContents

Указанные сообщения [канала или супергруппы](/api/channel/) были прочитаны (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл просмотрен и отмечен как прочитанный с помощью [channels.readMessageContents](/method/channels.readMessageContents/))

```
updateChannelReadMessagesContents#25f324f7 flags:# channel_id:long top_msg_id:flags.0?int saved_peer_id:flags.1?Peer messages:Vector<int> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/channel">канала/супергруппы</a></td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td><a href="/api/forum#forum-topics">Идентификатор темы форума</a>.</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>Если установлено, сообщения были прочитаны в пределах указанной <a href="/api/monoforum">темы монофорума »</a>.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы прочитанных сообщений</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [channels.readMessageContents](/method/channels.readMessageContents/)

Отметить содержимое сообщений [канала/супергруппы](/api/channel/) как прочитанное, порождая [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/).
