---
title: "messages.getPaidReactionPrivacy"
original: "https://core.telegram.org/method/messages.getPaidReactionPrivacy"
section: ref
kind: method
description: "Получает обновление updatePaidReactionPrivacy с текущей настройкой приватности платных реакций по умолчанию, подробнее см. здесь »."
layout: layout.njk
---

# messages.getPaidReactionPrivacy

Получает обновление [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) с текущей [настройкой приватности платных реакций по умолчанию, подробнее см. здесь »](/api/reactions/#paid-reactions).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.getPaidReactionPrivacy#472455aa = Updates;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/)

Содержит текущую [настройку приватности платных реакций по умолчанию, подробнее см. здесь »](/api/reactions/#paid-reactions).

При запуске клиентам следует вызывать [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/), чтобы получить текущую настройку приватности реакций по умолчанию, поскольку это обновление отправляется только сессиям, находящимся в сети в данный момент, и его нельзя получить через getDifference при запуске клиента.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
