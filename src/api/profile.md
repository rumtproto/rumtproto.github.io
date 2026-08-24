---
title: "Профили пользователей"
original: "https://core.telegram.org/api/profile"
section: api
description: "Telegram предлагает множество способов настроить свой профиль!"
layout: layout.njk
---

# Профили пользователей

Telegram предлагает множество способов настроить свой профиль!

### Имя и описание

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

updateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;
updateUser#20529438 user_id:long = Update;

---functions---

account.updateProfile#78515775 flags:# first_name:flags.0?string last_name:flags.1?string about:flags.2?string = User;
```

Чтобы изменить имя и описание (`about`) текущей учётной записи, используйте [account.updateProfile](/method/account.updateProfile/).

Поля `first_name` и `last_name` возвращаются в конструкторе [user](/constructor/user/), а поле `about` — в конструкторе [userFull](/constructor/userFull/).

Изменение имени и фамилии порождает обновление [updateUserName](/constructor/updateUserName/), а изменение описания `about` — обновление [updateUser](/constructor/updateUser/) (по которому следует сбросить локально закешированный конструктор [userFull](/constructor/userFull/) и заново запросить его через [users.getFullUser](/method/users.getFullUser/), если и когда он снова понадобится).

#### Личные заметки о контактах

При добавлении или изменении **контакта Telegram** теперь можно приложить личную заметку — чтобы не забыть, при каких обстоятельствах вы познакомились, где человек работает или какое мороженое он любит.

Заметки о контактах **видны только вам** и отображаются в профиле пользователя в Telegram под его описанием; подробности см. [здесь »](/api/contacts/#private-notes-for-contacts).

#### Предупреждение о неофициальном клиенте

Если в конструкторе [userFull](/constructor/userFull/) установлен флаг `unofficial_security_risk`, пользователь работает через неофициальный клиент Telegram: клиентам следует показывать в его профиле предупреждение о том, что отправленные ему сообщения могут быть менее защищены.

#### Кто управляет управляемым ботом

Если профиль принадлежит [управляемому боту »](/api/bots/managed-bots/), поле `bot_manager_id` конструктора [userFull](/constructor/userFull/) содержит идентификатор пользователя или бота-управляющего, который этим ботом управляет; в профиле же самого бота-управляющего вместо этого выставлен флаг `bot_can_manage_bots` конструктора [user](/constructor/user/).

### Фотография профиля

```
userProfilePhotoEmpty#4f11bae1 = UserProfilePhoto;
userProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

updateUser#20529438 user_id:long = Update;

---functions---

photos.updateProfilePhoto#09e82039 flags:# fallback:flags.0?true bot:flags.1?InputUser id:InputPhoto = photos.Photo;
photos.uploadProfilePhoto#0388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;
```

Чтобы установить фотографию профиля (при желании — анимированную), используйте [photos.updateProfilePhoto](/method/photos.updateProfilePhoto/) или [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/); в результате будет отправлено обновление [updateUser](/constructor/updateUser/).

Фотография окажется в поле [user](/constructor/user/).`photo`.

Полные сведения о фотографиях профиля и о том, как с ними работать, смотрите [здесь »](/api/files/#uploading-profile-or-chat-pictures).

### Приветствие

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;

---functions---

messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
```

Когда пользователь открывает личный чат с собеседником, переписки с которым у него ещё не было, интерфейс должен показать случайно выбранный приветственный стикер и предложение отправить сообщение.

Чтобы получить этот особый список приветственных стикеров, вызовите [messages.getStickers](/method/messages.getStickers/) с `emoticon=<img class="emoji" src="https://telegram.org/img/emoji/40/F09F918B.png" width="20" height="20" alt="👋"><img class="emoji" src="https://telegram.org/img/emoji/40/E2AD90.png" width="20" height="20" alt="⭐️">`.

