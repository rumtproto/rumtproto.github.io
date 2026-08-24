---
title: "Пункты меню вложений и бокового меню для ботов"
original: "https://core.telegram.org/api/bots/attach"
section: api
description: "Боты могут устанавливать пункты в меню вложений и в боковом меню, предлагая удобно доступные и многофункциональные mini apps (Mini App — веб-приложение, которое открывается прямо…"
layout: layout.njk
---

# Пункты меню вложений и бокового меню для ботов

[@term:Mini App] Боты могут устанавливать пункты в меню вложений и в боковом меню, предлагая всегда доступные под рукой и универсальные [Mini App](/api/bots/webapps/#attachment-menu-mini-apps) (Mini App — веб-приложение, которое открывается прямо внутри клиента Telegram).

Схема:

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

attachMenuBotsBot#93bf667f bot:AttachMenuBot users:Vector<User> = AttachMenuBotsBot;

attachMenuBot#d90d8dfe flags:# inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:long short_name:string peer_types:flags.3?Vector<AttachMenuPeerType> icons:Vector<AttachMenuBotIcon> = AttachMenuBot;

attachMenuPeerTypeSameBotPM#7d6be90e = AttachMenuPeerType;
attachMenuPeerTypeBotPM#c32bfa1a = AttachMenuPeerType;
attachMenuPeerTypePM#f146d31f = AttachMenuPeerType;
attachMenuPeerTypeChat#0509113f = AttachMenuPeerType;
attachMenuPeerTypeBroadcast#7bfbdefc = AttachMenuPeerType;

attachMenuBotIcon#b2a7386b flags:# name:string icon:Document colors:flags.0?Vector<AttachMenuBotIconColor> = AttachMenuBotIcon;

attachMenuBotIconColor#4576f3f0 name:string color:int = AttachMenuBotIconColor;


updateAttachMenuBots#17b7a20b = Update;

attachMenuBotsNotModified#f1d88a5c = AttachMenuBots;
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;


---functions---

messages.getAttachMenuBot#77216192 bot:InputUser = AttachMenuBotsBot;

messages.toggleBotInAttachMenu#69f59d69 flags:# write_allowed:flags.0?true bot:InputUser enabled:Bool = Bool;

messages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;
```

Боты с установленным флагом `bot_attach_menu` предлагают пункт меню вложений или бокового меню, который можно добавить во встроенное меню вложений или в боковое меню главного экрана приложения.

Чтобы получить сведения о пункте меню вложений или бокового меню конкретного бота, используйте [messages.getAttachMenuBot](/method/messages.getAttachMenuBot/), см. [страницу конструктора attachMenuBot, где есть подробности »](/constructor/attachMenuBot/).

Список установленных пунктов меню вложений и бокового меню можно получить методом [messages.getAttachMenuBots](/method/messages.getAttachMenuBots/).

Чтобы включить или выключить меню вложений и/или боковое меню конкретного бота, используйте [messages.toggleBotInAttachMenu](/method/messages.toggleBotInAttachMenu/) (какие именно пункты нужно установить или удалить, определяется значениями флагов [attachMenuBot](/constructor/attachMenuBot/).`show_in_attach_menu` и [attachMenuBot](/constructor/attachMenuBot/).`show_in_side_menu`).  
Изменения, внесённые этим методом, вызывают обновление [updateAttachMenuBots](/constructor/updateAttachMenuBots/) в других клиентах, а оно, в свою очередь, должно приводить к вызову [messages.getAttachMenuBots](/method/messages.getAttachMenuBots/) для получения полного обновлённого списка установленных пунктов меню вложений и бокового меню.  
Список пунктов меню вложений и бокового меню следует обновлять и в том случае, если пользователь сменил язык приложения в настройках.

Как только меню вложений или боковое меню включено для конкретного пользователя, флаг [user](/constructor/user/).`attach_menu_enabled` устанавливается _для этого бота_, а флаг [attachMenuBot](/constructor/attachMenuBot/).`inactive` снимается.

Нажатие на пункт меню вложений или бокового меню должно открывать связанное с ним [Mini App меню вложений](/api/bots/webapps/#attachment-menu-mini-apps); подробности о необходимых шагах см. [здесь »](/api/bots/webapps/#attachment-menu-mini-apps) и [здесь »](/api/bots/webapps/#side-menu-mini-apps).

[@term:deep link] Меню вложений можно устанавливать и открывать по [глубоким ссылкам на меню вложений или боковое меню](/api/links/#bot-attachment-or-side-menu-links) (`deep link` — ссылка, которая открывается самим приложением и сразу ведёт к нужному действию).

В частности, при нажатии на такую ссылку следует вызвать [messages.getAttachMenuBot](/method/messages.getAttachMenuBot/), чтобы проверить, есть ли у бота связанный пункт меню вложений или бокового меню, и если есть:

-   Если флаг [attachMenuBot](/constructor/attachMenuBot/).`inactive`:
    -   ...установлен — пункт меню вложений или бокового меню ещё не добавлен.  
        Поэтому, прежде чем запускать Mini App по нажатию на [глубокую ссылку на меню вложений или боковое меню](/api/links/#bot-attachment-or-side-menu-links), клиент должен показать пользователю запрос с предложением добавить Mini App в меню вложений или боковое меню.  
        Учтите: если установлен флаг [attachMenuBot](/constructor/attachMenuBot/).`side_menu_disclaimer_needed`, в окне установки следует дополнительно показать обязательный флажок согласия с [условиями использования Mini App](https://telegram.org/tos/mini-apps) и оговорку о том, что этот Mini App не связан с Telegram.  
        Если пользователь соглашается, вызовите [messages.toggleBotInAttachMenu](/method/messages.toggleBotInAttachMenu/) с установленным флагом `write_allowed` и переходите к следующему шагу, иначе прервите процесс.
    -   ...не установлен, но флаг [attachMenuBot](/constructor/attachMenuBot/).`side_menu_disclaimer_needed` всё же установлен, следует дополнительно показать обязательный флажок согласия с [условиями использования Mini App](https://telegram.org/tos/mini-apps) и оговорку о том, что этот Mini App не связан с Telegram.  
        Если пользователь соглашается, переходите к следующему шагу, иначе прервите процесс.
-   Откройте Mini App:
    -   Если это [прямая ссылка на Mini App](/api/links/#direct-mini-app-links), откройте Mini App независимо от того, какой чат Telegram открыт сейчас (более того, Mini App следует открыть, даже если сам клиент свёрнут), как описано [здесь »](/api/bots/webapps/#direct-link-mini-apps).
    -   Для [ссылок на меню вложений или боковое меню](/api/links/#bot-attachment-or-side-menu-links) проверьте по полю [attachMenuBot](/constructor/attachMenuBot/).`peer_types`, можно ли открыть меню вложений в чате выбранного типа.
        -   Если выбранный чат поддерживается, откройте [Mini App меню вложений »](/api/bots/webapps/#attachment-menu-mini-apps), как описано [здесь »](/api/bots/webapps/#attachment-menu-mini-apps).
        -   Иначе:
            -   Если пользователь только что установил меню вложений на шаге 1, сообщите ему, что меню вложений успешно установлено.
            -   Иначе сообщите пользователю, что веб-приложение из меню вложений нельзя открыть в указанном чате.
