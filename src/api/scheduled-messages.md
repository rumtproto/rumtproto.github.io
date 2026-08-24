---
title: "Отложенные сообщения"
original: "https://core.telegram.org/api/scheduled-messages"
section: api
description: "Telegram позволяет планировать отправку сообщений."
layout: layout.njk
---

# Отложенные сообщения

Telegram позволяет планировать отправку сообщений.

### Отложенные сообщения

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

updateNewScheduledMessage#39a51dfb message:Message = Update;
updateDeleteScheduledMessages#f2a71983 flags:# peer:Peer messages:Vector<int> sent_messages:flags.0?Vector<int> = Update;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

[@term:schedule_date] Чтобы запланировать сообщение, достаточно передать будущую отметку времени UNIX во флаге `schedule_date` (дата отправки — момент, в который сервер сам отправит отложенное сообщение) метода [messages.sendMessage](/method/messages.sendMessage/), [messages.sendMedia](/method/messages.sendMedia/) и других методов.

Есть и другой вариант, но только если адресат — личный чат с пользователем: в `schedule_date` допускается передать особую отметку времени `0x7FFFFFFE`, и тогда сообщение будет отправлено:

[@note] `0x7FFFFFFE` — это 2147483646, на единицу меньше максимального значения 32-битного знакового `int`. Реальную дату это число не обозначает: оно служит признаком «отправить, когда собеседник появится в сети».

-   Немедленно (минуя очередь отложенных сообщений), если пользователь в сети
-   В противном случае сообщение будет добавлено в очередь отложенных сообщений со значением `schedule_date`, равным `0x7FFFFFFE`, и будет отправлено автоматически, когда пользователь снова появится в сети.

При планировании со значением `0x7FFFFFFE` сервер может вернуть ещё и RPC-ошибку `SCHEDULE_STATUS_PRIVATE` — если время последнего посещения нужного пользователя скрыто его [настройками приватности](/api/privacy/): в этом случае сообщение не будет ни запланировано, ни отправлено.

Указанное сообщение или медиа сервер добавит в очередь отложенных сообщений текущего чата и автоматически отправит в заданное время.  
Вызов метода порождает следующие обновления:

-   Немедленно — [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/), содержащее [message](/constructor/message/) с ID, равным ID сообщения в очереди отложенных сообщений текущего чата (у каждой личной переписки, чата, супергруппы и канала своя очередь и своя последовательность ID), и полем `date`, равным `schedule_date`.
-   В момент `schedule_date` — [updateNewMessage](/constructor/updateNewMessage/) или [updateNewChannelMessage](/constructor/updateNewChannelMessage/) с установленным флагом `from_scheduled`: оно сообщает отправителю, что указанное отложенное сообщение отправлено.
-   В момент `schedule_date` — [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/): оно сообщает, что сообщение изъято из очереди отложенных сообщений.  
    Поле `messages` будет содержать ID отправленных сообщений в очереди отложенных (изначально возвращённые в [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/)), а `sent_messages` — настоящие ID этих же отправленных сообщений.  
    ID в очереди отложенных и настоящий ID одного и того же сообщения стоят по одному и тому же индексу вектора — соответственно в `messages` и `sent_messages`.

Если `schedule_date` отстоит от текущего момента менее чем на 10 секунд, сообщение будет отправлено немедленно и породит обычное [updateNewMessage](/constructor/updateNewMessage/)/[updateNewChannelMessage](/constructor/updateNewChannelMessage/).

#### Повторяющиеся отложенные сообщения

