---
title: "User"
original: "https://core.telegram.org/type/User"
section: ref
kind: type
description: "Объект описывает пользователя."
layout: layout.njk
---

# User

Объект описывает пользователя.

```
userEmpty#d3bc4b7a id:long = User;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

---functions---

account.updateProfile#78515775 flags:# first_name:flags.0?string last_name:flags.1?string about:flags.2?string = User;
account.updateUsername#3e0bdd7c username:string = User;
account.changePhone#70c32edb phone_number:string phone_code_hash:string phone_code:string = User;

contacts.importContactToken#13005788 token:string = User;

channels.getMessageAuthor#ece2a0e6 channel:InputChannel id:int = User;

messages.getFutureChatCreatorAfterLeave#3b7d0ea6 peer:InputPeer = User;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/userEmpty">userEmpty</a></td><td>Пустой конструктор, несуществующий пользователь.</td></tr><tr><td><a href="/constructor/user">user</a></td><td>Содержит сведения об определённом пользователе.<br><br>Если не указано иное, при обновлении <a href="/api/peers">локальной базы пиров</a> все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).<br><br>См. <a href="https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106">здесь »</a> реализацию логики, которую следует применять при обновлении <a href="/api/peers">локальной базы пиров-пользователей</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.updateProfile">account.updateProfile</a></td><td>Обновляет профиль пользователя.</td></tr><tr><td><a href="/method/account.updateUsername">account.updateUsername</a></td><td>Изменяет имя пользователя текущего аккаунта.</td></tr><tr><td><a href="/method/account.changePhone">account.changePhone</a></td><td>Изменить номер телефона текущего аккаунта</td></tr><tr><td><a href="/method/contacts.importContactToken">contacts.importContactToken</a></td><td>Получить сведения о пользователе по <a href="/api/links#temporary-profile-links">временной ссылке на профиль</a>.</td></tr><tr><td><a href="/method/messages.getFutureChatCreatorAfterLeave">messages.getFutureChatCreatorAfterLeave</a></td><td>Только для владельцев групп и каналов: возвращает идентификатор пользователя, который станет новым владельцем группы, если мы решим её покинуть; подробнее о полном порядке действий см. <a href="/api/channel#leaving-groups-channels">здесь »</a>.</td></tr><tr><td><a href="/method/channels.getMessageAuthor">channels.getMessageAuthor</a></td><td>Может быть вызван только администраторами <a href="/api/monoforum">монофорума »</a>, не являющимися ботами; возвращает исходного отправителя сообщения, отправленного в монофорум другими администраторами монофорума от имени канала, связанного с этим монофорумом.</td></tr><tr><td><a href="/method/bots.createBot">bots.createBot</a></td><td>Создать <a href="/api/bots/managed-bots#creating-a-managed-bot">управляемого бота »</a>, принадлежащего текущему пользователю и управляемого указанным ботом-менеджером.</td></tr></tbody></table>
