---
title: "Панель действий"
original: "https://core.telegram.org/api/action-bar"
section: api
description: "Иногда при взаимодействии с пользователями Telegram в личных или секретных чатах поверх чата требуется показать панель действий (action bar) с удобными кнопками или уведомлениями,…"
layout: layout.njk
---

# Панель действий

Иногда при взаимодействии с пользователями Telegram в личных или секретных чатах поверх чата требуется показать панель действий (action bar) с удобными кнопками или уведомлениями, касающимися этого пользователя.

Схема:

```
peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;

userFull#6cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;

updatePeerSettings#6a7e7366 peer:Peer settings:PeerSettings = Update;

messages.peerSettings#6880b94d settings:PeerSettings chats:Vector<Chat> users:Vector<User> = messages.PeerSettings;

---functions---

messages.getPeerSettings#efd9a6a2 peer:InputPeer = messages.PeerSettings;

messages.hidePeerSettingsBar#4facb138 peer:InputPeer = Bool;
```

Панель действий описывается конструктором [peerSettings](/constructor/peerSettings/), который можно получить методом [messages.getPeerSettings](/method/messages.getPeerSettings/); кроме того, она входит в конструктор [userFull](/constructor/userFull/), возвращаемый методом [users.getFullUser](/method/users.getFullUser/).

Об изменениях панели чата сервер также может уведомлять с помощью [updatePeerSettings](/constructor/updatePeerSettings/).

Активную в данный момент панель действий можно скрыть методом [messages.hidePeerSettingsBar](/method/messages.hidePeerSettingsBar/).

Далее перечислены различные (_взаимоисключающие_) типы панели чата, и для каждого указано **условие**, по которому этот тип распознаётся — проверка соответствующих флагов конструктора [peerSettings](/constructor/peerSettings/).

### Пожаловаться на спам, заблокировать или добавить в контакты

```
inputReportReasonSpam#58dbcab8 = ReportReason;

---functions---

account.reportPeer#c5ba3d86 peer:InputPeer reason:ReportReason message:string = Bool;

contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;

contacts.block#2e2e8734 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;
```

Эта панель действий, относящаяся к личному или секретному чату, предлагает пользователю кнопки, позволяющие:

