---
title: "Коллекционные объекты Fragment"
original: "https://core.telegram.org/api/fragment"
section: api
description: "Пользователи Telegram могут упростить другим задачу связаться с ними или найти их публичные группы и каналы с помощью юзернеймов: кроме того, клиенты могут привязывать несколько…"
layout: layout.njk
---

# Коллекционные объекты Fragment

[@term:collectible username] Пользователи Telegram могут упростить другим задачу связаться с ними или найти их публичные группы и каналы с помощью [имён пользователя](https://telegram.org/faq#usernames-and-t-me): кроме того, клиенты могут присваивать аккаунтам, супергруппам и каналам, которыми владеют, несколько **коллекционных имён пользователя** с [Fragment »](https://fragment.com) (`collectible username` — имя, приобретённое на площадке Fragment и закреплённое за владельцем в блокчейне); [Fragment »](https://fragment.com) позволяет также покупать коллекционные номера телефона, на которые можно регистрировать аккаунты Telegram.

### Коллекционные имена пользователя

Схема:

```
username#b4073647 flags:# editable:flags.0?true active:flags.1?true username:string = Username;

updateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;

user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

---functions---

account.toggleUsername#58d6b376 username:string active:Bool = Bool;
account.reorderUsernames#ef500eab order:Vector<string> = Bool;

bots.reorderUsernames#9709b1c2 bot:InputUser order:Vector<string> = Bool;
bots.toggleUsername#053ca973 bot:InputUser username:string active:Bool = Bool;

channels.toggleUsername#50f24105 channel:InputChannel username:string active:Bool = Bool;
channels.reorderUsernames#b45ced1d channel:InputChannel order:Vector<string> = Bool;
channels.deactivateAllUsernames#0a245dd3 channel:InputChannel = Bool;
```

Коллекционные имена пользователя работают точно так же, как обычные [имена пользователя](https://t.me/username): они появляются в результатах глобального поиска и имеют [глубокие ссылки »](/api/links/#public-username-links) — ровно как и обычные имена.

Право владения коллекционными именами пользователя защищено сетью TON — быстрой и масштабируемой блокчейн-сетью. Их можно покупать и продавать на [платформе Fragment »](https://fragment.com), что даёт простой и надёжный способ приобретать ценные домены Telegram и обмениваться ими.

На платформе Fragment клиенты могут привязывать и отвязывать купленные коллекционные имена пользователя — либо к своему аккаунту Telegram, либо к принадлежащему им боту, каналу или супергруппе.

Если к аккаунту, каналу или супергруппе привязано хотя бы одно коллекционное имя пользователя, поля [user](/constructor/user/).`username` и [channel](/constructor/channel/).`username` заполнены не будут; вместо них будут заполнены поля [user](/constructor/user/).`usernames` и [channel](/constructor/channel/).`usernames`: они содержат массив конструкторов [username](/constructor/username/), которые показывают, обычное это имя (установлен флаг `editable`) или коллекционное (флаг `editable` не установлен), а для коллекционного — активно ли оно (флаг `active`).  
Первое имя в векторе `usernames` необходимо показывать в интерфейсе как основное.

Сразу после привязки имя пользователя помечено как не `active` (то есть в списке `usernames` его видит только владелец): чтобы пометить его активным, используйте [account.toggleUsername](/method/account.toggleUsername/), [bots.toggleUsername](/method/bots.toggleUsername/) или [channels.toggleUsername](/method/channels.toggleUsername/).  
Учтите, что обычное (не коллекционное) имя пользователя, если оно есть, пометить как неактивное нельзя.

Метод [channels.deactivateAllUsernames](/method/channels.deactivateAllUsernames/) позволяет также пометить как неактивные сразу все коллекционные имена, привязанные к определённой супергруппе или каналу: это удобно, например, когда группу или канал делают приватными — сначала вызывают [channels.updateUsername](/method/channels.updateUsername/) с пустым именем, чтобы убрать редактируемое имя (если оно есть), а затем вызывают этот метод, чтобы отключить все привязанные коллекционные имена.

Чтобы изменить порядок имён пользователя, привязанных к аккаунту, каналу или супергруппе, используйте [account.reorderUsernames](/method/account.reorderUsernames/)/[bots.reorderUsernames](/method/bots.reorderUsernames/)/[channels.reorderUsernames](/method/channels.reorderUsernames/): перечислить необходимо все имена, активные на данный момент.

### Коллекционные номера телефона

Коллекционные номера телефона [Fragment](https://fragment.com) можно использовать только для создания аккаунтов Telegram — через обычную [процедуру регистрации и входа »](/api/auth/).

### Получение сведений о коллекционных объектах Fragment

Схема:

```
inputCollectibleUsername#e39460a9 username:string = InputCollectible;
inputCollectiblePhone#a2e214a4 phone:string = InputCollectible;

fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;

---functions---

fragment.getCollectibleInfo#be1e85ba collectible:InputCollectible = fragment.CollectibleInfo;
```

Метод [fragment.getCollectibleInfo](/method/fragment.getCollectibleInfo/) позволяет получить сведения о коллекционном объекте [Fragment](https://fragment.com), принадлежащем нам или другим пользователям, — а именно дату и цену покупки.

Коллекционный объект должен быть виден текущему пользователю: это может быть наш собственный коллекционный объект Fragment (имя пользователя или номер телефона), либо имя пользователя Fragment, которое другой пользователь включил у себя в аккаунте, либо номер телефона Fragment другого пользователя, который виден нам благодаря его [настройкам конфиденциальности](/api/privacy/).
