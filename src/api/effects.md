---
title: "Анимированные эффекты для сообщений"
original: "https://core.telegram.org/api/effects"
section: api
description: "Telegram позволяет добавлять зрелищные анимированные эффекты к сообщениям, которые вы отправляете в личных чатах."
layout: layout.njk
---

# Анимированные эффекты для сообщений

Telegram позволяет добавлять зрелищные **анимированные эффекты** к сообщениям, которые вы отправляете в личных чатах.

```
availableEffect#93c3e27e flags:# premium_required:flags.2?true id:long emoticon:string static_icon_id:flags.0?long effect_sticker_id:long effect_animation_id:flags.1?long = AvailableEffect;

messages.availableEffectsNotModified#d1ed9a5b = messages.AvailableEffects;
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;

---functions---

messages.getAvailableEffects#dea20a39 hash:int = messages.AvailableEffects;

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;

messages.saveDraft#54ae308e flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia effect:flags.7?long suggested_post:flags.8?SuggestedPost = Bool;
```

Полный список эффектов, которые разрешено использовать в сообщениях, возвращает метод [messages.getAvailableEffects](/method/messages.getAvailableEffects/).

[@term:hash] Клиенту следует повторно вызывать этот метод (передавая `hash` — хеш выборки, полученный при предыдущем вызове), чтобы проверять список эффектов на изменения, но не чаще одного раза в час (либо при получении [сообщения](/constructor/message/) с неизвестным значением `effect`).

Сведения о каждом эффекте хранятся в конструкторе [availableEffect](/constructor/availableEffect/), который опознаётся по своему полю `id`: этот идентификатор затем передаётся в поле `effect` методов [messages.sendMessage](/method/messages.sendMessage/), [messages.sendMedia](/method/messages.sendMedia/), [messages.sendMultiMedia](/method/messages.sendMultiMedia/), чтобы прикрепить эффект к [сообщению](/constructor/message/) — в поле `effect`.

Все идентификаторы типа `long` в конструкторе [availableEffect](/constructor/availableEffect/), кроме `id`, — это значения [document](/constructor/document/).`id` из объемлющего конструктора [messages.availableEffects](/constructor/messages.availableEffects/).

С каждым эффектом связаны следующие сведения, описываемые полями конструктора [availableEffect](/constructor/availableEffect/):

-   Эмодзи: задаётся в `emoticon`, служит для быстрого поиска эффектов.
-   Значок предпросмотра: изображение webp из `static_icon_id`, если оно задано, иначе — эмодзи из `emoticon`.  
    Показывается в правом нижнем углу анимации предпросмотра, чтобы пользователь мог быстро отличать эффекты друг от друга. Этот значок обязан отображаться и в сообщениях с этим эффектом — рядом с датой сообщения: нажатие на него должно запускать эффект заново.
-   Анимация предпросмотра: [анимированный стикер](/api/stickers/#animated-stickers), заданный в `effect_sticker_id`.  
    Используется в меню выбора эффекта.
-   Анимация эффекта: другой [анимированный стикер](/api/stickers/#animated-stickers), заданный либо полем `effect_animation_id` (если оно задано), либо [эффектом premium-анимированного стикера](/api/stickers/#premium-animated-sticker-effects), связанным с анимированным стикером из `effect_sticker_id` (он всегда отличается от самого анимированного стикера и извлекается через [videoSize](/constructor/videoSize/) типа `f`, как описано [здесь »](/api/stickers/#premium-animated-sticker-effects)).  
    Анимацию эффекта следует проигрывать только один раз — при первом получении или отправке сообщения.  
    Нажатие на значок предпросмотра рядом с датой сообщения должно воспроизводить эффект повторно.