Учтите: если у собеседника настроено своё [приветствие Telegram Business »](/api/business/#business-introduction), то вместо этого обязательно использовать сообщение и стикер, заданные в [userFull](/constructor/userFull/).`intro`.

### Эмодзи-статус

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

updateUserEmojiStatus#28373599 user_id:long emoji_status:EmojiStatus = Update;

---functions---

account.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;
```

Метод [account.updateEmojiStatus](/method/account.updateEmojiStatus/) позволяет изменить [эмодзи-статус »](/api/emoji-status/) текущего аккаунта — он отображается рядом с именем.

Эмодзи-статус содержится в поле [user](/constructor/user/).`emoji_status`, а его изменение приводит к отправке обновления [updateUserEmojiStatus](/constructor/updateUserEmojiStatus/).

Подробнее об эмодзи-статусах смотрите [здесь »](/api/emoji-status/).

### Имя пользователя

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

updateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;

contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;

---functions---

account.updateUsername#3e0bdd7c username:string = User;
account.toggleUsername#58d6b376 username:string active:Bool = Bool;
account.reorderUsernames#ef500eab order:Vector<string> = Bool;

contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
```

Чтобы изменить `@username` текущей учётной записи — публичное имя пользователя, по которому с вами смогут связаться другие, — используйте [account.updateUsername](/method/account.updateUsername/): зная это имя, собеседник находит ваш профиль через [contacts.resolveUsername](/method/contacts.resolveUsername/).

[@term:collectible username] Кроме того, методами [account.toggleUsername](/method/account.toggleUsername/) и [account.reorderUsernames](/method/account.reorderUsernames/) можно настроить несколько [коллекционных имён пользователя](/api/fragment/) (`collectible username` — имя, приобретённое на аукционе Fragment).

Основное имя пользователя содержится в [user](/constructor/user/).`username`, все дополнительные — в [user](/constructor/user/).`usernames`.  
Изменение или переупорядочивание имён вызывает обновление [updateUserName](/constructor/updateUserName/).

Подробнее о ссылках на публичные имена пользователя смотрите [здесь »](/api/links/#public-username-links).

### Акцентные цвета

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

updateUser#20529438 user_id:long = Update;

---functions---

account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;
```

Чтобы изменить акцентный цвет и фоновый эмодзи текущего профиля, которые хранятся в [user](/constructor/user/).`color`/[user](/constructor/user/).`profile_color`, используйте [account.updateColor](/method/account.updateColor/).

Изменение вызывает обновление [updateUser](/constructor/updateUser/).

Подробнее об акцентных цветах смотрите [здесь »](/api/colors/).

### День рождения

```
birthday#6c8e1e06 flags:# day:int month:int year:flags.0?int = Birthday;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

updateUser#20529438 user_id:long = Update;

contactBirthday#1d998733 contact_id:long birthday:Birthday = ContactBirthday;

contacts.contactBirthdays#114ff30d contacts:Vector<ContactBirthday> users:Vector<User> = contacts.ContactBirthdays;

inputPrivacyKeyBirthday#d65a11cc = InputPrivacyKey;

privacyKeyBirthday#2000a518 = PrivacyKey;

messageActionSuggestBirthday#2c8f2a25 birthday:Birthday = MessageAction;

---functions---

account.updateBirthday#cc6e0c11 flags:# birthday:flags.0?Birthday = Bool;

contacts.getBirthdays#daeda864 = contacts.ContactBirthdays;

help.dismissSuggestion#f50dbaa1 peer:InputPeer suggestion:string = Bool;

users.suggestBirthday#fc533372 id:InputUser birthday:Birthday = Updates;
```

Метод [account.updateBirthday](/method/account.updateBirthday/) задаёт дату рождения, которая будет видна пользователям, указанным в [настройках приватности »](/api/privacy/), согласно текущему значению настройки [inputPrivacyKeyBirthday](/constructor/inputPrivacyKeyBirthday/) (по умолчанию — только контактам).

Дата рождения (если она доступна текущему пользователю) содержится в поле [user](/constructor/user/).`birthday`; её изменение порождает обновление [updateUser](/constructor/updateUser/).

Указывать фактический год рождения `year` необязательно, но если он указан, то допустимый возраст сейчас лежит в пределах `0 <= years <= 150` (проверка выполняется только при обновлении даты рождения); в противном случае возвращается ошибка `400 BIRTHDAY_INVALID`.

Чтобы удалить дату рождения, вызовите метод, не устанавливая флаг `birthday`.

Клиенту следует показывать подсказку с предложением указать дату рождения; пользователь может закрыть эту подсказку, что приводит к вызову [help.dismissSuggestion](/method/help.dismissSuggestion/) с suggestion=`BIRTHDAY_SETUP` — так состояние синхронизируется на всех текущих авторизованных клиентах через поле `dismissed_suggestions` в [конфигурации клиента »](/api/config/#dismissing-suggestions).

Метод [contacts.getBirthdays](/method/contacts.getBirthdays/) возвращает всех пользователей, чей день рождения попадает в интервал +1/-1 день относительно текущего дня: клиентам следует вызывать этот метод каждые 6–8 часов, и если результат непустой, использовать его, чтобы должным образом обновить локально закешированные сведения о днях рождения в поле [user](/constructor/user/).`birthday`.

Тогда и только тогда, когда [предложение »](/api/config/#suggestions) `BIRTHDAY_CONTACTS_TODAY` **не** установлено, все _контакты_, у которых поле [user](/constructor/user/).`birthday` (обновляемое через [contacts.getBirthdays](/method/contacts.getBirthdays/) и иными способами, то есть через обновления [updateUser](/constructor/updateUser/)) попадает в интервал +1/-1 день относительно сегодняшнего дня, должны всегда перечисляться в панели действий, показываемой в общем списке диалогов (_не_ в [панели действий »](/api/action-bar/), привязанной к конкретному пользователю), с предложением сделать этим пользователям подарок ко дню рождения [в виде одной или нескольких подписок Telegram Premium »](/api/premium/#gifting-telegram-premium).

Пользователь может закрыть панель действий с днями рождения; её состояние синхронизируется с другими текущими авторизованными сессиями вызовом [help.dismissSuggestion](/method/help.dismissSuggestion/) с suggestion=`BIRTHDAY_CONTACTS_TODAY`.  
Поскольку `BIRTHDAY_CONTACTS_TODAY` — _инвертированное_ предложение, его закрытие на самом деле _включает_ его в [конфигурации клиента](/api/config/#client-configuration) на всех текущих авторизованных сессиях, о чём сообщается обновлением [updateConfig](/constructor/updateConfig/), и само его _присутствие_ следует трактовать как сигнал _не_ показывать панель действий с днями рождения.

Это предложение сервер включает и автоматически — если пользователь дарит одну или несколько подписок Telegram Premium друзьям, чей день рождения приходится на ближайшие или предыдущие 24 часа, — тем самым скрывая панель действий с днями рождения в остальных авторизованных сессиях.

Кроме того, если день рождения пользователя, указанный в поле [user](/constructor/user/).`birthday`, попадает в означенный интервал (+1/-1 день), в строке ввода текста в личной переписке с ним следует показывать подсказку со значком подарка, ведущую к [сценарию дарения Telegram Premium »](/api/premium/#gifting-telegram-premium) (это относится и к тем, кто не состоит у нас в контактах, но разрешил нам видеть свою дату рождения) — независимо от того, установлено `BIRTHDAY_CONTACTS_TODAY` или нет.

Пользователи могут предложить другим пользователям конкретную дату рождения с помощью [users.suggestBirthday](/method/users.suggestBirthday/).

Дату рождения можно успешно предложить пользователям, у которых она не задана, либо пользователям, у которых она задана, но не видна текущему авторизованному пользователю из-за [настройки приватности »](/api/privacy/) [inputPrivacyKeyBirthday](/constructor/inputPrivacyKeyBirthday/).

В случае успеха указанному пользователю отправляется сервисное сообщение [messageActionSuggestBirthday](/constructor/messageActionSuggestBirthday/).

[Аналог этого обновления в push-уведомлениях »](/api/push-updates/) — `MESSAGE_SUGGEST_BIRTHDAY`.

Иначе, если у указанного пользователя дата рождения уже задана и видна текущему авторизованному пользователю, возвращается RPC-ошибка `400` `BIRTHDAY_ALREADY`.

### Личный канал

```
inputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;
inputChannelEmpty#ee8c1e86 = InputChannel;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

updateUser#20529438 user_id:long = Update;

---functions---

channels.getAdminedPublicChannels#f8b036af flags:# by_location:flags.0?true check_limit:flags.1?true for_personal:flags.2?true = messages.Chats;

account.updatePersonalChannel#d94305e0 channel:InputChannel = Bool;

messages.getPersonalChannelHistory#55fb0996 user_id:InputUser limit:int max_id:int min_id:int hash:long = messages.Messages;
```

Метод [account.updatePersonalChannel](/method/account.updatePersonalChannel/) позволяет привязать (или отвязать, передав [inputChannelEmpty](/constructor/inputChannelEmpty/)) личный [канал »](/api/channel/), который будет показан на странице личного профиля.

Чтобы получить полный список каналов, которые допустимо передавать в [account.updatePersonalChannel](/method/account.updatePersonalChannel/), вызовите [channels.getAdminedPublicChannels](/method/channels.getAdminedPublicChannels/), установив флаг `for_personal`.

Идентификатор привязанного канала содержится в поле [user](/constructor/user/).`personal_channel_id`, а идентификатор последнего сообщения, которое следует показывать в предпросмотре интерфейса, — в поле [user](/constructor/user/).`personal_channel_message`.

Изменение этой привязки порождает обновление [updateUser](/constructor/updateUser/).

Боты могут вызывать [messages.getPersonalChannelHistory](/method/messages.getPersonalChannelHistory/), чтобы получить историю сообщений личного канала, привязанного к пользователю, передав этого пользователя в `user_id`.  
[@term:hash] Параметры `max_id`, `min_id`, `limit` и `hash` (хеш выборки — контрольная сумма уже полученных данных, по которой сервер решает, изменились ли они) работают так же, как и в других [методах постраничной выборки истории сообщений »](/api/offsets/).  
Этот метод могут вызывать только боты.

### Бизнес-профиль

```
---functions---

account.updateBusinessWorkHours#4b00e066 flags:# business_work_hours:flags.0?BusinessWorkHours = Bool;
account.updateBusinessLocation#9e6b131a flags:# geo_point:flags.1?InputGeoPoint address:flags.0?string = Bool;
account.updateBusinessGreetingMessage#66cdafc4 flags:# message:flags.0?InputBusinessGreetingMessage = Bool;
account.updateBusinessAwayMessage#a26a7fa5 flags:# message:flags.0?InputBusinessAwayMessage = Bool;
account.updateBusinessIntro#a614d034 flags:# intro:flags.0?InputBusinessIntro = Bool;
```

На странице профиля следует показывать множество разнообразных сведений, [связанных с Telegram Business](/api/business/); полный список полей и способы их изменения см. [здесь »](/api/business/).

### Статус в сети

```
userStatusEmpty#09d05049 = UserStatus;
userStatusOnline#edb93949 expires:int = UserStatus;
userStatusOffline#008c703f was_online:int = UserStatus;
userStatusRecently#7b197dc8 flags:# by_me:flags.0?true = UserStatus;
userStatusLastWeek#541a1d1a flags:# by_me:flags.0?true = UserStatus;
userStatusLastMonth#65899777 flags:# by_me:flags.0?true = UserStatus;

updateUserStatus#e5bdf8de user_id:long status:UserStatus = Update;

---functions---

account.updateStatus#6628562c offline:Bool = Bool;
```

Метод [account.updateStatus](/method/account.updateStatus/) изменяет статус в сети для текущей учётной записи.

Изменение статуса в сети порождает обновление [updateUserStatus](/constructor/updateUserStatus/).

### Звёздный рейтинг

Теперь в профилях Telegram показывается значок с числовым рейтингом, который рассчитывается по суммарному объёму успешно проведённых владельцем профиля операций с Telegram Stars; подробнее см. [здесь »](/api/stars/#star-rating).

### Вкладки

```
userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

profileTabPosts#b98cd696 = ProfileTab;
profileTabGifts#4d4bd46a = ProfileTab;
profileTabMedia#72c64955 = ProfileTab;
profileTabFiles#ab339c00 = ProfileTab;
profileTabMusic#9f27d26e = ProfileTab;
profileTabVoice#e477092e = ProfileTab;
profileTabLinks#d3656499 = ProfileTab;
profileTabGifs#a2c0f695 = ProfileTab;

---functions---

account.setMainProfileTab#5dee78b0 tab:ProfileTab = Bool;

channels.setMainProfileTab#3583fcb1 channel:InputChannel tab:ProfileTab = Bool;
```

В нижней части страницы профиля расположено несколько вкладок: пользователи и каналы могут выбрать методами [account.setMainProfileTab](/method/account.setMainProfileTab/) и [channels.setMainProfileTab](/method/channels.setMainProfileTab/), какая из них откроется первой, когда посетитель открывает страницу профиля. Полный список вкладок, которые допустимо назначить главной, приведён на [странице типа ProfileTab](/type/ProfileTab/) — и ниже.

Выбранная вкладка затем доступна в полях [userFull](/constructor/userFull/).`main_tab` и [channelFull](/constructor/channelFull/).`main_tab`.

#### Истории

```
profileTabPosts#b98cd696 = ProfileTab;
```

На этой вкладке находятся [истории, закреплённые в профиле »](/api/stories/).

Доступна и пользователям, и каналам.

Подробнее о том, как добавлять, удалять и получать [истории](/api/stories/) с этой вкладки, см. [здесь »](/api/stories/).

Также следует поддерживать [альбомы историй »](/api/stories/).

#### Подарки

```
profileTabGifts#4d4bd46a = ProfileTab;
```

На этой вкладке находятся [подарки, закреплённые в профиле »](/api/gifts/).

Доступна и пользователям, и каналам.

Подробнее о том, как добавлять, удалять и получать [подарки](/api/gifts/) с этой вкладки, см. [здесь »](/api/gifts/).

На этой вкладке также должны отображаться [индикаторы коллекций подарков »](/api/gifts/#gift-collections).

#### Музыка

```
profileTabMusic#9f27d26e = ProfileTab;

inputPrivacyKeySavedMusic#4dbe9226 = InputPrivacyKey;
privacyKeySavedMusic#ff7a571b = PrivacyKey;

account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;

users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

---functions---

account.saveMusic#b26732a9 flags:# unsave:flags.0?true id:InputDocument after_id:flags.1?InputDocument = Bool;

users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;

account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;

users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
```

На этой вкладке отображается музыка, добавленная в профиль способами, описанными ниже.

Доступна только пользователям.

Эту вкладку можно скрыть или показывать выборочно отдельным контактам и пользователям с помощью ключа приватности [inputPrivacyKeySavedMusic](/constructor/inputPrivacyKeySavedMusic/); подробнее о настройках приватности см. [здесь »](/api/privacy/).

Чтобы добавить музыкальный файл в свой профиль, вызовите [account.saveMusic](/method/account.saveMusic/) для музыкального файла, доступного в личном чате, группе или канале; чтобы убрать композицию из профиля, вызовите тот же метод с флагом `unsave`.

Первая добавленная в профиль композиция будет доступна в поле [userFull](/constructor/userFull/).`saved_music`.

Добавленные в профиль композиции можно получить методом [users.getSavedMusic](/method/users.getSavedMusic/) — как нам самим, так и другим пользователям, с учётом настроенных [параметров приватности »](/api/privacy/).

При добавлении композиций методом [account.saveMusic](/method/account.saveMusic/) можно заполнить также флаг `after_id`, чтобы указать, что композицию из поля `id` следует поместить после композиции, переданной в `after_id` (она уже обязана присутствовать в списке сохранённых). Так же можно поступить, если композиция из `id` уже есть в списке сохранённых, — чтобы изменить порядок записей.  
Повторное добавление уже добавленной композиции никогда не создаёт дубликат: она лишь перемещается в начало списка (или сразу после композиции, переданной в `after_id`).  
Метод вернёт false, если переданный в `after_id` документ не является аудиозаписью, которая сейчас есть в профиле (например, если её удалил оттуда другой клиент).

Чтобы получить полный **неупорядоченный** список идентификаторов композиций, добавленных нами в профиль, используйте [account.getSavedMusicIds](/method/account.getSavedMusicIds/): этот метод не требует постраничной выборки, поскольку возвращает только идентификаторы документов, без самих объектов документов. С его помощью можно быстро проверить, не добавились ли в наш профиль новые композиции (но не отследить изменение их порядка), если заполнено поле `hash`, вычисленное [обычным способом](/api/offsets/#hash-generation) по возвращённым идентификаторам.

Как уже сказано выше, для получения упорядоченного списка композиций в любом профиле, включая наш собственный, используйте [users.getSavedMusic](/method/users.getSavedMusic/).

[@term:file_reference] Метод [users.getSavedMusicByID](/method/users.getSavedMusicByID/) принимает список аудиозаписей в виде конструкторов [inputDocument](/constructor/inputDocument/) и возвращает соответствующие [document](/constructor/document/) только для тех из них, что сейчас закреплены в профиле указанного пользователя. Хотя с его помощью _можно_ проверять, остались ли те или иные композиции закреплёнными в профиле, основное его назначение — заново получать просроченные [ссылки на файлы](/api/file-references/) (`file_reference` — короткий маркер, подтверждающий право на скачивание файла) для композиций, ранее увиденных в профиле пользователя: только в этом методе у передаваемого [inputDocument](/constructor/inputDocument/) допускается пустое поле `file_reference`, и метод вернёт обновлённую ссылку, если аудиозапись всё ещё закреплена в профиле (этот случай уже автоматически покрывается [картой ссылок на файлы](/api/file-references/)).

#### Медиа

```
profileTabMedia#72c64955 = ProfileTab;
```

На этой вкладке отображаются видео и фотографии, которыми обменивались в чате; они запрашиваются методом [messages.search](/method/messages.search/) с фильтром [inputMessagesFilterPhotoVideo](/constructor/inputMessagesFilterPhotoVideo/), подробнее см. [здесь »](/api/search/).

Доступна и пользователям, и каналам.

#### Голосовые сообщения

```
profileTabVoice#e477092e = ProfileTab;
```

На этой вкладке отображаются голосовые сообщения из чата; они запрашиваются методом [messages.search](/method/messages.search/) с фильтром [inputMessagesFilterVoice](/constructor/inputMessagesFilterVoice/), подробнее см. [здесь »](/api/search/).

Доступна и пользователям, и каналам.

#### Ссылки

```
profileTabLinks#d3656499 = ProfileTab;
```

На этой вкладке отображаются голосовые сообщения из чата; они запрашиваются методом [messages.search](/method/messages.search/) с фильтром [inputMessagesFilterUrl](/constructor/inputMessagesFilterUrl/), подробнее см. [здесь »](/api/search/).

[@note] В оригинале этот абзац дословно повторяет описание вкладки с голосовыми сообщениями — очевидная опечатка. Судя по фильтру `inputMessagesFilterUrl`, на вкладке «Ссылки» показываются ссылки, которыми обменивались в чате.

Доступна и пользователям, и каналам.

#### Gif-анимации

```
profileTabGifs#a2c0f695 = ProfileTab;
```

На этой вкладке отображаются gif-анимации из чата; они запрашиваются методом [messages.search](/method/messages.search/) с фильтром [inputMessagesFilterGif](/constructor/inputMessagesFilterGif/), подробнее см. [здесь »](/api/search/).

Доступна и пользователям, и каналам.
