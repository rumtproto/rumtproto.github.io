---
title: "Telegram Business"
original: "https://core.telegram.org/api/business"
section: api
description: "Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к бизнес-возможностям: часам работы, местоположению, быстрым ответам, автоматическим…"
layout: layout.njk
---

# Telegram Business

Пользователи могут превратить свою учётную запись Telegram в **бизнес-аккаунт** и получить доступ к бизнес-возможностям: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и многому другому.

Все возможности Telegram Business бесплатно доступны подписчикам [Premium »](/api/premium/).

Кроме того, [подключённые боты »](/api/bots/connected-business-bots/) доступны и пользователям без подписки Premium.

### Часы работы

```
timezone#ff9289f5 id:string name:string utc_offset:int = Timezone;

help.timezonesListNotModified#970708cc = help.TimezonesList;
help.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;


businessWeeklyOpen#120b1ab9 start_minute:int end_minute:int = BusinessWeeklyOpen;

businessWorkHours#8c92b098 flags:# open_now:flags.0?true timezone_id:string weekly_open:Vector<BusinessWeeklyOpen> = BusinessWorkHours;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

account.updateBusinessWorkHours#4b00e066 flags:# business_work_hours:flags.0?BusinessWorkHours = Bool;

help.getTimezonesList#49b30240 hash:int = help.TimezonesList;
```

Бизнес-аккаунты могут указывать часы работы; эта информация содержится в поле [userFull](/constructor/userFull/).`business_work_hours`.  
Чтобы задать её, используйте [account.updateBusinessWorkHours](/method/account.updateBusinessWorkHours/), передав конструктор [businessWorkHours](/constructor/businessWorkHours/) со следующими полями:

-   `weekly_open` — список интервалов времени (не более 28), представленных конструктором [businessWeeklyOpen](/constructor/businessWeeklyOpen/) и задающих часы работы.  
    Интервалы времени в полях [businessWeeklyOpen](/constructor/businessWeeklyOpen/).`start/end_minute` указываются в минутах от начала недели.  
    Например, `61` — это `понедельник 01:01`, но для `end_minute` это же время может быть записано и как `7*24*60+61` (см. ниже).

    При изменении этих значений клиенту следует проверить их, выполнив следующие действия (именно в указанном порядке):

    -   Отсортировать интервалы по `start_minute` перед отправкой — это заодно упрощает проверку на стороне клиента.

    -   Удалить все интервалы, которые не удовлетворяют следующим условиям:

        -   `end_minute - start_minute` обязан быть `>= 1`
        -   `start_minute` обязан лежать в диапазоне от `0` до `7*24*60` включительно
        -   `end_minute` обязан лежать в диапазоне от `1` до `8*24*60` включительно (`8`, а не `7`, потому что это позволяет задавать интервалы, которые, например, начинаются в `воскресенье 21:00` и заканчиваются в `понедельник 04:00` (от `6*24*60+21*60` до `7*24*60+4*60`), не нарушая первое условие)
    -   Пересекающиеся интервалы, а также интервалы, которые начинаются и заканчиваются в одну и ту же минуту суток, перед отправкой обязаны быть объединены в один интервал, например:

        -   `понедельник 00:00–понедельник 00:01` и `понедельник 00:01–понедельник 00:10` => `понедельник 00:00–понедельник 00:10`
        -   `понедельник 00:00–понедельник 00:05` и `понедельник 00:01–понедельник 00:10` => `понедельник 00:00–понедельник 00:10`
        -   `понедельник 00:00–понедельник 01:00` и `понедельник 00:01–понедельник 00:10` => `понедельник 00:00–понедельник 01:00`
        -   `воскресенье 16:00–понедельник 01:00` и `понедельник 01:00–понедельник 03:00` => `воскресенье 16:00–понедельник 03:00`

        Обратите внимание: в последнем примере первый интервал заканчивался на `7*60*24+60`, а второй начинался на `60`, и всё же они были объединены (то есть все интервалы обязаны сверяться по модулю `7*24*60`).

        Существует особый случай, когда два таких пересекающихся или смежных интервала всё же обязаны дать два отдельных интервала вместо одного, а именно когда:

        -   Минута начала исходного первого интервала `<= 7*24*60`
        -   И минута окончания исходного второго интервала `>= 1*24*60`.

        Этот особый случай нельзя свести к одному интервалу, поскольку итоговое значение `end_minute` оказалось бы `>= 8*24*60`.  
        Поэтому результат объединения при таком пересечении — два интервала: первый заканчивается на `7*24*60`, второй начинается с `0`; первый интервал разбивается, даже если изначально он охватывал двое суток и более, включая воскресенье и понедельник.

        Примеры:

        -   `воскресенье 16:00–понедельник 01:00` и `понедельник 00:30–четверг 03:00` => `воскресенье 16:00–воскресенье 23:59` и `понедельник 00:00–четверг 03:00`
        -   `воскресенье 16:00–понедельник 01:00` и `понедельник 01:00–четверг 03:00` => `воскресенье 16:00–воскресенье 23:59` и `понедельник 00:00–четверг 03:00`
    -   Если `end_minute - start_minute` больше `7*24*60`, полю `end_minute` обязательно присваивается значение `start_minute + 7*24*60` (интервалов длиннее одной недели быть не должно).

    -   Рекурсивно повторять два последних шага, пока они не перестанут что-либо менять.

