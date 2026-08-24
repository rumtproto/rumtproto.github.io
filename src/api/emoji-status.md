---
title: "Эмодзи-статус"
original: "https://core.telegram.org/api/emoji-status"
section: api
description: "Telegram позволяет пользователям, каналам и супергруппам установить в качестве статуса эмотикон или пользовательский эмодзи, который показывается рядом с их именем в чатах и…"
layout: layout.njk
---

# Эмодзи-статус

Telegram позволяет пользователям, каналам и супергруппам установить в качестве статуса эмотикон или [пользовательский эмодзи](/api/custom-emoji/), который показывается рядом с их именем в чатах и профилях.

### Установка эмодзи-статуса

```
emojiStatusEmpty#2de11aae = EmojiStatus;
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
inputEmojiStatusCollectible#07141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;

emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

updateUserEmojiStatus#28373599 user_id:long emoji_status:EmojiStatus = Update;

updateRecentEmojiStatuses#30f443db = Update;

account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;

---functions---

account.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;
account.getRecentEmojiStatuses#0f578105 hash:long = account.EmojiStatuses;
account.clearRecentEmojiStatuses#18201aae = Bool;
```

Чтобы изменить эмодзи-статус своего профиля, используйте [account.updateEmojiStatus](/method/account.updateEmojiStatus/).

