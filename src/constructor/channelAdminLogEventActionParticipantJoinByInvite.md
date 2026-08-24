---
title: "channelAdminLogEventActionParticipantJoinByInvite"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantJoinByInvite"
section: ref
kind: constructor
description: "Пользователь вступил в супергруппу или канал по конкретной пригласительной ссылке"
layout: layout.njk
---

# channelAdminLogEventActionParticipantJoinByInvite

Пользователь вступил в [супергруппу или канал](/api/channel/) по конкретной пригласительной ссылке

```
channelAdminLogEventActionParticipantJoinByInvite#fe9fc158 flags:# via_chatlist:flags.0?true invite:ExportedChatInvite = ChannelAdminLogEventAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>via_chatlist</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Участник вступил, импортировав <a href="/api/links#chat-folder-links">глубокую ссылку на папку чатов »</a>.</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>Пригласительная ссылка, по которой был выполнен вход в <a href="/api/channel">супергруппу или канал</a></td></tr></tbody></table>

### Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