-   `timezone_id` — идентификатор одного из часовых поясов, возвращаемых методом [help.getTimezonesList](/method/help.getTimezonesList/).  
    Идентификатор часового пояса содержится в поле [timezone](/constructor/timezone/).`id`, понятное человеку локализованное название пояса доступно в поле [timezone](/constructor/timezone/).`name`, а поле [timezone](/constructor/timezone/).`utc_offset` содержит смещение от UTC в секундах, которое клиент может показывать в формате чч:мм рядом с названием (то есть `$name UTC -01:00`).
-   `open_now` — игнорируется, если передано клиентом; заполняется только сервером в поле [userFull](/constructor/userFull/).`business_work_hours` и показывает, открыт ли бизнес прямо сейчас, исходя из текущего времени и значений `weekly_open` и `timezone`.

Изменение часов работы порождает обновление [updateUser](/constructor/updateUser/).

Чтобы полностью удалить сведения о часах работы, вызовите [account.updateBusinessWorkHours](/method/account.updateBusinessWorkHours/), не заполняя флаг `business_work_hours`.

### Местоположение

```
businessLocation#ac5c1af7 flags:# geo_point:flags.0?GeoPoint address:string = BusinessLocation;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

account.updateBusinessLocation#9e6b131a flags:# geo_point:flags.1?InputGeoPoint address:flags.0?string = Bool;
```

Бизнес-аккаунты могут указывать своё местоположение с помощью [account.updateBusinessLocation](/method/account.updateBusinessLocation/); затем эта информация возвращается пользователям в поле [userFull](/constructor/userFull/).`business_location`.

Метод принимает два параметра:

-   `address` — обязателен при установке или изменении местоположения, содержит текстовое описание адреса (не более 96 символов UTF-8).
-   `geo_point` — необязателен, содержит набор географических координат.

Чтобы удалить сведения о местоположении бизнеса, вызовите метод, не заполняя ни один из параметров.