-   Передайте [emojiStatus](/constructor/emojiStatus/), чтобы установить [пользовательский эмодзи](/api/custom-emoji/).
-   Передайте [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/), чтобы установить эмодзи-статусом [коллекционный подарок, которым вы владеете »](#collectibles-as-emoji-statuses). Учтите, что после установки статус будет возвращаться пользователям уже в виде конструктора [emojiStatusCollectible](/constructor/emojiStatusCollectible/) (который **нельзя** передать в [account.updateEmojiStatus](/method/account.updateEmojiStatus/) — его нужно сначала преобразовать в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)).  
    Такой эмодзи-статус также меняет некоторые свойства самой страницы профиля — через **pattern\_document\_id** и другие поля.
-   Передайте [emojiStatusEmpty](/constructor/emojiStatus/), чтобы убрать установленный [пользовательский эмодзи](/api/custom-emoji/).

Только что установленный конструктор [EmojiStatus](/type/EmojiStatus/) вернётся в поле `emoji_status` конструктора [user](/constructor/user/), а другие пользователи получат обновление [updateUserEmojiStatus](/constructor/updateUserEmojiStatus/).

Остальные авторизованные клиенты получат также обновление [updateRecentEmojiStatuses](/constructor/updateRecentEmojiStatuses/), сообщающее о том, что список недавних эмодзи-статусов изменился.

Недавно использованные эмодзи-статусы можно получить методом [account.getRecentEmojiStatuses](/method/account.getRecentEmojiStatuses/), а очистить список — методом [account.clearRecentEmojiStatuses](/method/account.clearRecentEmojiStatuses/).

Учтите, что интерфейс выбора пользовательских эмодзи должен предлагать список категорий для быстрой фильтрации результатов по эмодзи (или набору эмодзи) либо по иным признакам; подробнее см. [здесь »](/api/emoji-categories/).

#### Установка эмодзи-статуса в каналах и супергруппах

```
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;

---functions---

account.getChannelRestrictedStatusEmojis#35a9e0d5 hash:long = EmojiList;

channels.updateEmojiStatus#f0d3e6a8 channel:InputChannel emoji_status:EmojiStatus = Updates;
```

В эмодзи-статусах каналов и супергрупп, устанавливаемых через [channels.updateEmojiStatus](/method/channels.updateEmojiStatus/), допускается использовать **только** [наборы](/constructor/stickerSet/) пользовательских эмодзи для каналов и супергрупп, то есть [наборы](/constructor/stickerSet/) с установленным флагом `channel_emoji_status`.

Однако учтите, что отдельные [пользовательские эмодзи](/api/custom-emoji/) из таких наборов всё же нельзя использовать в качестве статусов каналов и супергрупп: полный список идентификаторов пользовательских эмодзи, запрещённых для статусов каналов и супергрупп, возвращает метод [account.getChannelRestrictedStatusEmojis](/method/account.getChannelRestrictedStatusEmojis/).

Каналы и супергруппы получают возможность менять свой эмодзи-статус только после того, как достигнут как минимум [уровня бустов](/api/boost/), указанного в параметрах конфигурации [`channel_emoji_status_level_min` »](/api/config/#channel-emoji-status-level-min) и [`group_emoji_status_level_min` »](/api/config/#group-emoji-status-level-min).

#### Установка эмодзи-статуса от имени бота

```
userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

bots.updateUserEmojiStatus#ed9f30c5 user_id:InputUser emoji_status:EmojiStatus = Bool;
bots.toggleUserEmojiStatusPermission#06de6392 bot:InputUser enabled:Bool = Bool;
```

Боты могут установить эмодзи-статус пользователя двумя способами.

-   [@term:Mini App] Отправив из [Mini App](/api/bots/webapps/) — приложения бота, работающего внутри Telegram, — событие [web\_app\_set\_emoji\_status](/api/web-events/#web-app-set-emoji-status), которое содержит ID [пользовательского эмодзи](/api/custom-emoji/), выбранного в качестве статуса, и необязательный срок действия статуса; подробнее об этом событии см. [здесь »](/api/web-events/#web-app-set-emoji-status).

-   С помощью метода [bots.updateUserEmojiStatus](/method/bots.updateUserEmojiStatus/): чтобы его использовать, бот обязан сначала запросить и получить у пользователя разрешение управлять его эмодзи-статусом без явных событий [web\_app\_set\_emoji\_status](/api/web-events/#web-app-set-emoji-status).  
    Чтобы запросить разрешение, отправьте событие [web\_app\_request\_emoji\_status\_access](/api/web-events/#web-app-request-emoji-status-access) и выполните [полную процедуру »](/api/web-events/#web-app-request-emoji-status-access), которая при успехе приводит к вызову пользователем метода [bots.toggleUserEmojiStatusPermission](/method/bots.toggleUserEmojiStatusPermission/) с параметром `enabled=true` и ID бота.

    Как только разрешение получено, у пользователя будет выставлен флаг [userFull](/constructor/userFull/).`bot_can_manage_emoji_status` для этого бота, и бот сможет вызывать [bots.updateUserEmojiStatus](/method/bots.updateUserEmojiStatus/), чтобы менять эмодзи-статус пользователя.

### Рекомендуемые наборы стикеров для эмодзи-статусов

```
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;

account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;

inputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;
inputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;

---functions---

account.getDefaultEmojiStatuses#d6753386 hash:long = account.EmojiStatuses;
account.getChannelDefaultEmojiStatuses#7727a7d5 hash:long = account.EmojiStatuses;
```

Набор стандартных статусов для пользователей (и для каналов/супергрупп) можно получить, передав [inputStickerSetEmojiDefaultStatuses](/constructor/inputStickerSetEmojiDefaultStatuses/)/[inputStickerSetEmojiChannelDefaultStatuses](/constructor/inputStickerSetEmojiChannelDefaultStatuses/) в [messages.getStickerSet](/method/messages.getStickerSet/), как описано в [документации по наборам стикеров »](/api/stickers/).

[account.getDefaultEmojiStatuses](/method/account.getDefaultEmojiStatuses/) также позволяет получить список рекомендуемых эмодзи-статусов из нескольких рекомендуемых наборов пользовательских эмодзи.  
[account.getChannelDefaultEmojiStatuses](/method/account.getChannelDefaultEmojiStatuses/) — аналогичный метод для эмодзи-статусов каналов и супергрупп.

### Коллекционные подарки в роли эмодзи-статусов

```
account.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;
account.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;

emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;

---functions---

account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;

account.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;
channels.updateEmojiStatus#f0d3e6a8 channel:InputChannel emoji_status:EmojiStatus = Updates;
```

[Коллекционные подарки, которыми вы владеете или которые размещены у вас »](/api/gifts/#hosted-collectible-gifts), можно установить в качестве эмодзи-статуса: вызовите [account.getCollectibleEmojiStatuses](/method/account.getCollectibleEmojiStatuses/), чтобы получить список доступных коллекционных эмодзи-статусов (в виде объектов [emojiStatusCollectible](/constructor/emojiStatusCollectible/)), выберите один из них, преобразуйте его в [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) и [установите, как описано выше »](#setting-an-emoji-status), с помощью [account.updateEmojiStatus](/method/account.updateEmojiStatus/)/[channels.updateEmojiStatus](/method/channels.updateEmojiStatus/).

Коллекционные эмодзи-статусы несовместимы с [пользовательской палитрой и узорами профиля »](/api/colors/): установка коллекционного эмодзи-статуса удаляет ранее настроенные палитру и узор профиля, и наоборот — установка пользовательской палитры или узора профиля удаляет ранее установленный коллекционный эмодзи-статус.
