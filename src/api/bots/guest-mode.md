---
title: "Гостевой режим для ботов"
original: "https://core.telegram.org/api/bots/guest-mode"
section: api
description: "Гостевых ботов можно вызывать по имени пользователя из любого несекретного личного чата, группы и супергруппы (кроме групп и супергрупп с включённой защитой контента »), и они…"
layout: layout.njk
---

# Гостевой режим для ботов

[@term:username] Гостевого бота можно вызвать по имени пользователя (`username` — публичный псевдоним, уникальный в пределах Telegram) из **любого** несекретного личного чата, группы и супергруппы (кроме групп и супергрупп с включённой [защитой контента »](/api/content-protection/#for-groups-and-channels)); результат он публикует прямо в этот чат, даже если не состоит в нём.

[@term:inline query] Гостевой режим похож на [инлайн-запросы »](/api/bots/inline/) (`inline query` — запрос к боту прямо из строки ввода, результат которого пользователь отправляет от своего имени), с той разницей, что итоговое сообщение бот публикует в чате сам, как гость.

Бот поддерживает гостевой режим, если в его профиле установлен флаг [user](/constructor/user/).`bot_guestchat`.

### Вызов гостевого бота

```
topPeerCategoryBotsGuestChat#6c24f3dd = TopPeerCategory;

---functions---

contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true bots_guestchat:flags.17?true offset:int limit:int hash:long = contacts.TopPeers;
```

Чтобы вызвать гостевого бота, пользователь упоминает в чате его `@username` (одновременно можно упомянуть до трёх гостевых ботов): это имя должно [разрешаться](/method/contacts.resolveUsername/) в бота, у которого установлен флаг [user](/constructor/user/).`bot_guestchat`.

[@term:peer] Список часто используемых гостевых ботов доступен в категории [topPeerCategoryBotsGuestChat](/constructor/topPeerCategoryBotsGuestChat/) [рейтинга популярных пиров »](/api/top-rating/) (`peer` — пир, то есть любой собеседник: пользователь, группа или канал); эту категорию возвращает [contacts.getTopPeers](/method/contacts.getTopPeers/), если при вызове установлен флаг `bots_guestchat`.

### Обработка гостевых запросов (на стороне бота)

```
updateBotGuestChatQuery#cdd4093d flags:# query_id:long message:Message reference_messages:flags.0?Vector<Message> qts:int = Update;

---functions---

messages.setBotGuestChatResult#b8f106e3 query_id:long result:InputBotInlineResult = InputBotInlineMessageID;
```

[@term:qts] Когда пользователь вызывает гостевого бота, бот получает обновление [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/), которое доставляется ботам по [последовательности обновлений »](/api/updates/) `qts` (отдельный счётчик состояния, по которому бот определяет, не пропустил ли он обновления) и содержит:

-   `query_id` — идентификатор запроса, который нужно передать обратно в ответе.
-   `message` — сообщение, вызвавшее запрос.
-   `reference_messages` — дополнительные контекстные сообщения, на которые ссылается вызвавшее сообщение (например, те, на которые оно отвечает).

Бот отвечает на запрос вызовом [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), передавая `query_id` и [InputBotInlineResult](/type/InputBotInlineResult/) с описанием сообщения, которое надо опубликовать в чате (тот же формат результата, что и при [ответе на инлайн-запросы »](/api/bots/inline/#2-answering-to-an-inline-query)).

Метод возвращает [InputBotInlineMessageID](/type/InputBotInlineMessageID/), идентифицирующий опубликованное сообщение.

### Гостевые сообщения

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
```

У сообщений, опубликованных гостевым ботом, в поле [message](/constructor/message/).`guestchat_via_from` записан тот пир — пользователь или чат, — который вызвал гостевого бота.
