---
title: "Партнёрские программы"
original: "https://core.telegram.org/api/bots/referrals"
section: api
description: "Разработчики могут открывать партнёрские программы для своих mini app (Mini App — веб-приложение, встроенное в Telegram и запускаемое прямо из клиента), позволяя авторам контента,…"
layout: layout.njk
---

# Партнёрские программы

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих [Mini App](/api/bots/webapps/) (Mini App — веб-приложение, встроенное в Telegram и запускаемое прямо из клиента), позволяя **авторам контента**, другим **разработчикам Mini App** и **любому пользователю Telegram** продвигать их и получать комиссию с покупок, которые совершают приглашённые ими люди.

### Создание партнёрской программы

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

starsAmount#bbb6b4a3 amount:long nanos:int = StarsAmount;
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;

---functions---

bots.getAdminedBots#b0711d83 = Vector<User>;

bots.updateStarRefProgram#778b5ab3 flags:# bot:InputUser commission_permille:int duration_months:flags.0?int = StarRefProgram;
```

Разработчик Mini App может вызвать [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/), чтобы создать, изменить или удалить [партнёрскую программу](https://telegram.org/tour/affiliate-programs) принадлежащих ему [Mini App »](/api/bots/webapps/).  
Список собственных ботов можно получить методом [bots.getAdminedBots](/method/bots.getAdminedBots/) либо по флагу `bot_can_edit` у соответствующего [пользователя](/constructor/user/).

Если флаг `bot_can_edit` установлен, графическим клиентам следует показывать при редактировании профиля бота пункт «Партнёрская программа», через который создают и изменяют партнёрскую программу бота.  
Учтите, что все элементы интерфейса и функции, связанные с созданием партнёрских программ владельцами ботов, обязаны быть скрыты и отключены, если [параметр клиентской конфигурации `starref_program_allowed` »](/api/config/#starref-program-allowed) задан и равен false.

При вызове [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/) передавайте следующие параметры:

-   Параметр `bot` обязан содержать ID бота, которому принадлежит [Mini App](/api/bots/webapps/).
-   Параметр `commission_permille` задаёт размер комиссии в промилле: он определяет, какую долю Telegram Stars получает партнёр с каждой транзакции, которую совершают внутри Mini App приглашённые им пользователи.  
    Минимальное и максимальное значения этого параметра заданы параметрами клиентской конфигурации [starref\_min\_commission\_permille](/api/config/#starref-min-commission-permille) и [starref\_max\_commission\_permille](/api/config/#starref-max-commission-permille).
-   Параметр `duration_months` необязателен: он задаёт срок действия партнёрской программы; если он не указан, срок действия не ограничен.

После создания программы и срок действия, и размер комиссии допускается только повышать: чтобы понизить их, программу необходимо сначала прекратить, а затем создать новую.

Чтобы прекратить партнёрскую программу, передайте `0` в `commission_permille`: примерно через 24 часа после вызова метода (а точнее, ровно в момент, указанный в [userFull](/constructor/userFull/).`starref_program`.`end_date`) программа будет прекращена, а все [созданные партнёрские ссылки](#becoming-an-affiliate) станут недействительными.  
Новую партнёрскую программу можно создать только после прекращения текущей (то есть после [userFull](/constructor/userFull/).`starref_program`.`end_date`); вызов метода до наступления end\_date вернёт RPC-ошибку `STARREF_AWAITING_END`.  
Учтите, что после прекращения программы партнёры сохраняют все комиссии, заработанные до этого момента. Более того, покупки, которые в дальнейшем совершат пользователи, приглашённые партнёрами, успевшими присоединиться к программе, пока она была активна, продолжат приносить этим партнёрам комиссию, пока не истечёт назначенный им при подключении срок её начисления.

Если у бота есть активная партнёрская программа, будет установлен флаг [userFull](/constructor/userFull/).`starref_program`, содержащий сведения о партнёрской программе.  
Mini App, владельцы каналов и обычные пользователи могут присоединиться к партнёрской программе так, как описано [здесь »](#becoming-an-affiliate).

### Как стать партнёром

```
starsAmount#bbb6b4a3 amount:long nanos:int = StarsAmount;
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;

userFull#6cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;

connectedBotStarRef#19a13f71 flags:# revoked:flags.1?true url:string date:int bot_id:long commission_permille:int duration_months:flags.0?int participants:long revenue:long = ConnectedBotStarRef;

payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;

---functions---

payments.getSuggestedStarRefBots#0d6b48f7 flags:# order_by_revenue:flags.0?true order_by_date:flags.1?true peer:InputPeer offset:string limit:int = payments.SuggestedStarRefBots;

