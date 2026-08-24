---
title: "Акцентные цвета"
original: "https://core.telegram.org/api/colors"
section: api
description: "Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор своей страницы профиля и своих сообщений!"
layout: layout.njk
---

# Акцентные цвета

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор своей страницы профиля и своих сообщений!

### Варианты цветовых палитр

```
help.peerColorOption#adec6ebe flags:# hidden:flags.0?true color_id:int colors:flags.1?help.PeerColorSet dark_colors:flags.2?help.PeerColorSet channel_min_level:flags.3?int group_min_level:flags.4?int = help.PeerColorOption;

help.peerColorsNotModified#2ba1f5ce = help.PeerColors;
help.peerColors#00f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;

---functions---

help.getPeerColors#da80f42f hash:int = help.PeerColors;
help.getPeerProfileColors#abcfa9fd hash:int = help.PeerColors;
```

Доступные цветовые палитры описываются конструктором [help.peerColorOption](/constructor/help.peerColorOption/), который содержит идентификатор палитры, сами палитры для светлой и тёмной темы, а также некоторые дополнительные сведения.

Метод [help.getPeerProfileColors](/method/help.getPeerProfileColors/) возвращает все конструкторы [help.peerColorOption](/constructor/help.peerColorOption/), пригодные для фона страницы профиля, а метод [help.getPeerColors](/method/help.getPeerColors/) — все конструкторы [help.peerColorOption](/constructor/help.peerColorOption/), пригодные для акцентов в сообщениях.

Поле [help.peerColorOption](/constructor/help.peerColorOption/).`color_id` — это идентификатор палитры (не цвет в формате RGB24, а просто числовой идентификатор); он передаётся в [peerColor](/constructor/peerColor/) при смене палитры и узора профиля или сообщений.

Если у конструктора [help.peerColorOption](/constructor/help.peerColorOption/) установлен флаг `hidden`, текущую палитру не следует показывать пользователю среди доступных вариантов при выборе палитры для страницы профиля или для акцентов в сообщениях (однако палитру всё равно следует применять, если она встретилась в сообщениях и профилях).