Пользователи [Premium](/api/premium/) могут отправлять повторяющиеся отложенные сообщения: для этого при планировании сообщения (как описано [выше](#scheduled-messages)) нужно дополнительно заполнить флаг `schedule_repeat_period`, указав интервал в секундах (он также виден в отложенном [message](/constructor/message/)).

Отправив отложенное сообщение, сервер сразу же планирует его заново — на `schedule_repeat_period` секунд вперёд — и порождает все те же обновления, что и выше, как если бы мы повторно вызвали sendMessage/sendMedia/и т. д. со значением `schedule_date`, равным текущему времени плюс `schedule_repeat_period` (и с тем же значением `schedule_repeat_period`).

Допустимые значения `schedule_repeat_period`: `86400` (каждый день), `7 * 86400` (каждую неделю), `14 * 86400` (каждые две недели), `30 * 86400` (каждый месяц), `91 * 86400` (каждые три месяца), `182 * 86400` (дважды в год), `365 * 86400` (каждый год), а на тестовом дата-центре (Test DC) дополнительно `60` или `300` секунд.

`schedule_repeat_period` можно использовать только при отправке или пересылке одного-единственного сообщения: тем самым исключаются альбомы через [messages.sendMultiMedia](/method/messages.sendMultiMedia/) и вызовы [messages.forwardMessages](/method/messages.forwardMessages/) более чем с одним сообщением.

#### Автоматическая обработка видео

Обратите внимание: отправка видео в крупные каналы **даже без планирования** автоматически запускает обработку на стороне сервера (например, чтобы подготовить альтернативные варианты качества, которые попадут в поле `alt_document` итогового [messageMediaDocument](/constructor/messageMediaDocument/)).

Такие сообщения отправляются не сразу, а попадают в очередь отложенных сообщений — как и обычные отложенные сообщения, но с несколькими отличиями в порождаемых обновлениях:

-   Немедленно — [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/), содержащее [message](/constructor/message/) с ID, равным ID сообщения в очереди отложенных сообщений текущего чата (у каждой личной переписки, чата, супергруппы и канала своя очередь и своя последовательность ID), **с установленным флагом `video_processing_pending`** и полем `date`, равным **предполагаемой дате завершения обработки** (а не дате планирования).
-   Примерно в момент `date` — [updateNewMessage](/constructor/updateNewMessage/) или [updateNewChannelMessage](/constructor/updateNewChannelMessage/) с установленным флагом `from_scheduled`: оно сообщает отправителю, что указанное сообщение с ожидавшей обработки видеозаписью отправлено.
-   Примерно в момент `date` — [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/): оно сообщает, что сообщение изъято из очереди отложенных сообщений.  
    Поле `messages` будет содержать ID отправленных сообщений в очереди отложенных (изначально возвращённые в [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/)), а `sent_messages` — настоящие ID этих же отправленных сообщений.  
    ID в очереди отложенных и настоящий ID одного и того же сообщения стоят по одному и тому же индексу вектора — соответственно в `messages` и `sent_messages`.

#### Управление очередью отложенных сообщений

```
updateNewScheduledMessage#39a51dfb message:Message = Update;
updateDeleteScheduledMessages#f2a71983 flags:# peer:Peer messages:Vector<int> sent_messages:flags.0?Vector<int> = Update;

---functions---

messages.getScheduledHistory#f516760b peer:InputPeer hash:long = messages.Messages;
messages.getScheduledMessages#bdbb0464 peer:InputPeer id:Vector<int> = messages.Messages;
messages.sendScheduledMessages#bd38850a peer:InputPeer id:Vector<int> = Updates;
messages.deleteScheduledMessages#59ae2b16 peer:InputPeer id:Vector<int> = Updates;

messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

Клиенты могут вручную править очередь отложенных сообщений конкретного чата, передавая ID отложенного сообщения, полученный из [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/).

-   [messages.getScheduledHistory](/method/messages.getScheduledHistory/) получает все сообщения из очереди отложенных сообщений указанного чата
-   [messages.getScheduledMessages](/method/messages.getScheduledMessages/) получает сведения о конкретных сообщениях в очереди отложенных сообщений указанного чата
-   [messages.sendScheduledMessages](/method/messages.sendScheduledMessages/) изымает сообщения из очереди отложенных и отправляет их немедленно
-   [messages.deleteScheduledMessages](/method/messages.deleteScheduledMessages/) удаляет сообщения из очереди отложенных, не отправляя их
-   [messages.editMessage](/method/messages.editMessage/) позволяет изменить дату отправки конкретного сообщения в очереди отложенных сообщений.

Изменение отложенных сообщений порождает [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/) с тем же ID и обновлёнными данными.  
Удаление отложенных сообщений порождает [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/).