-   Пожаловаться на чат как на спам с помощью [account.reportPeer](/method/account.reportPeer/) и [inputReportReasonSpam](/constructor/inputReportReasonSpam/).  
    Если у собеседника есть эмодзи-статус, панели следует также показать примечание: эмодзи-статус отображается рядом с именем пользователя потому, что тот приобрёл [Telegram Premium](/api/premium/) (это помогает избежать недоразумений, если пользователь выбрал эмодзи-статус, похожий на галочку верификации).  
    Кроме того, если чат был автоматически [помещён в архив »](/api/folders/#peer-folders) (согласно [peerSettings](/constructor/peerSettings/).`autoarchived`), вместо жалобы можно показать дополнительную кнопку, которая извлекает чат из архива [так, как описано здесь »](/api/folders/#peer-folders).
-   Добавить собеседника в список контактов с помощью [contacts.addContact](/method/contacts.addContact/).  
    Дополнительно может быть установлен флаг [peerSettings](/constructor/peerSettings/).`need_contacts_exception`: в этом случае при нажатии пользователем кнопки добавления в контакты в вызове [contacts.addContact](/method/contacts.addContact/) **обязан** быть установлен флаг `add_phone_privacy_exception`.
-   Запретить собеседнику писать нам с помощью [contacts.block](/method/contacts.block/) (не устанавливая флаг `my_stories_from`).

**Условие**: должны быть установлены все три флага — [peerSettings](/constructor/peerSettings/).`report_spam`, [peerSettings](/constructor/peerSettings/).`add_contact` и [peerSettings](/constructor/peerSettings/).`block_contact`.

Кроме того, если установлен флаг [peerSettings](/constructor/peerSettings/).`geo_distance`, панели следует также показать расстояние между нами и этим пользователем и пояснить, что пользователь нашёл нас вызовом [contacts.getLocated](/method/contacts.getLocated/), поскольку мы сейчас сообщаем своё местоположение тем же методом.

#### Сведения об аккаунте

```
peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;
```

Когда пользователь пишет вам впервые, в его конструкторе [peerSettings](/constructor/peerSettings/) будут установлены флаги `registration_month`, `phone_country`, `name_change_date` и `photo_change_date`: по этим полям следует построить информационную врезку со следующими сведениями:

-   `registration_month` — служит для показа года и месяца регистрации пользователя; строка имеет формат `MM.YYYY`, где `MM` — месяц регистрации (`1-12`), а `YYYY` — год регистрации.
-   `phone_country` — код страны телефонного номера пользователя.
-   `name_change_date` — когда пользователь в последний раз менял имя.
-   `photo_change_date` — когда пользователь в последний раз менял фотографию.

Эти сведения могут пригодиться пользователям, чтобы распознать и [заблокировать](#report-spam-block-or-add-contact) спам или недавно угнанные аккаунты.

### Пожаловаться на спам или извлечь из архива

```
inputReportReasonSpam#58dbcab8 = ReportReason;

---functions---

account.reportPeer#c5ba3d86 peer:InputPeer reason:ReportReason message:string = Bool;
```

Эта панель действий, относящаяся к личному или секретному чату, предлагает пользователю кнопку, позволяющую пожаловаться на чат как на спам с помощью [account.reportPeer](/method/account.reportPeer/) и [inputReportReasonSpam](/constructor/inputReportReasonSpam/).

Если у собеседника есть эмодзи-статус, панели следует также показать примечание: эмодзи-статус отображается рядом с именем пользователя потому, что тот приобрёл [Telegram Premium](/api/premium/) (это помогает избежать недоразумений, если пользователь выбрал эмодзи-статус, похожий на галочку верификации).

**Условие**: флаг [peerSettings](/constructor/peerSettings/).`report_spam` должен быть установлен, а флаги [peerSettings](/constructor/peerSettings/).`add_contact` и [peerSettings](/constructor/peerSettings/).`block_contact` установлены быть **не** должны.

Кроме того, если чат был автоматически [помещён в архив »](/api/folders/#peer-folders) (согласно [peerSettings](/constructor/peerSettings/).`autoarchived`), вместо жалобы можно показать дополнительную кнопку, которая извлекает чат из архива [так, как описано здесь »](/api/folders/#peer-folders).

### Добавление контакта

```
---functions---

contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
```

Эта панель действий, относящаяся к личному или секретному чату, предлагает пользователю кнопку, позволяющую добавить собеседника в список контактов с помощью [contacts.addContact](/method/contacts.addContact/).

**Условия**: должен быть установлен флаг [peerSettings](/constructor/peerSettings/).`add_contact` **и**:

-   для секретных чатов чат **не** должен быть в архиве;
-   для личных чатов флаги `block_contact` и `report_spam` **не** должны быть установлены.

Дополнительно может быть установлен флаг [peerSettings](/constructor/peerSettings/).`need_contacts_exception`: в этом случае при нажатии пользователем кнопки добавления контакта в вызове [contacts.addContact](/method/contacts.addContact/) **обязан** быть установлен флаг `add_phone_privacy_exception`.

### Передача номера телефона

```
---functions---

contacts.acceptContact#f831a20f id:InputUser = Updates;
```

Эта панель действий, относящаяся к личному или секретному чату, предлагает пользователю кнопку, позволяющую поделиться своим номером телефона с собеседником с помощью [contacts.acceptContact](/method/contacts.acceptContact/).

**Условие**: должен быть установлен флаг [peerSettings](/constructor/peerSettings/).`share_contact`.

Этот флаг устанавливается, а панель включается только в том случае, если собеседник добавил нас в контакты через [contacts.addContact](/method/contacts.addContact/), не указывая номера телефона, и при этом не установлен ни один из флагов `add_contact`, `report_spam`, `block_contact`.

### Жалоба на нерелевантную геолокацию

```
inputReportReasonGeoIrrelevant#dbd4feed = ReportReason;

---functions---

account.reportPeer#c5ba3d86 peer:InputPeer reason:ReportReason message:string = Bool;
```

Эта панель показывает, что на связанную с ней супергруппу по местоположению можно пожаловаться за то, что она не имеет отношения к указанному месту: кнопка панели вызывает [account.reportPeer](/method/account.reportPeer/) с параметром `reason`, равным [inputReportReasonGeoIrrelevant](/constructor/inputReportReasonGeoIrrelevant/).

**Условие**: должен быть установлен флаг [peerSettings](/constructor/peerSettings/).`report_geo`.

### Приглашение новых участников

```
---functions---

messages.addChatUser#cbc6d107 chat_id:long user_id:InputUser fwd_limit:int = messages.InvitedUsers;

channels.inviteToChannel#c9e33d54 channel:InputChannel users:Vector<InputUser> = messages.InvitedUsers;
```

[@term:peer] Эта панель показывает, что связанная с ней группа создана недавно, и предлагает кнопку для приглашения новых участников с помощью [messages.addChatUser](/method/messages.addChatUser/) или [channels.inviteToChannel](/method/channels.inviteToChannel/) — смотря чем оказался соответствующий пир (`peer` — собеседник, группа или канал, к которому относится панель): [группой или супергруппой](/api/channel/).

**Условие**: должен быть установлен флаг [peerSettings](/constructor/peerSettings/).`invite_members`.

### С вами связывается администратор по недавней заявке на вступление

Эта панель показывает, что связанный с ней личный или секретный чат — это чат с администратором [группы или канала](/api/channel/), куда пользователь отправил заявку на вступление, [подробнее о заявках на вступление здесь »](/api/invites/#join-requests).

**Условие**: в конструкторе [peerSettings](/constructor/peerSettings/) должны быть установлены оба поля — `request_chat_title` и `request_chat_date`; дополнительно может быть установлен `request_chat_broadcast`:

-   `request_chat_title` — содержит название группы или канала.
-   `request_chat_date` — содержит метку времени, указывающую, когда была отправлена заявка на вступление.
-   `request_chat_broadcast` — этот флаг установлен, если заявка относится к каналу (в противном случае заявка относится к группе).

### Управление подключённым бизнес-ботом

Эта панель показывает, что связанным с ней личным (не секретным) чатом _с другим пользователем_ сейчас управляет [бизнес-бот, подключённый к нашему текущему аккаунту »](/api/bots/connected-business-bots/).

**Условие**: в конструкторе [peerSettings](/constructor/peerSettings/) должны быть установлены оба поля — `business_bot_id` и `business_bot_manage_url`; дополнительно могут быть установлены `business_bot_paused` и (или) `business_bot_can_reply`:

-   `business_bot_id` — содержит идентификатор [бизнес-бота »](/api/bots/connected-business-bots/), управляющего этим чатом; используется для отображения сведений о боте в панели действий.
-   [@term:deep link] `business_bot_manage_url` — содержит [глубокую ссылку »](/api/links/) (`deep link` — ссылку, которая открывает нужный экран прямо в приложении), с помощью которой открывается меню управления в бизнес-боте.
-   `business_bot_paused` — приостановлена ли работа бизнес-бота в этом чате через [account.toggleConnectedBotPaused »](/method/account.toggleConnectedBotPaused/).
-   `business_bot_can_reply` — может ли бизнес-бот отвечать на сообщения в этом чате; определяется настройками, заданными при [первоначальной настройке](/api/bots/connected-business-bots/).

Основной кнопкой действия на панели должна быть кнопка «Приостановить»/«Возобновить», вызывающая [account.toggleConnectedBotPaused »](/method/account.toggleConnectedBotPaused/).

Выпадающее меню панели действий должно содержать:

-   кнопку управления ботом, открывающую глубокую ссылку из `business_bot_manage_url`;
-   кнопку отключения бота от этого чата: при нажатии она должна вызывать [account.disablePeerConnectedBot »](/method/account.toggleConnectedBotPaused/), чтобы навсегда отключить бота от этого пира (это также скроет панель действий, сбросив поля `business_bot_manage_url` и `business_bot_id`).

Подробнее о бизнес-ботах см. [здесь »](/api/bots/connected-business-bots/).

### Реклама ботов

Эта панель содержит [рекламные объявления](/api/sponsored-messages/).

**Условие**: текущий чат — это личный чат с ботом, и метод [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/) вернул для этого бота хотя бы одно рекламное сообщение.

Подробнее о том, как отображать эту панель действий, см. [здесь »](/api/sponsored-messages/#displaying-sponsored-messages).
