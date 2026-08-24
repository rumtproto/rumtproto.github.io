---
title: "Предлагаемые посты"
original: "https://core.telegram.org/api/suggested-posts"
section: api
description: "Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты."
layout: layout.njk
---

# Предлагаемые посты

Telegram предлагает администраторам каналов мощный инструмент монетизации — **предлагаемые посты**.

```
suggestedPost#0e8e37e5 flags:# accepted:flags.1?true rejected:flags.2?true price:flags.3?StarsAmount schedule_date:flags.0?int = SuggestedPost;

draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

messageActionSuggestedPostApproval#ee7a1596 flags:# rejected:flags.0?true balance_too_low:flags.1?true reject_comment:flags.2?string schedule_date:flags.3?int price:flags.4?StarsAmount = MessageAction;
messageActionSuggestedPostSuccess#95ddcf69 price:StarsAmount = MessageAction;
messageActionSuggestedPostRefund#69f916f8 flags:# payer_initiated:flags.0?true = MessageAction;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.toggleSuggestedPostApproval#8107455c flags:# reject:flags.1?true peer:InputPeer msg_id:int schedule_date:flags.0?int reject_comment:flags.2?string = Updates;
```

[@term:monoforum] Подписчики теперь могут предлагать контент в любимые каналы в виде предлагаемых постов — через прозрачный и автоматизированный механизм: достаточно заполнить флаг `suggested_post` в [messages.sendMessage](/method/messages.sendMessage/) (или в любом другом методе отправки сообщений) конструктором [suggestedPost](/constructor/suggestedPost/) и отправить сообщение в связанный с каналом [монофорум »](/api/monoforum/) — группу личных сообщений канала (`monoforum`), через которую подписчики пишут в канал напрямую.

В этом сценарии отправитель может (по желанию) заполнить только следующие флаги конструктора [suggestedPost](/constructor/suggestedPost/):

