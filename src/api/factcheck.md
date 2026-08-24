---
title: "Проверки фактов"
original: "https://core.telegram.org/api/factcheck"
section: api
description: "Клиенты Telegram умеют показывать проверки фактов, добавленные к сообщениям независимыми фактчекерами."
layout: layout.njk
---

# Проверки фактов

Клиенты Telegram умеют показывать проверки фактов, добавленные к сообщениям независимыми фактчекерами.

### Отображение проверок фактов

```
factCheck#b89bfccf flags:# need_check:flags.0?true country:flags.1?string text:flags.1?TextWithEntities hash:long = FactCheck;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

---functions---

messages.getFactCheck#b9cdc5ee peer:InputPeer msg_id:Vector<int> = Vector<FactCheck>;
```

Проверку фактов описывает конструктор [factCheck](/constructor/factCheck/); он лежит в поле `factcheck` конструктора [message](/constructor/message/).

[@term:need_check] Иногда — например, из соображений производительности — проверка фактов не возвращается в поле `text` конструктора [factCheck](/constructor/factCheck/), связанного с [message](/constructor/message/), даже если у сообщения она _действительно_ есть: в этом случае в [factCheck](/constructor/factCheck/) будет установлен флаг `need_check` (признак урезанной проверки, текст которой надо дозапросить), а флаги `country`/`text` установлены не будут, и клиенту следует запросить полный текст проверки фактов вручную через [messages.getFactCheck](/method/messages.getFactCheck/), когда сообщение попадает в поле зрения пользователя.

Такие ручные запросы следует объединять в пакеты: каждый раз, когда в очередь проверок фактов для ручной загрузки добавляется новый идентификатор, загрузка откладывается ещё на 80 мс.

[@term:hash] Все _полные_ проверки фактов (то есть те, у которых есть `country`/`text`) следует хранить в локальной базе данных, а ключом брать `hash` — контрольное значение, которое однозначно определяет содержимое проверки.  
Загружать _урезанные_ (`min`) проверки фактов — то есть те, у которых установлен `need_check`, — не следует, если проверка с таким же значением `hash` уже лежит в кеше локальной базы данных.

Пример реализации: [android](https://github.com/DrKLO/Telegram/blob/eee720ef5e48e1c434f4c5a83698dc4ada34aaa9/TMessagesProj/src/main/java/org/telegram/messenger/FactCheckController.java).

### Редактирование проверок фактов

```
factCheck#b89bfccf flags:# need_check:flags.0?true country:flags.1?string text:flags.1?TextWithEntities hash:long = FactCheck;

---functions---

messages.editFactCheck#0589ee75 peer:InputPeer msg_id:int text:TextWithEntities = Updates;
messages.deleteFactCheck#d1da940c peer:InputPeer msg_id:int = Updates;
```

Независимые фактчекеры могут создавать, удалять и редактировать проверки фактов методами [messages.editFactCheck](/method/messages.editFactCheck/) и [messages.deleteFactCheck](/method/messages.deleteFactCheck/).

Этими методами допускается пользоваться независимым фактчекерам — тем, у кого конфигурационный флаг [appConfig.can\_edit\_factcheck](/api/config/#can-edit-factcheck) выставлен в `true`.

Если упомянутый выше флаг выставлен в `true`, предельная длина проверки фактов в UTF-8 указывается в поле [appConfig.factcheck\_length\_limit](/api/config/#factcheck-length-limit).
