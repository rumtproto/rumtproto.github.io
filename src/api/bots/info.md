---
title: "Изменение информации о боте"
original: "https://core.telegram.org/api/bots/info"
section: api
description: "Пользователи могут изменять и локализовать аватар, имя, текст «о боте» и описание принадлежащих им ботов; то же самое могут делать и сами боты."
layout: layout.njk
---

# Изменение информации о боте

Пользователи могут изменять и локализовать аватар, имя, текст «о боте» и описание принадлежащих им [ботов](/api/bots/); то же самое могут делать и сами боты.

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

bots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;

---functions---

bots.getBotInfo#dcd914fd flags:# bot:flags.0?InputUser lang_code:string = bots.BotInfo;
bots.setBotInfo#10cf3123 flags:# bot:flags.2?InputUser lang_code:string name:flags.3?string about:flags.0?string description:flags.1?string = Bool;

photos.uploadProfilePhoto#388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;    
```

[@term:lang_code] Боты могут вызвать [bots.setBotInfo](/method/bots.setBotInfo/), чтобы задать локализованную версию своего имени, текста «о боте» и описания (язык версии указывается в параметре `lang_code` — код языка вида `en`, `ru`); а чтобы получить ранее заданные значения, можно вызвать [bots.getBotInfo](/method/bots.getBotInfo/).  
Кроме того, боты могут вызвать [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/) — так, как описано в [документации по файлам »](/api/files/#uploading-profile-or-chat-pictures), — чтобы задать фотографии, видео или стикеры профиля.

[@term:peer] Те же методы может вызывать пользователь, которому принадлежит бот (у ботов, принадлежащих текущему пользователю, установлен флаг [user](/constructor/user/).`bot_can_edit`), чтобы изменить информацию о боте: для этого нужно указать данные пира (`peer` — идентификатор собеседника, здесь самого бота) в параметре `bot`.
