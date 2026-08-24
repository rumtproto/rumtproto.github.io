---
title: "Telegram Premium"
original: "https://core.telegram.org/api/premium"
section: api
description: "Telegram Premium — необязательная подписка, которая открывает доступ к дополнительным эксклюзивным возможностям как на стороне клиента, так и на стороне API, и вместе с тем…"
layout: layout.njk
---

# Telegram Premium

Telegram Premium — необязательная подписка, которая открывает доступ к дополнительным эксклюзивным возможностям как на стороне клиента, так и на стороне API, и вместе с тем помогает поддерживать разработку приложения. Она — часть **устойчивой модели монетизации** Telegram, которую обеспечивают сами пользователи, а не рекламодатели или акционеры. Благодаря этому Telegram может оставаться независимым и ставить интересы пользователей на первое место.

> Эта страница описывает, как клиентским приложениям следует работать с возможностями Premium; понятный обзор возможностей Telegram Premium для пользователя приведён в [FAQ по Telegram Premium](https://telegram.org/faq_premium).

### Пользователи Telegram Premium

```
inputUserSelf#f7c1b13f = InputUser;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

help.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;

---functions---

users.getUsers#0d91a548 id:Vector<InputUser> = Vector<User>;
help.getPremiumPromo#b81b93d4 = help.PremiumPromo;
```

У Premium-пользователей выставлен флаг `premium` в конструкторе [user](/constructor/user/).

Чтобы получить сведения о текущем статусе подписки текущего пользователя, вызовите [users.getUsers](/method/users.getUsers/) с [inputUserSelf](/constructor/inputUserSelf/).  
Можно также сразу воспользоваться методом [help.getPremiumPromo](/method/help.getPremiumPromo/): он вернёт информацию о текущем пользователе в поле `users`.

### Возможности Telegram Premium

Telegram Premium даёт набор дополнительных возможностей и повышенные лимиты: клиентам следует отслеживать текущий статус подписки, чтобы соответствующим образом менять своё поведение.

#### Промостраница

```
help.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;

---functions---

help.getPremiumPromo#b81b93d4 = help.PremiumPromo;
help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

Конструктор [help.premiumPromo](/constructor/help.premiumPromo/), возвращаемый методом [help.getPremiumPromo](/method/help.getPremiumPromo/), содержит разнообразные сведения о подписке — они описаны на [странице конструктора](/constructor/help.premiumPromo/).

Клиентам следует показывать в настройках кнопку Telegram Premium.  
Нажатие на эту кнопку в настройках, нажатие на [значок](#badge) Premium-пользователя или достижение одного из перечисленных ниже Premium-лимитов должно открывать модальное окно Telegram Premium.

Вызовите [help.getPremiumPromo](/method/help.getPremiumPromo/) и [help.getAppConfig](/method/help.getAppConfig/), чтобы получить данные для построения этого модального окна.

Метод [help.getAppConfig](/method/help.getAppConfig/) вернёт список идентификаторов Premium-возможностей в [поле appConfig `premium_promo_order`](/api/config/#premium-promo-order): модальное окно должно содержать по строке на каждую возвращённую возможность, в том порядке, в котором они перечислены в возвращённом массиве.

Эти идентификаторы возможностей обязательно указываются при [оформлении подписки Telegram Premium](#subscribing-to-telegram-premium), если поводом послужило достижение соответствующего лимита.

Возможные идентификаторы возможностей:

##### `stories`

[Telegram Premium](/api/premium/) добавляет ряд возможностей, [связанных с историями](/api/stories/).

У Premium-возможностей, связанных с историями, есть также вложенные идентификаторы; они используются, если пользователь решает [оформить подписку Telegram Premium](/api/premium/#subscribing-to-telegram-premium) после того, как столкнулся с одним из перечисленных ниже ограничений на истории.

Если же пользователь подписывается просто после прочтения промостраницы о возможностях, связанных с историями, передавайте в качестве идентификатора возможности просто `stories`.

Ниже приведён полный список возможностей, связанных с историями, и их вложенных идентификаторов (указаны в заголовках):

###### `stories__priority_order`

Истории, опубликованные Premium-пользователями, показываются пользователям первыми при получении списка активных историй методом [stories.getAllStories »](/method/stories.getAllStories/).

###### `stories__stealth_mode`

Premium-пользователи могут включать [режим невидимки »](/api/stories/#stealth-mode).

###### `stories__permanent_views_history`

Premium-пользователи могут [получать полный список просмотревших историю, даже после её истечения »](/api/stories/#fetching-the-interaction-list)

###### `stories__expiration_durations`

Premium-пользователи могут задавать [произвольный срок жизни при публикации историй »](/api/stories/)

###### `stories__save_stories_to_gallery`

Premium-пользователи могут сохранять незащищённые истории других пользователей.

###### `stories__links_and_formatting`

[@term:message entity] Premium-пользователи могут применять [сущности оформления](/api/entities/) (`message entity` — разметка стилей и ссылок в тексте) и ссылки в подписях к историям и в [медиаобластях со ссылками](/api/stories/#urls), как задано ключом конфигурации [stories\_entities »](/api/config/#stories-entities).

###### `stories__quality`

Premium-пользователи могут смотреть истории в более высоком качестве.

Есть ещё несколько Premium-возможностей, связанных с историями; они перечислены в разделе [лимитов »](#double-limits).

Подробнее об историях см. в [документации по историям »](/api/stories/).

##### `double_limits`

Нажатие на этот пункт должно открывать вторичное всплывающее окно со списком повышенных Premium-лимитов, перечисленных ниже.

У Premium-возможностей, связанных с лимитами, есть также вложенные идентификаторы; они используются, если пользователь решает [оформить подписку Telegram Premium](/api/premium/#subscribing-to-telegram-premium) после того, как столкнулся с одним из перечисленных ниже ограничений.

Если же пользователь подписывается просто после прочтения промостраницы о лимитах, передавайте в качестве идентификатора возможности просто `double_limits`.

Ниже приведён полный список повышенных лимитов и их вложенных идентификаторов (указаны в заголовках):

###### `double_limits__channels`

Ключи конфигурации: [channels\_limit\_premium »](/api/config/#channels-limit-premium)/[channels\_limit\_default »](/api/config/#channels-limit-default)

Максимальное число [каналов и супергрупп](/api/channel/), в которые может вступить пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число)

###### `double_limits__saved_gifs`

Ключи конфигурации: [saved\_gifs\_limit\_premium »](/api/config/#saved-gifs-limit-premium)/[saved\_gifs\_limit\_default »](/api/config/#saved-gifs-limit-default)

Максимальное число GIF-файлов, которые может сохранить пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число)

###### `double_limits__stickers_faved`

Ключи конфигурации: [stickers\_faved\_limit\_premium »](/api/config/#stickers-faved-limit-premium)/[stickers\_faved\_limit\_default »](/api/config/#stickers-faved-limit-default)

Максимальное число стикеров, которые пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) может [добавить в избранное »](/api/stickers/#favorite-stickersets) (целое число)

###### `double_limits__dialog_filters`

Ключи конфигурации: [dialog\_filters\_limit\_premium »](/api/config/#dialog-filters-limit-premium)/[dialog\_filters\_limit\_default »](/api/config/#dialog-filters-limit-default)

Максимальное число [папок](/api/folders/), которые может создать пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число)

###### `double_limits__dialog_filters_chats`

Ключи конфигурации: [dialog\_filters\_chats\_limit\_premium »](/api/config/#dialog-filters-chats-limit-premium)/[dialog\_filters\_chats\_limit\_default »](/api/config/#dialog-filters-chats-limit-default)

Максимальное число чатов, которые пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) может добавить в [папку](/api/folders/) (целое число)

###### `double_limits__dialogs_pinned`

Ключи конфигурации: [dialogs\_pinned\_limit\_premium »](/api/config/#dialogs-pinned-limit-premium)/[dialogs\_pinned\_limit\_default »](/api/config/#dialogs-pinned-limit-default)

Максимальное число чатов, которые может закрепить пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число)

###### `double_limits__dialogs_folder_pinned`

Ключи конфигурации: [dialogs\_folder\_pinned\_limit\_premium »](/api/config/#dialogs-folder-pinned-limit-premium)/[dialogs\_folder\_pinned\_limit\_default »](/api/config/#dialogs-folder-pinned-limit-default)

Максимальное число чатов, которые пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) может закрепить в папке (целое число)

###### `double_limits__channels_public`

Ключи конфигурации: [channels\_public\_limit\_premium »](/api/config/#channels-public-limit-premium)/[channels\_public\_limit\_default »](/api/config/#channels-public-limit-default)

Максимальное число публичных [каналов или супергрупп](/api/channel/), которые может создать пользователь с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число)

###### `double_limits__caption_length`

Ключи конфигурации: [caption\_length\_limit\_premium »](/api/config/#caption-length-limit-premium)/[caption\_length\_limit\_default »](/api/config/#caption-length-limit-default)

Максимальная длина в UTF-8 подписей к медиа, которые могут отправлять пользователи с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число)

###### `double_limits__about_length`

Ключи конфигурации: [about\_length\_limit\_premium »](/api/config/#about-length-limit-premium)/[about\_length\_limit\_default »](/api/config/#about-length-limit-default)

Максимальная длина в UTF-8 описания профиля пользователя с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число)

###### `double_limits__chatlist_invites`

Ключи конфигурации: [chatlist\_invites\_limit\_premium »](/api/config/#chatlist-invites-limit-premium)/[chatlist\_invites\_limit\_default »](/api/config/#chatlist-invites-limit-default)

[@term:deep link] Максимальное число [глубоких ссылок на папку с чатами »](/api/links/#chat-folder-links) (`deep link` — ссылка, открывающая в приложении конкретный объект) в расчёте на одну папку, которое могут создать пользователи с [Premium](/api/premium/) / без [Premium](/api/premium/). (целое число)

###### `double_limits__chatlists_joined`

Ключи конфигурации: [chatlists\_joined\_limit\_premium »](/api/config/#chatlists-joined-limit-premium)/[chatlists\_joined\_limit\_default »](/api/config/#chatlists-joined-limit-default)

Максимальное число [папок, которыми можно делиться](/api/links/#chat-folder-links), доступное пользователям с [Premium](/api/premium/) / без [Premium](/api/premium/). (целое число)

###### `double_limits__story_expiring`

Ключи конфигурации: [story\_expiring\_limit\_premium »](/api/config/#story-expiring-limit-premium)/[story\_expiring\_limit\_default »](/api/config/#story-expiring-limit-default)

Максимальное число активных [историй](/api/stories/) для пользователей с [Premium](/api/premium/) / без [Premium](/api/premium/) (целое число).

###### `double_limits__story_caption_length`

Ключи конфигурации: [story\_caption\_length\_limit\_premium »](/api/config/#story-caption-length-limit-premium)/[story\_caption\_length\_limit\_default »](/api/config/#story-caption-length-limit-default)

Максимальная длина в UTF-8 подписей к историям для пользователей с [Premium](/api/premium/) / без [Premium](/api/premium/). (целое число)

###### `double_limits__stories_sent_weekly`

Ключи конфигурации: [stories\_sent\_weekly\_limit\_premium »](/api/config/#stories-sent-weekly-limit-premium)/[stories\_sent\_weekly\_limit\_default »](/api/config/#stories-sent-weekly-limit-default)

Максимальное число историй, которые пользователи с [Premium](/api/premium/) / без [Premium](/api/premium/) могут опубликовать за неделю. (целое число)

###### `double_limits__stories_sent_monthly`

Ключи конфигурации: [stories\_sent\_monthly\_limit\_premium »](/api/config/#stories-sent-monthly-limit-premium)/[stories\_sent\_monthly\_limit\_default »](/api/config/#stories-sent-monthly-limit-default)

Максимальное число историй, которые пользователи с [Premium](/api/premium/) / без [Premium](/api/premium/) могут опубликовать за месяц. (целое число)

###### `double_limits__stories_suggested_reactions`

Ключи конфигурации: [stories\_suggested\_reactions\_limit\_premium »](/api/config/#stories-suggested-reactions-limit-premium)/[stories\_suggested\_reactions\_limit\_default »](/api/config/#stories-suggested-reactions-limit-default)

Максимальное число [областей медиа с реакциями »](/api/stories/#media-areas), которые пользователи с [Premium](/api/premium/) / без [Premium](/api/premium/) могут добавить к истории. (целое число)

###### `double_limits__recommended_channels`

Ключи конфигурации: [recommended\_channels\_limit\_premium »](/api/config/#recommended-channels-limit-premium)/[recommended\_channels\_limit\_default »](/api/config/#recommended-channels-limit-default)

Максимальное число похожих каналов, которые метод [channels.getChannelRecommendations»](/method/channels.getChannelRecommendations/) может порекомендовать пользователям с [Premium](/api/premium/) / без [Premium](/api/premium/). (целое число)

###### `double_limits__saved_dialogs_pinned`

Ключи конфигурации: [saved\_dialogs\_pinned\_limit\_premium »](/api/config/#saved-dialogs-pinned-limit-premium)/[saved\_dialogs\_pinned\_limit\_default »](/api/config/#saved-dialogs-pinned-limit-default)

Максимальное число закреплённых диалогов в [избранном](/api/saved-messages/) для пользователей с [Premium](/api/premium/) / без [Premium](/api/premium/). (целое число)

###### `double_limits__bots_create`

Ключи конфигурации: [bots\_create\_limit\_default »](/api/config/#bots-create-limit-premium)/[bots\_create\_limit\_premium »](/api/config/#bots-create-limit-default)

Максимальное число [ботов](/api/bots/), которыми могут владеть пользователи с [Premium](/api/premium/) / без [Premium](/api/premium/). (целое число)

[@note] В оригинале в этом пункте ключи перепутаны: подпись `bots_create_limit_default` ведёт на описание ключа `bots_create_limit_premium`, и наоборот. Во всех остальных пунктах первым идёт ключ для подписки; здесь порядок подписей обратный, а сам текст ниже, как обычно, описывает сначала значение для Premium.

###### `double_limits__aicompose_tone_saved`

Ключи конфигурации: [aicompose\_tone\_saved\_limit\_premium »](/api/config/#aicompose-tone-saved-limit-premium)/[aicompose\_tone\_saved\_limit\_default »](/api/config/#aicompose-tone-saved-limit-default)

Максимальное число [пользовательских тональностей ИИ-редактора текста »](/api/ai/#ai-compose-tones), которые могут установить пользователи с [Premium](/api/premium/) / без [Premium](/api/premium/). (целое число)

##### `business`

Пользователям с Premium сейчас доступны [функции Telegram Business »](/api/business/), открываемые подпиской; [подключённые бизнес-боты »](/api/bots/connected-business-bots/) доступны и пользователям без Premium.

##### `last_seen`

Пользователи с Premium видят время последнего посещения и время прочтения сообщений других пользователей даже тогда, когда те не могут видеть время последнего посещения или прочтения текущего пользователя.

##### `message_privacy`

Пользователи с Premium могут запретить приём входящих голосовых и видеосообщений в личных чатах с помощью [inputPrivacyKeyVoiceMessages](/constructor/inputPrivacyKeyVoiceMessages/), а также [ограничить входящие сообщения от пользователей, не входящих в контакты](/api/privacy/#require-premium-for-new-non-contact-users).

##### `more_upload`

Пользователи с Premium могут загружать файлы большего размера — предел задаётся сопоставлением ключей конфигурации [upload\_max\_fileparts\_default](/api/config/#upload-max-fileparts-default) и [upload\_max\_fileparts\_premium](/api/config/#upload-max-fileparts-premium).

##### `faster_download`

Для пользователей с Premium нет ограничений скорости скачивания (то есть при скачивании файлов они не могут получить ошибку `FLOOD_PREMIUM_WAIT_X`, подробнее см. [здесь »](/api/files/)).

##### `wallpapers`

Пользователи с Premium [могут задавать собственные обои чата и для себя, и для собеседника](/api/wallpapers/#installing-wallpapers-in-a-specific-chat-or-channel).

##### `peer_colors`

Пользователи с Premium могут [выбрать собственный цвет и фоновый эмодзи для оформления профиля и сообщений](/api/colors/).

##### `voice_to_text`

Пользователи с Premium могут [расшифровывать голосовые сообщения без ограничений](/api/transcribe/).

##### `translations`

Пользователи с Premium могут включить [перевод чата в реальном времени](/api/translation/).

##### `no_ads`

Пользователи с Premium не видят [рекламных сообщений](/api/sponsored-messages/).

##### `unique_reactions`

Пользователям с Premium доступно больше [реакций на сообщения](/api/reactions/).

##### `premium_stickers`

Пользователям с Premium доступны премиальные [наборы стикеров](/api/stickers/).

##### `animated_emoji`

Пользователи с Premium могут отправлять [анимированные пользовательские эмодзи](/api/custom-emoji/).

##### `advanced_chat_management`

Пользователи с Premium могут [менять положение папки по умолчанию](/api/folders/), автоматически архивировать и скрывать новые чаты с пользователями не из контактов.

##### `profile_badge`

Рядом с именем пользователя с Premium отображается [значок](#badge), показывающий, что он поддерживает Telegram.

##### `animated_userpics`

[Анимированные фотографии профиля](/api/files/#animated-profile-pictures) пользователей с Premium воспроизводятся прямо в чате и при просмотре списка диалогов.

##### `app_icons`

Пользователи с Premium могут изменить значок приложения Telegram, установленный по умолчанию.

##### `infinite_reactions`

Пользователи с Premium могут использовать [пользовательские эмодзи](/api/custom-emoji/) при [реакции на сообщения](/api/reactions/).

##### `emoji_status`

Пользователи с Premium могут установить [эмодзи-статус](/api/emoji-status/).

##### `saved_tags`

Пользователи с Premium могут использовать [теги в избранных сообщениях](/api/saved-messages/#tags).

##### `effects`

Пользователи с Premium могут использовать [эффекты для сообщений](/api/effects/).

##### `channel_boost`

Пользователи с Premium могут [бустить чаты и каналы](/api/boost/).

##### `forum_topic_icon`

Пользователи с Premium могут задать [пользовательский эмодзи](/api/custom-emoji/) в качестве [значка темы форума](/api/forum/)

##### `todo`

Пользователи с Premium могут [публиковать списки задач »](/api/todo/)

##### `paid_messages`

Пользователи с Premium могут [требовать оплату в Telegram Stars за приём сообщений от новых пользователей »](/api/paid-messages/).

##### `pm_noforwards`

Пользователи с Premium могут [включить защиту содержимого в личных чатах »](/api/content-protection/#for-users).

##### `ai_compose`

Пользователям с Premium доступно в **50 раз** больше [преобразований текста с помощью ИИ »](/api/ai/#compose-messages) в день.

#### Значок

Рядом с именем пользователя, у которого есть подписка Telegram Premium (установлено поле [user](/constructor/user/).`premium`), должен отображаться значок Telegram Premium.

#### Анимированные фотографии профиля

[Анимированные фотографии профиля](/api/files/#animated-profile-pictures) пользователей с Premium должны воспроизводиться внутри чатов и в списках диалогов, а не только при открытии страницы профиля.

#### Подсказки стикеров

Логика подбора предлагаемых стикеров для пользователей с Premium немного отличается, [подробнее см. здесь »](/api/stickers/#sticker-suggestions).

### Оформление подписки Telegram Premium

Вот как активировать подписку Telegram Premium, когда пользователь нажимает кнопку оформления:

-   Если задано поле `premium_bot_username`, вызовите [messages.startBot](/method/messages.startBot/), указав следующие параметры:
    -   `peer` и `bot`: бот, указанный в `premium_bot_username`
    -   `start_param`: одно из следующих значений:
        -   Если пользователь нажимает кнопку оформления подписки на промостранице конкретной возможности Premium, передайте [идентификатор возможности](#telegram-premium-features) (или пустую строку, если страница открыта с главной промостраницы).
        -   Если пользователь нажимает кнопку оформления подписки на промостранице конкретной возможности [Telegram Business](/api/business/#business-features-promo-page), передайте [идентификатор возможности](/api/business/#business-features-promo-page) Business (или `business`, если страница открыта с главной промостраницы Business).
        -   Если пользователь нажимает кнопку оформления подписки после того, как достиг лимита, который повышает Telegram Premium, передайте один из [идентификаторов лимитов](#double-limits)
        -   Если пользователь нажимает кнопку оформления подписки после того, как достиг лимита, связанного с [историями](/api/stories/), который повышает Telegram Premium, передайте один из [идентификаторов возможностей для историй](#stories)
        -   Если пользователь нажимает кнопку оформления подписки, перейдя по кнопке Telegram Premium в настройках, передайте `settings`
        -   Если пользователь нажимает кнопку оформления подписки, перейдя по звёздочке Telegram Premium на странице профиля, передайте `profile`
        -   Если пользователь открыл [реферальную ссылку Premium](/api/links/#premium-referrer-links), передайте `deeplink`, если `referrer` пуст, и `deeplink_$referrer`, если не пуст. Затем, когда пользователь нажмёт кнопку оформления подписки в отправленном счёте, следуйте [обычному сценарию оплаты для счетов в сообщениях](/api/payments/).
-   Иначе, если задано поле `premium_invoice_slug`, обработайте платёж так же, как вы обрабатывали бы [глубокую ссылку на счёт](/api/links/#invoice-links) вида `t.me/$premium_invoice_slug`.

Существует также сценарий оформления подписки через магазины приложений, основанный на [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/)/[payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/), но сейчас он недоступен сторонним приложениям (в отличие от описанного выше сценария, которым могут пользоваться все клиенты).

### Дарение Telegram Premium

Примечание: чтобы подарить подписки Premium сразу нескольким друзьям, вместо этого нужно использовать альтернативный сценарий оплаты, [описанный здесь »](/api/giveaways/) ([inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/) без указания `boost_peer`).

```
premiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;

inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;

messageActionGiftPremium#48e91302 flags:# currency:string amount:long days:int crypto_currency:flags.0?string crypto_amount:flags.0?long message:flags.1?TextWithEntities = MessageAction;

inputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;

---functions---

payments.getPremiumGiftCodeOptions#2757ba54 flags:# boost_peer:flags.0?InputPeer = Vector<PremiumGiftCodeOption>;
```

Если у собеседника в личном чате нет подписки Premium, мы можем подарить ему разовую подписку Telegram Premium без автопродления.

Если флаг [userFull](/constructor/userFull/).`display_gifts_button` установлен и у нас, и у другого пользователя (он меняется через [globalPrivacySettings](/constructor/globalPrivacySettings/)), в текстовом поле в личных чатах с этим пользователем должна всегда отображаться кнопка подарка: по нажатию на неё должен открываться интерфейс дарения, предлагающий пользователю подарить подписку [Telegram Premium »](/api/premium/#gifting-telegram-premium) или [подарки Telegram »](/api/gifts/).

Тот же интерфейс дарения должен быть всегда (безусловно) доступен через выбор чата, вызываемый пунктом «Отправить подарок» в настройках приложения.

Пользователи могут запретить приём отдельных типов подарков, заполнив флаг [globalPrivacySettings](/constructor/globalPrivacySettings/).`disallowed_gifts`; другим пользователям он виден в [userFull](/constructor/userFull/).`disallowed_gifts`.

Чтобы получить доступные варианты подарочной подписки Telegram Premium, вызовите [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/).

Возвращаемые конструкторы [premiumGiftCodeOption](/constructor/premiumGiftCodeOption/) представляют собой упорядоченный список предложений подарочной подписки Premium со скидками от базовой цены в зависимости от срока подписки.

Отфильтруйте только варианты, где `users == 1` (варианты, где `users > 1`, используются для [розыгрышей](/api/giveaways/)).

Каждому сочетанию `users/months` может соответствовать до двух вариантов: один в национальной валюте пользователя, а другой (необязательно) в [Telegram Stars](/api/stars/) (`currency == "XTR"`).

Неофициальным клиентам следует показывать и использовать только варианты, где `currency`\=`XTR`.

Чтобы подарить подписку Telegram Premium с оплатой в [Telegram Stars](/api/stars/), создайте [inputInvoicePremiumGiftStars](/constructor/inputInvoicePremiumGiftStars/), а затем следуйте [обычному сценарию оплаты »](https://core.telegram.org/api/payments#22-getting-invoice-info-about-the-product).

После успешной обработки платежа пользователь, которому был отправлен подарок, автоматически получит от подарившего пользователя сервисное сообщение [messageService](/constructor/messageService/), содержащее конструктор [messageActionGiftPremium](/constructor/messageActionGiftPremium/) с дополнительными сведениями о цене и сроке подаренной подписки Telegram Premium.  
Клиентам следует показывать это сообщение вместе со стикером из [набора стикеров](/api/stickers/) [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/): вот [пример](https://telegram.org/blog/custom-emoji#gifting-telegram-premium).

Учтите, что если [параметр конфигурации приложения](/api/config/#client-configuration) `premium_gift_attach_menu_icon` равен `true`, в меню вложений в личных чатах с пользователями должен показываться значок подарка, предлагающий текущему пользователю подарить собеседнику подписку [Telegram Premium](/api/premium/).

Если также задан параметр `premium_gift_text_field_icon`, значок подарка должен показываться в строке ввода текста в личных чатах с пользователями (то есть подобно значку `/` в чатах с ботами), предлагая текущему пользователю подарить собеседнику подписку [Telegram Premium](/api/premium/). Может быть равен true, только если `premium_gift_attach_menu_icon` тоже равен true.

Учтите, что даже если поле `premium_gifts` не задано, мы всё равно можем подарить одну (или несколько!) подписок Premium, используя альтернативный сценарий оплаты, [описанный здесь »](/api/giveaways/) ([inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/) без указания `boost_peer`).

[@term:boost slot] Дарение подписки [Telegram Premium](/api/premium/) другому пользователю создаст для нас столько [слотов бустов »](/api/boost/) (`boost slot` — ячейка, позволяющая держать один буст на выбранном канале), сколько задано ключом [boosts\_per\_sent\_gift](/api/config/#boosts-per-sent-gift), и один слот буста — для получателя подарка.

### Заблокированный Telegram Premium

Если задан [параметр конфигурации приложения](/api/config/#client-configuration) `premium_purchase_blocked`, пользователь не может купить Premium-аккаунт, и все возможности Telegram Premium должны быть скрыты (в том числе [значки](#badge) Premium-пользователей, кнопки покупки Telegram Premium и так далее).