payments.connectStarRefBot#7ed5348a peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;

payments.getConnectedStarRefBots#5869a553 flags:# peer:InputPeer offset_date:flags.2?int offset_link:flags.2?string limit:int = payments.ConnectedStarRefBots;
payments.getConnectedStarRefBot#b7d998f0 peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;

payments.editConnectedStarRefBot#e4fca4a3 flags:# revoked:flags.0?true peer:InputPeer link:string = payments.ConnectedStarRefBots;
```

У [Mini App](/api/bots/webapps/) с установленным флагом [userFull](/constructor/userFull/).`starref_program` есть партнёрские программы, к которым пользователь может присоединиться, став партнёром.  
Партнёр получает комиссию в размере [starRefProgram](/constructor/starRefProgram/).`commission_permille`‰ [Telegram Stars](/api/stars/) с каждой транзакции в Mini App, которую совершают приглашённые им пользователи, в течение `duration_months` месяцев с того момента, как кто-либо перешёл по его реферальной ссылке; ожидаемый доход составляет `daily_revenue_per_user * commission_permille / 1000` звёзд в день на каждого приглашённого пользователя.

Получить список рекомендованных [Mini App](/api/bots/webapps/) с доступными партнёрскими программами пользователи могут с помощью [payments.getSuggestedStarRefBots](/method/payments.getSuggestedStarRefBots/).

[@term:peer] Чтобы стать партнёром, вызовите [payments.connectStarRefBot](/method/payments.connectStarRefBot/), передав в `bot` идентификатор Mini App, с которым мы хотим установить партнёрство, а в `peer` — партнёрский пир (`peer` — адресат: пользователь, бот или канал), а именно один из следующих:

-   Текущий пользователь ([inputPeerSelf](/constructor/inputPeerSelf/))
-   Принадлежащий нам бот (один из ботов, возвращаемых методом [bots.getAdminedBots](/method/bots.getAdminedBots/))
-   Принадлежащий нам канал (один из каналов, возвращаемых методом [channels.getAdminedPublicChannels](/method/channels.getAdminedPublicChannels/); локально нужно оставить только те [каналы](/constructor/channel/), у которых есть [право администратора](/api/rights/) `post_messages`)

В результате будет создана [реферальная ссылка](/api/links/#referral-links) для Mini App, переданного в `bot`: ссылка содержится в поле `url` возвращаемого конструктора [connectedBotStarRef](/constructor/connectedBotStarRef/).

Затем этими ссылками можно делиться (ответственно): любой пользователь Telegram, впервые запустивший Mini App после перехода по реферальной ссылке, считается успешно приглашённым — и все его покупки за Telegram Stars внутри Mini App принесут нам комиссию (как описано выше), а [Stars](/api/stars/) будут зачислены на звёздный баланс партнёра, переданного в `peer`.

Метод [payments.getConnectedStarRefBots](/method/payments.getConnectedStarRefBots/) возвращает все партнёрства, созданные нами для заданного партнёра `peer`.  
Метод [payments.getConnectedStarRefBot](/method/payments.getConnectedStarRefBot/) возвращает сведения о конкретном партнёрстве, созданном нами для заданного партнёра `peer` с заданным `bot`.  
Метод [payments.editConnectedStarRefBot](/method/payments.editConnectedStarRefBot/) отзывает партнёрство для конкретного партнёра `peer`, аннулируя указанную [реферальную ссылку »](/api/links/#referral-links) ([connectedBotStarRef](/constructor/connectedBotStarRef/).`url`).

Учтите, что все элементы интерфейса, позволяющие пользователю присоединяться к партнёрским программам и становиться партнёром, обязаны быть скрыты и отключены, если [параметр клиентской конфигурации `starref_connect_allowed` »](/api/config/#starref-connect-allowed) задан и равен false.

### Обработка реферальной ссылки

```
---functions---

contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
```

При нажатии на [реферальную ссылку »](/api/links/#referral-links), созданную пользователем, каналом или Mini App, ставшими партнёрами [так, как описано здесь »](#becoming-an-affiliate), параметр `referrer` обязан передаваться в параметр `referer` метода [contacts.resolveUsername](/method/contacts.resolveUsername/).

При открытии [реферальных ссылок »](/api/links/#referral-links) метод [contacts.resolveUsername](/method/contacts.resolveUsername/) обязан вызываться **всегда**, даже если у клиента уже есть закешированный [Peer](/type/Peer/) для соответствующего `username`.

Если метод возвращает RPC-ошибку `STARREF_EXPIRED`, клиент обязан показать пользователю сообщение о том, что переданная реферальная ссылка недействительна.
