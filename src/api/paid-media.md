---
title: "Платные медиа"
original: "https://core.telegram.org/api/paid-media"
section: api
description: "Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты только после того, как заплатят автору за их…"
layout: layout.njk
---

# Платные медиа

Авторы контента могут принимать [Stars](/api/stars/), публикуя в своих каналах **платные фотографии и видео**. Подписчики смогут просмотреть такие посты только после того, как заплатят автору за их разблокировку.

Затем авторы могут [вывести Stars с помощью криптовалюты Gram »](/api/stars/#withdrawing-revenue) либо потратить их на [рекламу своего канала](/api/stars/#paying-for-ads) и привлечь ещё больше подписчиков — и всё это практически с **нулевой комиссией** со стороны Telegram.

### Публикация платных медиа

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

inputMediaPaidMedia#c4103386 flags:# stars_amount:long extended_media:Vector<InputMedia> payload:flags.0?string = InputMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

Администраторы [канала](/api/channel/) могут пересылать или публиковать платные медиа, если в [channelFull](/constructor/channelFull/) установлен флаг `paid_media_allowed`.

Чтобы опубликовать платные медиа, используйте [messages.sendMedia](/method/messages.sendMedia/), передав конструктор [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/), который содержит:

-   В `stars_amount` — сумму в [Telegram Stars](/api/stars/), которую пользователи обязаны заплатить, чтобы получить доступ к медиа.  
    Максимальное значение, которое здесь допускается передать, указано в [параметре конфигурации клиента stars\_paid\_post\_amount\_max »](/api/config/#stars-paid-post-amount-max).
-   В `extended_media` — сами медиафайлы (пока поддерживаются только фотографии и видео). Чтобы отправить альбом, **не** используйте [messages.sendMultiMedia](/method/messages.sendMultiMedia/), а передайте все медиа в массиве `extended_media`.

### Просмотр платных медиа

```
messageExtendedMediaPreview#ad628cc8 flags:# w:flags.0?int h:flags.0?int thumb:flags.1?PhotoSize video_duration:flags.2?int = MessageExtendedMedia;
messageExtendedMedia#ee479c64 media:MessageMedia = MessageExtendedMedia;

messageMediaPaidMedia#a8852491 stars_amount:long extended_media:Vector<MessageExtendedMedia> = MessageMedia;

inputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;

updateMessageExtendedMedia#d5a41724 peer:Peer msg_id:int extended_media:Vector<MessageExtendedMedia> = Update;
updateBotPurchasedPaidMedia#283bd312 user_id:long payload:string qts:int = Update;

starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;

---functions---

messages.getExtendedMedia#84f80814 peer:InputPeer id:Vector<int> = Updates;
```

Платные медиа представлены конструктором [messageMediaPaidMedia](/constructor/messageMediaPaidMedia/), который содержит:

-   В `stars_amount` — цену медиа в [Telegram Stars](/api/stars/)
-   В `extended_media` — вектор конструкторов [MessageExtendedMedia](/type/MessageExtendedMedia/), причём **все** они будут одного из двух видов:
    -   [messageExtendedMediaPreview](/constructor/messageExtendedMediaPreview/) — для медиа, которые текущий пользователь ещё не купил; содержит **необязательные** базовые сведения о медиа (ширину, высоту, [миниатюру крайне низкого разрешения](/api/files/#stripped-thumbnails), а для видео — длительность).
    -   [messageExtendedMedia](/constructor/messageExtendedMedia/) — для медиа, которые текущий пользователь уже приобрёл; содержит сам конструктор [messageMediaPhoto](/constructor/messageMediaPhoto/)/[messageMediaDocument](/constructor/messageMediaDocument/) (видео), который можно скачать и просмотреть [обычным способом »](/api/files/).

[@term:peer] Чтобы купить платные медиа, следуйте [обычному процессу оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product), передав конструктор [inputInvoiceMessage](/constructor/inputInvoiceMessage/) с пиром (`peer` — собеседник, чат или канал) и ID сообщения с платными медиа.

Как только оплата пройдёт успешно, будет отправлено обновление [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/), которое заменит связанные с сообщением конструкторы [messageExtendedMediaPreview](/constructor/messageExtendedMediaPreview/) на конструкторы [messageExtendedMedia](/constructor/messageExtendedMedia/).  
Если медиа опубликовал бот, он также получит [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/).  
Никаких других обновлений отправлено не будет (то есть для сообщения с платными медиа **не** придут обновления [updateEditChannelMessage](/constructor/updateEditChannelMessage/), даже если повторное получение тех же сообщений иными способами — например через [messages.getHistory](/method/messages.getHistory/) — _вернёт_ раскрытые конструкторы [messageExtendedMedia](/constructor/messageExtendedMedia/)).

В связанной с покупкой транзакции [starsTransaction](/constructor/starsTransaction/) поле `peer` будет иметь тип [starsTransactionPeer](/constructor/starsTransactionPeer/) (сам пир при этом равен каналу), в поле `msg_id` окажется ID сообщения с платными медиа, а в поле `extended_media` — раскрытые платные медиа.

[@term:pts] [@term:qts] **Примечание**: у обновления [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) нет поля `pts`/`qts` — счётчиков состояния обновлений, по которым клиент определяет, не пропустил ли он что-нибудь.  
Это значит, что такое обновление можно получить только пассивно через сокет ([см. здесь »](/api/updates/#event-sequences)), и оно **не может** быть возвращено методами [updates.getDifference](/method/updates.getDifference/) или [updates.getChannelDifference](/method/updates.getChannelDifference/).  
Отсюда следует, что если некоторый клиент находится не в сети, а другая сессия покупает платные медиа, то первый клиент при повторном подключении к серверу не получит раскрытые конструкторы [messageExtendedMedia](/constructor/messageExtendedMedia/) и никак не сможет узнать, что закешированные платные медиа уже можно показать пользователю.

Чтобы обойти эту проблему, поступайте следующим образом:

-   Возьмите сообщения с ещё не купленными платными медиа, которые видны пользователю.

-   Из выбранных выше сообщений оставьте только те, что были получены _до_ того, как клиент в последний раз ушёл в офлайн (то есть исключите сообщения с платными медиа, которые были получены и закешированы через обновления либо через getHistory/getMessages и т. п. N секунд назад, притом что клиент подключился к серверу M >= N секунд назад).

-   Из выбранных выше сообщений оставьте только те, для которых метод [messages.getExtendedMedia](/method/messages.getExtendedMedia/) вызывался более 15 секунд назад.

-   Для всех сообщений, удовлетворяющих перечисленным условиям, сделайте один запрос [messages.getExtendedMedia](/method/messages.getExtendedMedia/), собрав подходящие ID сообщений в поле `id`.  
    Метод вернёт массив обновлений [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) — только для переданных сообщений с **уже купленными** платными медиа.  
    Для переданных сообщений с ещё не купленными платными медиа, а также для сообщений без платных медиа никаких сведений возвращено не будет.

    Повторяйте вызов метода каждые 15 секунд, пока хотя бы одно из сообщений, удовлетворяющих перечисленным условиям, остаётся видимым.  
    Повторите вызов метода немедленно, если в поле зрения при прокрутке появляется новое платное сообщение, удовлетворяющее перечисленным условиям.
