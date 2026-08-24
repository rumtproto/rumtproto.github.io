---
title: "Темы оформления Telegram"
original: "https://core.telegram.org/api/themes"
section: api
description: "Приложения Telegram умеют создавать темы оформления, делиться ими и синхронизировать их между устройствами."
layout: layout.njk
---

# Темы оформления Telegram

Приложения Telegram умеют создавать темы оформления, делиться ими и синхронизировать их между устройствами.

### Загрузка файлов темы

```
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

---functions---

account.uploadTheme#1c3db333 flags:# file:InputFile thumb:flags.0?InputFile file_name:string mime_type:string = Document;
```

[Файлы тем](https://core.telegram.org/themes) загружаются методом [account.uploadTheme](/method/account.uploadTheme/); дополнительно в параметре `thumb` можно передать JPEG-миниатюру темы.  
Полученный документ следует использовать при [создании](#creating-themes) или [обновлении](#updating-themes) тем.

Что именно лежит внутри файла темы, зависит от форматов, которые поддерживает движок оформления клиента.

### Создание тем

```
baseThemeClassic#c3a12462 = BaseTheme;
baseThemeDay#fbd81688 = BaseTheme;
baseThemeNight#b7b31ea8 = BaseTheme;
baseThemeTinted#6d5f77ee = BaseTheme;
baseThemeArctic#5b11125a = BaseTheme;

inputWallPaper#e630b979 id:long access_hash:long = InputWallPaper;
inputWallPaperSlug#72091c80 slug:string = InputWallPaper;
inputWallPaperNoFile#967a462e id:long = InputWallPaper;

wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;

inputThemeSettings#8fde504f flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?InputWallPaper wallpaper_settings:flags.1?WallPaperSettings = InputThemeSettings;

theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;

---functions---

account.createTheme#652e4400 flags:# slug:string title:string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
```

Тему создаёт метод [account.createTheme](/method/account.createTheme/); [подробнее о параметрах — на странице метода »](/method/account.createTheme/).

[@term:slug] [@term:deep link] Созданной темой можно поделиться, сформировав [глубокую ссылку на тему (`deep link`) »](/api/links/#theme-links) — либо со своим значением `slug` (короткий текстовый идентификатор темы, который подставляется в адрес ссылки), либо с автоматически сгенерированным: для этого параметр `slug` оставляют пустым и берут `slug` из ответа.

### Обновление тем

```
inputTheme#3c5693e9 id:long access_hash:long = InputTheme;
inputThemeSlug#f5890df1 slug:string = InputTheme;

updateTheme#8216fba3 theme:Theme = Update;

---functions---

account.updateTheme#2bf40ccc flags:# format:string theme:InputTheme slug:flags.0?string title:flags.1?string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
```

[@term:access_hash] Ранее загруженную тему её создатель может изменить методом [account.updateTheme](/method/account.updateTheme/): нужно передать те же параметры, что и при [создании тем](#creating-themes), а вместе с ними — [InputTheme](/type/InputTheme/) с идентификатором и `access_hash` (хеш доступа — выданное сервером значение, которое подтверждает право обращаться к объекту). Оба значения берутся из конструктора [theme](/constructor/theme/), который вернул [account.createTheme](/method/account.createTheme/) или [account.getTheme](/method/account.getTheme/).

Все пользователи, установившие эту тему, получат обновление [updateTheme](/constructor/updateTheme/) с её новой версией.

### Установка тем

```
inputTheme#3c5693e9 id:long access_hash:long = InputTheme;
inputThemeSlug#f5890df1 slug:string = InputTheme;

theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;

themeSettings#fa58b6d4 flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?WallPaper = ThemeSettings;

account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;

---functions---

account.saveTheme#f257106c theme:InputTheme unsave:Bool = Bool;
account.installTheme#c727bb3b flags:# dark:flags.0?true theme:flags.1?InputTheme format:flags.2?string base_theme:flags.3?BaseTheme = Bool;
account.getTheme#3a5869ec format:string theme:InputTheme = Theme;
account.getThemes#7206e458 format:string hash:long = account.Themes;
```

После того как вы [создали свою тему](#creating-themes) или получили [глубокую ссылку на тему](/api/links/#theme-links), её можно установить — вот как.

Прежде всего, чтобы получить сведения о теме по [глубокой ссылке на тему](/api/links/#theme-links), вызовите [account.getTheme](/method/account.getTheme/) с [inputThemeSlug](/constructor/inputThemeSlug/).

API хранит список тем, которые пользователь может применить.  
Чтобы получить этот список, вызовите [account.getThemes](/method/account.getThemes/).  
Чтобы сохранить тему в список, вызовите [account.saveTheme](/method/account.saveTheme/) с `unsave=false`.  
Чтобы удалить тему из списка, вызовите [account.saveTheme](/method/account.saveTheme/) с `unsave=true`.

Когда клиент применяет тему, вызовите [account.installTheme](/method/account.installTheme/), чтобы сообщить серверу об установке.

[@term:format] Во всех этих методах `format` указывает формат темы — строку, по которой определяются движки оформления, поддерживаемые клиентом.

### Темы оформления чатов

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;

account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;

starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;

chatTheme#c3dffc04 emoticon:string = ChatTheme;
chatThemeUniqueGift#3458f9c8 gift:StarGift theme_settings:Vector<ThemeSettings> = ChatTheme;

inputChatThemeEmpty#83268483 = InputChatTheme;
inputChatTheme#c93de95c emoticon:string = InputChatTheme;
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;

messageActionSetChatTheme#b91bbd3a theme:ChatTheme = MessageAction;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;

---functions---

account.getChatThemes#d638de89 hash:long = account.Themes;
account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;

messages.setChatTheme#081202c9 peer:InputPeer theme:InputChatTheme = Updates;
```

[@term:peer] Методом [messages.setChatTheme](/method/messages.setChatTheme/) можно задать собственный фон чата для конкретных пиров (`peer` — собеседник, группа или канал, с которыми ведётся переписка); полный список доступных тем чата возвращает один из следующих методов:

-   [@term:emoticon] [account.getChatThemes](/method/account.getChatThemes/) — для тем, доступных всем без ограничений: чтобы применить такую тему, соберите конструктор [inputChatTheme](/constructor/inputChatTheme/) на основе поля [theme](/constructor/theme/).`emoticon` (эмодзи, которое служит идентификатором темы).
-   [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/) — для чатов на основе коллекционных подарков, которыми вы владеете или которые [размещены у вас »](/api/gifts/#hosted-collectible-gifts), с установленным флагом [starGiftUnique](/constructor/starGiftUnique/).`theme_available`: чтобы применить такую тему, соберите [inputChatThemeUniqueGift](/constructor/inputChatThemeUniqueGift/) на основе возвращённого [chatThemeUniqueGift](/constructor/chatThemeUniqueGift/).`gift`.`slug`.  
    Учтите: тему на основе коллекционного подарка можно держать включённой только в одном чате — если применить её в новом чате, из прежнего она снимется автоматически. Чат, где тема используется сейчас, если такой есть, указан в [chatThemeUniqueGift](/constructor/chatThemeUniqueGift/).`gift`.`theme_peer`.

Выбрав тему, передайте её в [messages.setChatTheme](/method/messages.setChatTheme/).

**Примечание**: пользователям доступны темы и на основе эмодзи, и на основе подарков ([inputChatThemeUniqueGift](/constructor/inputChatThemeUniqueGift/) и [inputChatTheme](/constructor/inputChatTheme/)).  
Группам и каналам доступны только темы на основе эмодзи ([inputChatTheme](/constructor/inputChatTheme/)).

Чтобы убрать тему чата, передайте [inputChatThemeEmpty](/constructor/inputChatThemeEmpty/).

При смене темы чата отправляется сервисное сообщение [messageActionSetChatTheme](/constructor/messageActionSetChatTheme/); кроме того, у пользователей тема доступна в поле [userFull](/constructor/userFull/).`theme`, а у групп и каналов — в поле [chatFull](/constructor/chatFull/).`theme_emoticon`/[channelFull](/constructor/channelFull/).`theme_emoticon`.
