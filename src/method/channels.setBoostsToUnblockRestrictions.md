---
title: "channels.setBoostsToUnblockRestrictions"
original: "https://core.telegram.org/method/channels.setBoostsToUnblockRestrictions"
section: ref
kind: method
description: "Администраторы с правами администратора ban\\_users » могут разрешить пользователям, отдавшим группе определённое количество бустов », обходить медленный режим » и другие »…"
layout: layout.njk
---

# channels.setBoostsToUnblockRestrictions

Администраторы с [правами администратора ban\_users »](/constructor/chatAdminRights/) могут разрешить пользователям, отдавшим группе определённое количество [бустов »](/api/boost/), обходить [медленный режим »](/method/channels.toggleSlowMode/) и [другие »](/api/rights/#default-rights) ограничения супергруппы; подробнее [см. здесь »](/api/boost/#bypass-slowmode-and-chat-restrictions).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.setBoostsToUnblockRestrictions#ad399cee channel:InputChannel boosts:int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Супергруппа.</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Требуемое количество бустов (1–8, 0 — чтобы отключить).</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [chatAdminRights](/constructor/chatAdminRights/)

Представляет права администратора в [канале или супергруппе](/api/channel/).

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [channels.toggleSlowMode](/method/channels.toggleSlowMode/)

Переключить медленный режим в супергруппе: если он включён, пользователи смогут отправлять только одно сообщение каждые `seconds` секунд

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.