Поля [help.peerColorOption](/constructor/help.peerColorOption/).`colors`/`dark_colors` содержат саму цветовую палитру для светлой и тёмной темы, представленную типом [help.PeerColorSet](/type/help.PeerColorSet/) (подробнее см. [ниже »](#color-palettes)).

Обратите внимание: поле `colors` будет пустым для палитр с идентификаторами от `0` до `6` включительно; в этом случае следует использовать палитру из одного цвета, взятого из набора: красный, оранжевый, фиолетовый, зелёный, голубой, синий, розовый — для индексов с 0 по 6 соответственно (то есть те же цвета, что и в [запасной палитре со случайным выбором](/api/colors/#randomized-fallback-color-palette)).

Поле `dark_colors` для этих идентификаторов также будет пустым (в этом случае следует использовать аналогично построенную палитру для тёмной темы); оно может быть пустым и для других идентификаторов (тогда следует откатиться к полю `colors`).

#### Цветовые палитры

```
help.peerColorSet#26219a58 colors:Vector<int> = help.PeerColorSet;
help.peerColorProfileSet#767d61eb palette_colors:Vector<int> bg_colors:Vector<int> story_colors:Vector<int> = help.PeerColorSet;
```

Цветовые палитры, входящие в [варианты цветовых палитр »](#color-palette-options), описываются конструкторами [help.peerColorSet](/constructor/help.peerColorSet/) (возвращается методом [help.getPeerColors](/method/help.getPeerColors/) и содержит палитру для акцентов в сообщениях) либо [help.peerColorProfileSet](/constructor/help.peerColorProfileSet/) (возвращается методом [help.getPeerColors](/method/help.getPeerColors/) и содержит палитру для страниц профиля).

Оба конструктора содержат список переменной длины из цветов в формате RGB, которые по-разному используются для построения фоновой палитры; подробности приведены на страницах соответствующих конструкторов.

[@note] В оригинале для обоих конструкторов указан один и тот же метод `help.getPeerColors`. Судя по остальному тексту страницы, это опечатка: палитры для страниц профиля (`help.peerColorProfileSet`) возвращает `help.getPeerProfileColors`.

### Эмодзи фонового узора

```
stickerSet#2dd14edc flags:# archived:flags.1?true official:flags.2?true masks:flags.3?true emojis:flags.7?true text_color:flags.9?true channel_emoji_status:flags.10?true creator:flags.11?true installed_date:flags.0?int id:long access_hash:long title:string short_name:string thumbs:flags.4?Vector<PhotoSize> thumb_dc_id:flags.4?int thumb_version:flags.4?int thumb_document_id:flags.8?long count:int hash:int = StickerSet;

---functions---

account.getDefaultBackgroundEmojis#a60ab9ce hash:long = EmojiList;
```

Метод [account.getDefaultBackgroundEmojis](/method/account.getDefaultBackgroundEmojis/) возвращает список идентификаторов [пользовательских эмодзи](/api/custom-emoji/), которые можно использовать в фоновом узоре палитры.

Для той же цели можно использовать все пользовательские эмодзи из [наборов пользовательских эмодзи »](/api/custom-emoji/), у которых в конструкторе [stickerSet](/constructor/stickerSet/) установлен флаг `text_color`.

### Установка цветовой палитры и фонового узора из эмодзи

Схема:

```
peerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

---functions---

account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;

channels.updateColor#d8aa3671 flags:# for_profile:flags.1?true channel:InputChannel color:flags.2?int background_emoji_id:flags.0?long = Updates;
```

Конструктор [peerColor](/constructor/peerColor/) содержит идентификатор цветовой палитры (`id`, указывающий на [вариант цветовой палитры »](#color-palette-options)) и [пользовательский эмодзи-стикер »](#background-pattern-emojis) (`background_emoji_id`), который перекрашивается в цвета палитры и многократно повторяется по всей её площади, образуя фон; этот фон используется в разных местах интерфейса в зависимости от значения `for_profile`:

-   Если флаг `for_profile` установлен, вызов методов обновит **палитру и узор профиля**, доступные в полях [user](/constructor/user/).`profile_color` и [channel](/constructor/channel/).`profile_color`.

    Палитра и узор профиля используются в подложке страницы профиля пользователя или канала.

-   Если флаг `for_profile` **не** установлен, вызов методов обновит **палитру и узор сообщений**, доступные в полях [user](/constructor/user/).`color` и [channel](/constructor/channel/).`color`.

    Палитра и узор сообщений используются в рамках сообщений с предпросмотром веб-страниц, а также в акцентных цветах при цитировании сообщений канала или пользователя и ответах на них.

Метод [account.updateColor](/method/account.updateColor/) обновляет цветовую палитру акцентов в сообщениях и (или) на странице профиля текущей учётной записи; учтите, что для вызова этого метода текущая учётная запись обязана иметь подписку [Telegram Premium](/api/premium/).

Метод [channels.updateColor](/method/channels.updateColor/) обновляет цветовую палитру акцентов на странице профиля канала или супергруппы либо акцент сообщений канала (в этом случае идентификатор фонового эмодзи, если он есть, передаётся непосредственно в метод).

Изменение любой из палитр порождает обновление [updateChannel](/constructor/updateChannel/)/[updateUser](/constructor/updateUser/).

[@term:boost level] Учтите, что каналы и супергруппы могут использовать палитру акцентов сообщений или палитру профиля, только достигнув как минимум того [уровня буста](/api/boost/) (`boost level` — уровень, набираемый чатом за счёт бустов от пользователей), который указан в поле `channel_min_level`/`group_min_level` конструктора [help.peerColorOption](/constructor/help.peerColorOption/) для выбранной палитры.

Кроме того, чтобы изменить палитру **профиля**, каналы и супергруппы обязаны **дополнительно** достичь как минимум [уровня буста](/api/boost/), указанного в параметрах конфигурации [`channel_profile_bg_icon_level_min` »](/api/config/#channel-profile-bg-icon-level-min)/[`group_profile_bg_icon_level_min` »](/api/config/#group-profile-bg-icon-level-min).

#### Случайная запасная цветовая палитра

[@term:peer] Если для пира (`peer` — собеседник: пользователь, чат или канал) палитра не задана, клиент обязан сам выбрать случайный цвет из набора: красный, оранжевый, фиолетовый, зелёный, голубой, синий, розовый (при необходимости подогнав его под тему оформления клиента) — и использовать его как палитру акцентов сообщений; выбор делается локально и однократно для каждого встреченного пира.

### Палитры коллекционных подарков

У некоторых [коллекционных подарков »](/api/gifts/#collectible-gifts) есть связанная с ними цветовая палитра, которую можно использовать для фоновых палитр профиля и палитр сообщений.

#### Коллекционные палитры профиля

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;

emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;

---functions---

account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;

account.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;
channels.updateEmojiStatus#f0d3e6a8 channel:InputChannel emoji_status:EmojiStatus = Updates;
```

Палитры профиля, основанные на [коллекционных подарках »](/api/gifts/#collectible-gifts), задаются только методами [account.updateEmojiStatus](/method/account.updateEmojiStatus/)/[channels.updateEmojiStatus](/method/channels.updateEmojiStatus/), но не методом [account.updateColor](/method/account.updateColor/).

Метод [account.getCollectibleEmojiStatuses](/method/account.getCollectibleEmojiStatuses/) возвращает список доступных коллекционных эмодзи-статусов для принадлежащих вам или [размещённых коллекционных подарков »](/api/gifts/#hosted-collectible-gifts) (в виде объектов [emojiStatusCollectible](/constructor/emojiStatusCollectible/)); выберите один из них, преобразуйте его в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) и [установите, как описано здесь »](/api/emoji-status/#setting-an-emoji-status), с помощью метода [account.updateEmojiStatus](/method/account.updateEmojiStatus/).

Цвета и пользовательский эмодзи для подложки профиля указаны в выбранном объекте [emojiStatusCollectible](/constructor/emojiStatusCollectible/) и видны только в поле [user](/constructor/user/)/[channel](/constructor/channel/).`emoji_status`, но **не** в [user](/constructor/user/)/[channel](/constructor/channel/).`profile_color`.

Коллекционные эмодзи-статусы несовместимы с собственными палитрами и узорами профиля: установка коллекционного эмодзи-статуса удалит ранее настроенные палитру и узор профиля, и наоборот — установка собственной палитры или узора профиля удалит ранее настроенный коллекционный эмодзи-статус.

#### Коллекционные палитры сообщений

```
starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;

starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;

inputPeerColorCollectible#b8ea86a9 collectible_id:long = PeerColor;

peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;

---functions---

payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;

account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;
```

Принадлежащие вам или [размещённые коллекционные подарки »](/api/gifts/#hosted-collectible-gifts) можно использовать в качестве палитр сообщений — они применяются в рамках сообщений с предпросмотром веб-страниц, а также в акцентных цветах при цитировании сообщений канала или пользователя и ответах на них.

Чтобы получить список принадлежащих вам или размещённых коллекционных подарков, пригодных для использования в качестве палитр сообщений, вызовите [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) с установленным флагом `peer_color_available`: метод вернёт список конструкторов [starGiftUnique](/constructor/starGiftUnique/), в которых параметр `peer_color` заполнен конструктором [peerColorCollectible](/constructor/peerColorCollectible/), содержащим палитру и узор, связанные с подарком.

Примечание: у простых, неулучшенных подарков, представленных конструктором [starGift](/constructor/starGift/), которые получат связанную палитру после улучшения до коллекционного подарка, установлен флаг [starGift](/constructor/starGift/).`peer_color_available`.

Затем на основе выбранного [starGiftUnique](/constructor/starGiftUnique/) формируется [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/), который передаётся в [account.updateColor](/method/account.updateColor/).

После настройки коллекционная палитра сообщений будет доступна в поле [message](/constructor/message/).`color` в виде полноценного конструктора [peerColorCollectible](/constructor/peerColorCollectible/).

Конструктор [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/) нельзя использовать для палитр профиля (`for_profile`) — для них применяйте [account.updateEmojiStatus](/method/account.updateEmojiStatus/); полный порядок действий описан [здесь »](#collectible-profile-palettes).

Кроме того, каналы не могут передавать [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/) в [channels.updateColor](/method/channels.updateColor/) (речь о палитрах сообщений; коллекционные палитры профиля доступны каналам через [channels.updateEmojiStatus](/method/channels.updateEmojiStatus/)).