-   [@term:Telegram Stars] `price` — предложить оплату за предлагаемый пост (пост можно предложить и бесплатно, не устанавливая этот флаг).  
    Если флаг задан и цена указана в [звёздах](/api/stars/) (Telegram Stars — внутренняя валюта Telegram)

    -   Цена обязана находиться в диапазоне от [stars\_suggested\_post\_amount\_min](/api/config/#stars-suggested-post-amount-min) до [stars\_suggested\_post\_amount\_max](/api/config/#stars-suggested-post-amount-max),
    -   После успешного завершения канал получит `price*stars_suggested_post_commission_permille/1000` звёзд, [см. stars\_suggested\_post\_commission\_permille »](/api/config/#stars-suggested-post-commission-permille).

    [@term:Gram] Если флаг задан и цена указана в нанограммах (Gram — криптовалюта сети TON; нанограмм равен одной миллиардной Gram):

    -   Цена обязана находиться в диапазоне от [ton\_suggested\_post\_amount\_min](/api/config/#ton-suggested-post-amount-min) до [ton\_suggested\_post\_amount\_max](/api/config/#ton-suggested-post-amount-max).
    -   После успешного завершения канал получит `price*ton_suggested_post_commission_permille/1000` нанограмм, [см. ton\_suggested\_post\_commission\_permille »](/api/config/#ton-suggested-post-commission-permille).
-   `schedule_date` — указать, когда сообщение должно быть опубликовано (необязательно, можно не задавать, если сообщение допустимо опубликовать в любое время); в этом случае после одобрения пост будет автоматически [поставлен в очередь отложенной публикации »](/api/scheduled-messages/).  
    Допустимый диапазон для этого значения, если оно задано, — от [stars\_suggested\_post\_future\_min](/api/config/#stars-suggested-post-future-min) до [stars\_suggested\_post\_future\_max](/api/config/#stars-suggested-post-future-max) секунд в будущем.

Далее администратор канала (или пользователь — для постов, предложенных каналом пользователю; в любом случае при платных предлагаемых постах платит всегда пользователь каналу, и никогда наоборот) может выбрать один из вариантов:

-   Принять предложенный пост, вызвав [messages.toggleSuggestedPostApproval](/method/messages.toggleSuggestedPostApproval/) и задав **только** `peer`, `msg_id` и, при необходимости, `schedule_date`, чтобы изменить дату публикации.  
    В результате в ответ на предложение (если оно не удалено) будет отправлено сервисное сообщение [messageActionSuggestedPostApproval](/constructor/messageActionSuggestedPostApproval/): флаги `schedule_date` и `price` в нём заполнены нужными значениями, а флаг `reject` **не** установлен.  
    Если на балансе пользователя недостаточно средств для предложенной цены, сообщение не будет запланировано или опубликовано, пока баланс не будет пополнен, а в ответ на предложение (если оно не удалено) будет отправлено сервисное сообщение [messageActionSuggestedPostApproval](/constructor/messageActionSuggestedPostApproval/): в нём заполнены флаги `balance_too_low` и `price`, а флаг `reject` **не** установлен.  
    После пополнения баланса тот, кто отвечает за одобрение, обязан повторно вызвать [messages.toggleSuggestedPostApproval](/method/messages.toggleSuggestedPostApproval/).

    Канал получит оплату (для платных предлагаемых постов) после того, как пост пробудет опубликованным в канале столько секунд, сколько указано в [параметре клиентской конфигурации stars\_suggested\_post\_age\_min »](/api/config/#stars-suggested-post-age-min) (то есть отсчёт идёт с момента фактической публикации, а не с момента постановки в очередь отложенной публикации): если пост удалён до истечения требуемого числа секунд, в ответ на предложение (если оно не удалено) будет отправлено [messageActionSuggestedPostRefund](/constructor/messageActionSuggestedPostRefund/), в котором **не** установлен ни один флаг.

    [messageActionSuggestedPostRefund](/constructor/messageActionSuggestedPostRefund/) с установленным флагом `payer_initiated` будет отправлено также в том случае, если плательщик оформит возврат звёзд, которыми был оплачен пост.

    Если всё пройдёт успешно, по истечении указанного выше времени будет отправлено [messageActionSuggestedPostSuccess](/constructor/messageActionSuggestedPostSuccess/).

-   Запросить изменение цены, содержимого сообщения или даты публикации — ответив на сообщение тем же сообщением, поправленным как нужно; при этом обязательно передать в `suggested_post` тот же самый или изменённый конструктор [suggestedPost](/constructor/suggestedPost/).  
    В этом случае уже получатель решает, принять предложенный пост, запросить изменение или отклонить его, по той же схеме, которой ранее пользовался администратор канала (если запрошено очередное изменение, ход снова переходит к каналу, и так далее).  
    Обратите внимание: канал также может предложить пост пользователю по собственной инициативе (то есть не отвечая на пост, предложенный пользователем).

-   Отклонить предложенный пост, вызвав [messages.toggleSuggestedPostApproval](/method/messages.toggleSuggestedPostApproval/) и задав **только** `peer`, `msg_id`, `reject` и, при необходимости, `reject_comment`, чтобы указать причину отказа.  
    В результате в ответ на предложение (если оно не удалено) будет отправлено сервисное сообщение [messageActionSuggestedPostApproval](/constructor/messageActionSuggestedPostApproval/), в котором заполнены флаги `rejected` и `reject_comment`.

Флаги `accepted/rejected/schedule_date` одобренного или отклонённого конструктора [suggestedPost](/constructor/suggestedPost/) будут обновлены в истории сообщений соответственно принятому решению.

После публикации у предлагаемого поста в канале будет установлен либо флаг [message](/constructor/message/).`paid_suggested_post_stars`, либо флаг [message](/constructor/message/).`paid_suggested_post_ton` — это признак того, что пост был предложен и оплачен с помощью Telegram Stars или Gram (в нанограммах).