Если задано поле `geo_point`, местоположение бизнеса будет также показываться географически близким пользователям через функцию поиска людей рядом, [как описано здесь »](/api/nearby/#fetching-nearby-users-and-geogroups).

Обратите внимание: даже если задан только `address` (с полем `geo_point` или без него), текущее геоположение пользователя нельзя изменить методом [contacts.getLocated](/method/contacts.getLocated/) (то есть для [функции поиска людей рядом](/api/nearby/#advertising-our-current-location)): он вернёт ошибку `BUSINESS_ADDRESS_ACTIVE`, означающую, что местоположение можно изменить (или удалить) только через [account.updateBusinessLocation »](/method/account.updateBusinessLocation/).

Изменение местоположения порождает обновление [updateUser](/constructor/updateUser/).

### Шаблоны быстрых ответов

Telegram Business позволяет создавать **быстрые ответы**.  
Быстрые ответы — это шаблоны для отправки заранее подготовленных сообщений; такой шаблон может содержать несколько сообщений и поддерживает форматирование текста, ссылки, стикеры, медиафайлы и файлы.

Шаблон быстрого ответа имеет имя (показывается пользователю), числовой идентификатор и набор связанных с ним сообщений [message](/constructor/message/).

#### Получение существующих шаблонов быстрых ответов

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

quickReply#0697102b shortcut_id:int shortcut:string top_message:int count:int = QuickReply;

messages.quickReplies#c68d6695 quick_replies:Vector<QuickReply> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.QuickReplies;
messages.quickRepliesNotModified#5f91eb5b = messages.QuickReplies;

---functions---

messages.getQuickReplies#d483f2a8 hash:long = messages.QuickReplies;
messages.getQuickReplyMessages#94a495c3 flags:# shortcut_id:int id:flags.0?Vector<int> hash:long = messages.Messages;
```

Чтобы получить базовую информацию обо всех существующих быстрых ответах, используйте [messages.getQuickReplies](/method/messages.getQuickReplies/).

Метод возвращает идентификатор и имя каждого быстрого ответа, количество сообщений в нём, а также идентификатор (только) последнего сообщения каждого быстрого ответа — вместе с самим сообщением в `messages`.

[@term:hash] Обратите внимание, что `hash` (хеш выборки — контрольное значение для кеширования на стороне клиента) вычисляется **не** по идентификаторам сообщений, а по следующему набору целых чисел, который передаётся в [обычный алгоритм хеширования](/api/offsets/#hash-generation).

```
vector<uint64> hash_ints = [];
foreach (quick_replies as quick_reply) {
  hash_ints.append((uint64) quick_reply.shortcut_id);
  hash_ints.append((uint64) hexdec(substr(md5(quick_reply.shortcut), 0, 16)));
  hash_ints.append((uint64) quick_reply.top_message);
  hash_ints.append((uint64) (top_message.edit_date || 0));
}
```

Метод вернёт [messages.quickRepliesNotModified](/constructor/messages.quickRepliesNotModified/), если переданный хеш совпадает с хешем на стороне сервера: это значит, что порядок, имена и последние сообщения быстрых ответов не изменились.

Правка какого-либо промежуточного сообщения в быстром ответе хеш не меняет — именно поэтому для получения сообщений быстрого ответа (части или всех сразу) следует использовать [messages.getQuickReplyMessages](/method/messages.getQuickReplyMessages/); его хеш вычисляется так:

```
vector<uint64> hash_ints = [];
foreach (messages as message) {
  hash_ints.append((uint64) message.id);
  hash_ints.append((uint64) message.edit_date || 0);
}
```

Полученный список целых чисел затем нужно передать в [обычный алгоритм хеширования](/api/offsets/#hash-generation).

#### Добавление сообщения в быстрый ответ

```
inputQuickReplyShortcut#24596d41 shortcut:string = InputQuickReplyShortcut;
inputQuickReplyShortcutId#01190cf1 shortcut_id:int = InputQuickReplyShortcut;

message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

quickReply#0697102b shortcut_id:int shortcut:string top_message:int count:int = QuickReply;

updateNewQuickReply#f53da717 quick_reply:QuickReply = Update;
updateQuickReplyMessage#3e050d0f message:Message = Update;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;

messages.checkQuickReplyShortcut#f1d0fbd3 shortcut:string = Bool;
```

[@term:peer] [@term:flags] Чтобы добавить сообщение в быстрый ответ, используйте [messages.sendMessage](/method/messages.sendMessage/), [messages.sendMedia](/method/messages.sendMedia/), [messages.sendMultiMedia](/method/messages.sendMultiMedia/), [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/) или [messages.forwardMessages](/method/messages.forwardMessages/) с `peer=`[inputPeerSelf](/constructor/inputPeerSelf/) — здесь `peer` (пир) обозначает собеседника: пользователя, чат или канал, — заполнив флаг `quick_reply_shortcut` (флаги `flags` — битовая маска, отмечающая, какие необязательные поля конструктора заданы) конструктором типа [InputQuickReplyShortcut](/type/InputQuickReplyShortcut/).

Конструктор [InputQuickReplyShortcut](/type/InputQuickReplyShortcut/) может быть одним из двух:

-   [inputQuickReplyShortcut](/constructor/inputQuickReplyShortcut/) — задаёт имя быстрого ответа (применяется при создании нового);
-   [inputQuickReplyShortcutId](/constructor/inputQuickReplyShortcutId/) — задаёт идентификатор быстрого ответа (применяется при изменении существующего).

Если указанного быстрого ответа не существует, он будет создан при вызове перечисленных выше методов, и всем авторизованным сессиям дополнительно придёт [updateNewQuickReply](/constructor/updateNewQuickReply/).

Числовой идентификатор быстрого ответа (только что созданного или уже существовавшего) содержится в поле `quick_reply_shortcut_id` сообщений [message](/constructor/message/), которые приходят в обновлениях [updateQuickReplyMessage](/constructor/updateQuickReplyMessage/), возвращаемых перечисленными выше методами.  
У возвращаемых сообщений общая последовательность значений `id`, никак не связанная с другими последовательностями идентификаторов сообщений в API.

[@term:appConfig] Создать можно не более [appConfig.`quick_replies_limit`](/api/config/#quick-replies-limit) быстрых ответов (`appConfig` — набор серверных параметров, управляющих поведением клиента), иначе перечисленные выше методы вернут ошибку `400 QUICK_REPLIES_TOO_MUCH`.

Каждый быстрый ответ может содержать не более [appConfig.`quick_reply_messages_limit`](/api/config/#quick-reply-messages-limit) сообщений, иначе перечисленные выше методы вернут ошибку `400 REPLY_MESSAGES_TOO_MUCH`.

Прежде чем предлагать пользователю добавить сообщение в быстрый ответ, обязательно вызовите [messages.checkQuickReplyShortcut](/method/messages.checkQuickReplyShortcut/), передав имя быстрого ответа, — так вы убедитесь, что ни один из указанных выше лимитов не достигнут.

#### Отправка быстрого ответа

```
---functions---

messages.sendQuickReplyMessages#6c750de1 peer:InputPeer shortcut_id:int id:Vector<int> random_id:Vector<long> = Updates;
```

Чтобы отправить пользователю быстрый ответ, используйте [messages.sendQuickReplyMessages](/method/messages.sendQuickReplyMessages/), передав идентификатор быстрого ответа.

Быстрые ответы могут отправлять только пользователи и только в личных чатах с другими пользователями. Интерфейс выбора быстрых ответов следует делать похожим на интерфейс выбора [команд бота](/api/bots/commands/), используя имя быстрого ответа вместо имени команды.

В поле `id` можно указать подмножество сообщений, чтобы отправить лишь часть сообщений быстрого ответа (если поле пустое, по умолчанию отправляются все).

#### Изменение сообщения в быстром ответе

```
updateQuickReplyMessage#3e050d0f message:Message = Update;

---functions---

messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

Чтобы изменить сообщение в быстром ответе, используйте [messages.editMessage](/method/messages.editMessage/), передав идентификатор сообщения в `id`, а идентификатор быстрого ответа — в `quick_reply_shortcut_id`.

В результате будет отправлено обновление [updateQuickReplyMessage](/constructor/updateQuickReplyMessage/).

#### Удаление сообщения из быстрого ответа

```
updateDeleteQuickReplyMessages#566fe7cd shortcut_id:int messages:Vector<int> = Update;

---functions---

messages.deleteQuickReplyMessages#e105e910 shortcut_id:int id:Vector<int> = Updates;
```

Чтобы удалить одно или несколько сообщений из быстрого ответа, используйте [messages.deleteQuickReplyMessages](/method/messages.deleteQuickReplyMessages/), передав идентификатор быстрого ответа и список идентификаторов удаляемых сообщений.  
При этом будет отправлено обновление [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/).

#### Переименование быстрого ответа

```
updateQuickReplies#f9470ab2 quick_replies:Vector<QuickReply> = Update;

---functions---

messages.editQuickReplyShortcut#5c003cef shortcut_id:int shortcut:string = Bool;
```

Чтобы переименовать быстрый ответ, используйте [messages.editQuickReplyShortcut](/method/messages.editQuickReplyShortcut/).  
В результате остальным авторизованным сессиям будет отправлено обновление [updateQuickReplies](/constructor/updateQuickReplies/).

#### Изменение порядка быстрых ответов

```
updateQuickReplies#f9470ab2 quick_replies:Vector<QuickReply> = Update;

---functions---

messages.reorderQuickReplies#60331907 order:Vector<int> = Bool;
```

Чтобы изменить порядок быстрых ответов (именно их самих, а не сообщений внутри них), используйте [messages.reorderQuickReplies](/method/messages.reorderQuickReplies/); передайте в `order` идентификаторы всех созданных быстрых ответов в нужном порядке.  
В результате остальным авторизованным сессиям будет отправлено обновление [updateQuickReplies](/constructor/updateQuickReplies/).

#### Удаление быстрого ответа

```
updateDeleteQuickReply#53e6f1ec shortcut_id:int = Update;

---functions---

messages.deleteQuickReplyShortcut#3cc04740 shortcut_id:int = Bool;
```

Чтобы полностью удалить быстрый ответ, используйте [messages.deleteQuickReplyShortcut](/method/messages.deleteQuickReplyShortcut/).  
При этом остальным авторизованным сессиям будет отправлено обновление [updateDeleteQuickReply](/constructor/updateDeleteQuickReply/) (и _ни одного_ обновления [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/), даже если этот метод заодно удаляет все сообщения быстрого ответа).

### Приветственные сообщения

```
inputBusinessRecipients#6f8b32aa flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> = InputBusinessRecipients;

inputBusinessGreetingMessage#0194cb3b shortcut_id:int recipients:InputBusinessRecipients no_activity_days:int = InputBusinessGreetingMessage;

businessRecipients#21108ff7 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> = BusinessRecipients;

businessGreetingMessage#e519abab shortcut_id:int recipients:BusinessRecipients no_activity_days:int = BusinessGreetingMessage;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

account.updateBusinessGreetingMessage#66cdafc4 flags:# message:flags.0?InputBusinessGreetingMessage = Bool;
```

Telegram Business позволяет настроить набор приветственных сообщений, которые автоматически отправляются новым пользователям, впервые написавшим нам в личные сообщения, либо написавшим после определённого периода неактивности.

Чтобы задать приветственное сообщение (или их список), передайте его в поле `message` метода [account.updateBusinessGreetingMessage](/method/account.updateBusinessGreetingMessage/); чтобы отключить приветствия, вызовите метод, не заполняя поле `message`.

Если поле `message` заполнено, оно обязано содержать [inputBusinessGreetingMessage](/constructor/inputBusinessGreetingMessage/); описание его содержимого, а также ограничения на длину заголовка и описания приветствия см. на [странице конструктора »](/constructor/inputBusinessGreetingMessage/).

Текущее настроенное приветствие Telegram Business доступно текущему пользователю через поле [userFull](/constructor/userFull/).`business_greeting_message`, представленное [конструктором businessGreetingMessage »](/constructor/businessGreetingMessage/) — аналогом входного конструктора.

### Сообщения об отсутствии

```
inputBusinessRecipients#6f8b32aa flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> = InputBusinessRecipients;

businessAwayMessageScheduleAlways#c9b9e2b9 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleOutsideWorkHours#c3f2f501 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleCustom#cc4d9ecc start_date:int end_date:int = BusinessAwayMessageSchedule;

inputBusinessAwayMessage#832175e0 flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:InputBusinessRecipients = InputBusinessAwayMessage;

businessRecipients#21108ff7 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> = BusinessRecipients;

businessAwayMessage#ef156a5c flags:# offline_only:flags.0?true shortcut_id:int schedule:BusinessAwayMessageSchedule recipients:BusinessRecipients = BusinessAwayMessage;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

account.updateBusinessAwayMessage#a26a7fa5 flags:# message:flags.0?InputBusinessAwayMessage = Bool;
```

Telegram Business позволяет настроить набор сообщений «в отсутствие», которые автоматически отправляются пользователям, пишущим нам, когда мы не в сети, в нерабочие часы, во время отпуска или в любой другой заданный промежуток времени, когда мы не можем ответить пользователю сразу.

Чтобы задать сообщение (или список сообщений) в отсутствие, укажите его в поле `message` метода [account.updateBusinessAwayMessage](/method/account.updateBusinessAwayMessage/); чтобы отключить приветствия, вызовите метод, не заполняя поле `message`.

[@note] В оригинале в этом абзаце сказано «чтобы отключить приветствия» — по всей видимости, формулировка скопирована из раздела о приветственных сообщениях. Речь здесь идёт об отключении сообщений в отсутствие.

Если поле `message` заполнено, оно обязано содержать [inputBusinessAwayMessage](/constructor/inputBusinessAwayMessage/); описание его содержимого приведено на [странице конструктора »](/constructor/inputBusinessAwayMessage/).

Текущее настроенное бизнес-сообщение в отсутствие пользователь может получить через поле [userFull](/constructor/userFull/).`business_away_message`, представленное [конструктором businessAwayMessage »](/constructor/businessAwayMessage/), который аналогичен своему входному варианту.

### Бизнес-представление

```
inputBusinessIntro#09c469cd flags:# title:string description:string sticker:flags.0?InputDocument = InputBusinessIntro;

businessIntro#5a0a066d flags:# title:string description:string sticker:flags.0?Document = BusinessIntro;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

account.updateBusinessIntro#a614d034 flags:# intro:flags.0?InputBusinessIntro = Bool;
```

Telegram Business позволяет настроить сообщение и стикер [представления в профиле »](/api/profile/#introduction), которое показывается новым пользователям, у которых ещё нет с нами личного чата.

Чтобы задать собственное бизнес-представление, используйте [account.updateBusinessIntro](/method/account.updateBusinessIntro/); вызов того же метода без установки флага `intro` удаляет собственное бизнес-представление и возвращает случайно выбранные сообщение и стикер по умолчанию (подробнее о представлениях в профиле по умолчанию см. [здесь »](/api/profile/)).

Изменение бизнес-представления порождает [updateUser](/constructor/updateUser/), а само бизнес-представление содержится в поле [userFull](/constructor/userFull/).`intro`.

[@note] В схеме выше это поле называется `business_intro` (`business_intro:flags2.4?BusinessIntro`); написание `intro` взято из оригинала как есть.

Учтите, что интерфейс выбора приветственного стикера должен предлагать список категорий для быстрой фильтрации результатов по эмодзи (или по набору эмодзи) либо по каким-то иным признакам — подробнее см. [здесь »](/api/emoji-categories/).

### Ссылки на бизнес-чат

```
inputBusinessChatLink#11679fa7 flags:# message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string = InputBusinessChatLink;

businessChatLink#b4ae666f flags:# link:string message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string views:int = BusinessChatLink;

account.businessChatLinks#ec43a2d1 links:Vector<BusinessChatLink> chats:Vector<Chat> users:Vector<User> = account.BusinessChatLinks;

account.resolvedBusinessChatLinks#9a23af21 flags:# peer:Peer message:string entities:flags.0?Vector<MessageEntity> chats:Vector<Chat> users:Vector<User> = account.ResolvedBusinessChatLinks;

---functions---

account.createBusinessChatLink#8851e68e link:InputBusinessChatLink = BusinessChatLink;
account.getBusinessChatLinks#6f70dde1 = account.BusinessChatLinks;
account.editBusinessChatLink#8c3410af slug:string link:InputBusinessChatLink = BusinessChatLink;
account.deleteBusinessChatLink#60073674 slug:string = Bool;

account.resolveBusinessChatLink#5492e5ee slug:string = account.ResolvedBusinessChatLinks;
```

[@term:deep link] [Глубокие ссылки на бизнес-чат](/api/links/#business-chat-links) (`deep link` — ссылка, открывающая приложение сразу в нужном месте) позволяют владельцам бизнес-аккаунтов делиться готовыми ссылками на свой бизнес-аккаунт в Telegram и при желании заранее заполнять поле ввода сообщения подготовленным текстом (с поддержкой [оформления текста сущностями »](/api/entities/)).

[@term:slug] Никаких дополнительных ограничений на длину подготовленного сообщения (кроме обычного [message\_length\_max](/constructor/config/)) нет, поскольку текст сообщения _не_ передаётся в строке запроса URL, а запрашивается с сервера по `slug` — краткому идентификатору, которым оканчивается сама ссылка; кроме того, у каждой созданной глубокой ссылки на бизнес-чат есть счётчик просмотров.

Чтобы создать ссылку на бизнес-чат, используйте [account.createBusinessChatLink](/method/account.createBusinessChatLink/), указав в [inputBusinessChatLink](/constructor/inputBusinessChatLink/) сообщение, которым будет заполнено поле ввода при открытии ссылки, а также понятное человеку название ссылки в `title` — оно удобно при управлении созданными ссылками.  
Созданная [глубокая ссылка](/api/links/#business-chat-links) возвращается в поле `link`; ею можно поделиться напрямую или в виде QR-кода.

Чтобы получить сведения обо всех созданных ссылках на бизнес-чат — включая счётчик просмотров, показывающий, сколько раз пользователи открывали ссылку: переходили по ней или сканировали её, — используйте [account.getBusinessChatLinks](/method/account.getBusinessChatLinks/).

Чтобы изменить сведения о ссылке на бизнес-чат, используйте [account.editBusinessChatLink](/method/account.editBusinessChatLink/).

Чтобы удалить ссылку на бизнес-чат, используйте [account.deleteBusinessChatLink](/method/account.deleteBusinessChatLink/).

Чтобы открыть ссылку на бизнес-чат, используйте [account.resolveBusinessChatLink](/method/account.resolveBusinessChatLink/): метод возвращает пир (`peer`), с которым нужно связаться, и — если он задан — текст для предварительного заполнения поля ввода, а заодно увеличивает счётчик просмотров ссылки.

Последние три из перечисленных выше методов принимают краткий идентификатор ссылки на бизнес-чат (`slug`), который следует извлечь из самой ссылки так, как описано [здесь »](/api/links/#business-chat-links).

Все перечисленные методы, кроме [account.resolveBusinessChatLink](/method/account.resolveBusinessChatLink/), требуют подписки Telegram Business (сейчас она входит в подписку [Telegram Premium](/api/premium/)).

Один аккаунт может создать не более [business\_chat\_links\_limit](/api/config/#business-chat-links-limit) ссылок на бизнес-чат: при попытке превысить этот предел возвращается RPC-ошибка `CHATLINKS_TOO_MUCH`, предлагающая пользователю удалить старые ссылки.

### Подключённые боты

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них **от имени пользователя**. Это позволяет **без лишних усилий встроить** любые уже используемые инструменты и рабочие процессы, а также добавить **ИИ-ассистентов**, которые ведут его чаты.

Полная документация о бизнес-ботах, подключённых к бизнес-аккаунтам пользователей, находится [здесь »](/api/bots/connected-business-bots/).

### Повторное включение рекламы

```
userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

account.toggleSponsoredMessages#b9d9a38d enabled:Bool = Bool;
```

Дело в том, что Telegram Business сейчас входит в подписку [Telegram Premium](/api/premium/), а подписчики Telegram Premium не видят [рекламные сообщения в каналах](/api/sponsored-messages/).

Для владельцев бизнеса это может оказаться неудобным: им может понадобиться запускать и просматривать собственную рекламу через [рекламную платформу Telegram »](https://ads.telegram.org).

Поэтому на странице настроек Telegram Business должен быть переключатель, повторно включающий рекламу Telegram для текущего аккаунта; при его переключении следует вызывать [account.toggleSponsoredMessages](/method/account.toggleSponsoredMessages/).

Текущее значение переключателя хранится в поле [userFull](/constructor/userFull/).`sponsored_enabled`.

### Теги папок

Пользователи Telegram Business могут пользоваться тегами папок — подробнее [см. здесь »](/api/folders/#folder-tags).

### Промостраница возможностей Telegram Business

Telegram Business предлагает набор дополнительных возможностей и повышенные лимиты: клиенту следует отслеживать текущее состояние подписки, чтобы соответственно менять своё поведение.

```
---functions---

help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

Клиенту следует показывать в настройках кнопку Telegram Business.  
Нажатие на эту кнопку в настройках должно открывать модальное окно Telegram Business.

Метод [help.getAppConfig](/method/help.getAppConfig/) позволяет получить сведения о том, как построить модальное окно Telegram Business: он возвращает список идентификаторов бизнес-возможностей в [поле `business_promo_order` конфигурации `appConfig`](/api/config/#business-promo-order). Модальное окно должно содержать по строке на каждую возвращённую возможность, в том порядке, в каком они перечислены в массиве.

Возможные идентификаторы возможностей:

#### `business_location`

Бизнес-пользователи могут указать [местоположение](#location)

#### `business_hours`

Бизнес-пользователи могут указать [часы работы](#opening-hours)

#### `quick_replies`

Бизнес-пользователи могут создавать и использовать [быстрые ответы](#quick-reply-shortcuts)

#### `greeting_message`

Бизнес-пользователи могут задать [приветственное сообщение](#greeting-messages)

#### `away_message`

Бизнес-пользователи могут задать [сообщение об отсутствии](#away-messages)

#### `business_links`

Бизнес-пользователи могут создавать [ссылки на бизнес-чат](#business-chat-links)

#### `business_intro`

Бизнес-пользователи могут задать собственное [бизнес-представление](#business-introduction)

#### `business_bots`

Пользователи могут [подключать бизнес-ботов к своему аккаунту »](/api/bots/connected-business-bots/)

#### `emoji_status`

Бизнес-пользователи могут установить [собственный эмодзи-статус](/api/emoji-status/).

#### `folder_tags`

Бизнес-пользователи могут включить [теги папок](/api/folders/#folder-tags).

#### `stories`

Бизнес-пользователи могут использовать [истории](/api/stories/) для демонстрации товаров (то есть клиенту не нужно реализовывать никакой дополнительной функциональности — это просто ещё один способ применения историй).
