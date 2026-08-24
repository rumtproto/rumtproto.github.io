---
title: "userFull"
original: "https://core.telegram.org/constructor/userFull"
section: ref
kind: constructor
description: "Расширенные сведения о пользователе"
layout: layout.njk
---

# userFull

Расширенные сведения о пользователе

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

```
userFull#a02bc13e flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities = UserFull;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Заблокировали ли вы этого пользователя</td></tr><tr><td><strong>phone_calls_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Может ли этот пользователь совершать VoIP-звонки</td></tr><tr><td><strong>phone_calls_private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Разрешают ли настройки приватности этого пользователя звонить ему</td></tr><tr><td><strong>can_pin_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Можете ли вы закреплять сообщения в чате с этим пользователем; это возможно только в чате с самим собой</td></tr><tr><td><strong>has_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Доступны ли <a href="/api/scheduled-messages">отложенные сообщения</a></td></tr><tr><td><strong>video_calls_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Может ли пользователь принимать видеозвонки</td></tr><tr><td><strong>voice_messages_forbidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/constructor/true">true</a></td><td>Запрещает ли этот пользователь отправлять голосовые сообщения в личном чате с ним</td></tr><tr><td><strong>translations_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/constructor/true">true</a></td><td>Следует ли скрыть <a href="/api/translation">всплывающее окно перевода чата в реальном времени</a>.</td></tr><tr><td><strong>stories_pinned_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.26?<a href="/constructor/true">true</a></td><td>Есть ли у этого пользователя <a href="/api/stories#pinned-or-archived-stories">закреплённые истории</a>.</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.27?<a href="/constructor/true">true</a></td><td><a href="/api/block">Заблокировали ли мы этого пользователя, запретив ему просматривать наши истории »</a>.</td></tr><tr><td><strong>wallpaper_overridden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/constructor/true">true</a></td><td>Выбрал ли другой пользователь обои для нас с помощью <a href="/method/messages.setChatWallPaper">messages.setChatWallPaper</a> и флага <code>for_both</code>; подробнее <a href="/api/wallpapers#installing-wallpapers-in-a-specific-chat-or-channel">см. здесь »</a>.</td></tr><tr><td><strong>contact_require_premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.29?<a href="/constructor/true">true</a></td><td>Если установлено, мы не можем писать этому пользователю: оформите подписку <a href="/api/premium">Telegram Premium</a>, чтобы получить право писать ему.<br>Чтобы установить этот флаг для себя, вызовите <a href="/method/account.setGlobalPrivacySettings">account.setGlobalPrivacySettings</a>, задав флаг <code>settings.new_noncontact_peers_require_premium</code>; подробнее см. <a href="/api/privacy#require-premium-for-new-non-contact-users">здесь »</a>.</td></tr><tr><td><strong>read_dates_private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.30?<a href="/constructor/true">true</a></td><td>Если установлено, мы не можем получить точную дату прочтения отправленных этому пользователю сообщений с помощью <a href="/method/messages.getOutboxReadDate">messages.getOutboxReadDate</a>.<br>Точная дата прочтения сообщений может быть недоступна и по другим причинам, подробнее см. <a href="/method/messages.getOutboxReadDate">здесь »</a>.<br>Чтобы установить этот флаг для себя, вызовите <a href="/method/account.setGlobalPrivacySettings">account.setGlobalPrivacySettings</a>, задав флаг <code>settings.hide_read_marks</code>.</td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>sponsored_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.7?<a href="/constructor/true">true</a></td><td>Была ли реклама снова включена для текущего аккаунта (доступно только пользователю, вошедшему в систему), подробнее см. <a href="/api/business#re-enable-ads">здесь »</a>.</td></tr><tr><td><strong>can_view_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.9?<a href="/constructor/true">true</a></td><td>Если установлено, этот пользователь может просматривать <a href="/api/revenue#revenue-statistics">статистику доходов от рекламы »</a> для этого бота.</td></tr><tr><td><strong>bot_can_manage_emoji_status</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.10?<a href="/constructor/true">true</a></td><td>Если установлено, это бот, который может <a href="/api/emoji-status#setting-an-emoji-status-from-a-bot">менять наш эмодзи-статус »</a></td></tr><tr><td><strong>display_gifts_button</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.16?<a href="/constructor/true">true</a></td><td>Если этот флаг установлен и у нас, и у другого пользователя (изменяется через <a href="/constructor/globalPrivacySettings">globalPrivacySettings</a>), в текстовом поле личных чатов с этим пользователем всегда должна отображаться кнопка подарка: по нажатию должен открываться интерфейс подарков, предлагающий подарить подписку <a href="/api/premium">Telegram Premium »</a> или <a href="/api/gifts">подарки Telegram »</a>.</td></tr><tr><td><strong>noforwards_my_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.23?<a href="/constructor/true">true</a></td><td>Если установлено, мы включили в данном личном чате <a href="/api/content-protection#for-users">защиту контента »</a>.</td></tr><tr><td><strong>noforwards_peer_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.24?<a href="/constructor/true">true</a></td><td>Если установлено, этот пользователь включил в данном личном чате <a href="/api/content-protection#for-users">защиту контента »</a>.</td></tr><tr><td><strong>unofficial_security_risk</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.26?<a href="/constructor/true">true</a></td><td>Если установлено, этот пользователь использует неофициальный клиент Telegram, и отправляемые ему сообщения могут быть менее защищёнными; клиентам следует показывать предупреждение в профиле пользователя.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Биография пользователя</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/PeerSettings">PeerSettings</a></td><td>Настройки пира</td></tr><tr><td><strong>personal_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/Photo">Photo</a></td><td>Персональная фотография профиля, показываемая вместо <code>profile_photo</code>.</td></tr><tr><td><strong>profile_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Photo">Photo</a></td><td>Фотография профиля</td></tr><tr><td><strong>fallback_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/type/Photo">Photo</a></td><td>Запасная фотография профиля, отображаемая, если из-за настроек приватности отсутствует фотография в <code>profile_photo</code> или <code>personal_photo</code>.</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings">PeerNotifySettings</a></td><td>Настройки уведомлений</td></tr><tr><td><strong>bot_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/BotInfo">BotInfo</a></td><td>Для ботов — сведения о боте (команды бота и т. д.)</td></tr><tr><td><strong>pinned_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Идентификатор последнего <a href="/api/pin">закреплённого сообщения</a></td></tr><tr><td><strong>common_chats_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общие с этим пользователем чаты</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Идентификатор папки пира, подробнее см. здесь</a></td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/int">int</a></td><td>Время жизни всех сообщений в этом чате: как только сообщению исполнится столько секунд, оно должно быть удалено.</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/ChatTheme">ChatTheme</a></td><td><a href="/api/themes#chat-themes">Тема оформления чата, связанная с этим пользователем »</a>.</td></tr><tr><td><strong>private_forward_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/type/string">string</a></td><td>Анонимный текст, который следует показывать вместо имени пользователя в пересланных сообщениях</td></tr><tr><td><strong>bot_group_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td><a href="/api/rights#suggested-bot-rights">Рекомендуемый набор прав администратора</a> для бота, который следует показать при добавлении бота администратором в группу; подробнее о том, как их обрабатывать, см. <a href="/api/rights#suggested-bot-rights">здесь »</a>.</td></tr><tr><td><strong>bot_broadcast_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td><a href="/api/rights#suggested-bot-rights">Рекомендуемый набор прав администратора</a> для бота, который следует показать при добавлении бота администратором в канал; подробнее о том, как их обрабатывать, см. <a href="/api/rights#suggested-bot-rights">здесь »</a>.</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/type/WallPaper">WallPaper</a></td><td><a href="/api/wallpapers">Обои</a> для использования в личном чате с пользователем.</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/type/PeerStories">PeerStories</a></td><td>Активные <a href="/api/stories">истории »</a></td></tr><tr><td><strong>business_work_hours</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.0?<a href="/type/BusinessWorkHours">BusinessWorkHours</a></td><td><a href="/api/business#opening-hours">Часы работы Telegram Business »</a>.</td></tr><tr><td><strong>business_location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.1?<a href="/type/BusinessLocation">BusinessLocation</a></td><td><a href="/api/business#location">Местоположение Telegram Business »</a>.</td></tr><tr><td><strong>business_greeting_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.2?<a href="/type/BusinessGreetingMessage">BusinessGreetingMessage</a></td><td><a href="/api/business#greeting-messages">Приветственное сообщение Telegram Business »</a>.</td></tr><tr><td><strong>business_away_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.3?<a href="/type/BusinessAwayMessage">BusinessAwayMessage</a></td><td><a href="/api/business#away-messages">Сообщение об отсутствии Telegram Business »</a>.</td></tr><tr><td><strong>business_intro</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.4?<a href="/type/BusinessIntro">BusinessIntro</a></td><td>Задаёт пользовательское <a href="/api/business#business-introduction">представление профиля Telegram Business »</a>.</td></tr><tr><td><strong>birthday</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.5?<a href="/type/Birthday">Birthday</a></td><td>Содержит информацию о <a href="/api/profile#birthday">дне рождения »</a> пользователя.</td></tr><tr><td><strong>personal_channel_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.6?<a href="/type/long">long</a></td><td>Идентификатор привязанного личного <a href="/api/channel">канала »</a>, который следует показывать на <a href="/api/profile#personal-channel">странице профиля</a>.</td></tr><tr><td><strong>personal_channel_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.6?<a href="/type/int">int</a></td><td>Идентификатор последнего сообщения связанного персонального <a href="/api/channel">канала »</a>, которое следует показывать на <a href="/api/profile#personal-channel">странице профиля</a>.</td></tr><tr><td><strong>stargifts_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.8?<a href="/type/int">int</a></td><td>Количество <a href="/api/gifts">подарков</a>, которые пользователь решил показывать в своём профиле</td></tr><tr><td><strong>starref_program</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.11?<a href="/type/StarRefProgram">StarRefProgram</a></td><td>У этого бота есть действующая <a href="/api/bots/referrals">реферальная программа »</a></td></tr><tr><td><strong>bot_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.12?<a href="/type/BotVerification">BotVerification</a></td><td>Описывает <a href="/api/bots/verification">значок верификации бота »</a>.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.14?<a href="/type/long">long</a></td><td>Если установлено и больше 0, этот пользователь включил <a href="/api/paid-messages">платные сообщения »</a>, и мы <em>обязаны</em> заплатить указанное количество <a href="/api/stars">Stars</a>, чтобы отправлять ему сообщения; полное описание процесса см. <a href="/api/paid-messages">здесь »</a>.<br>Если установлено и равно 0, пользователь в целом требует оплаты, но мы освобождены от неё <a href="/api/paid-messages">по одной из причин, указанных в документации »</a>.</td></tr><tr><td><strong>disallowed_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.15?<a href="/type/DisallowedGiftsSettings">DisallowedGiftsSettings</a></td><td>Запрещает получение определённых типов подарков.</td></tr><tr><td><strong>stars_rating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.17?<a href="/type/StarsRating">StarsRating</a></td><td><a href="/api/stars#star-rating">Звёздный рейтинг</a> пользователя.</td></tr><tr><td><strong>stars_my_pending_rating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.18?<a href="/type/StarsRating">StarsRating</a></td><td>Наш ожидающий <a href="/api/stars#star-rating">звёздный рейтинг</a>, виден только нам самим.</td></tr><tr><td><strong>stars_my_pending_rating_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.18?<a href="/type/int">int</a></td><td>Когда будет применён ожидающий <a href="/api/stars#star-rating">звёздный рейтинг</a>; виден только нам самим.</td></tr><tr><td><strong>main_tab</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.20?<a href="/type/ProfileTab">ProfileTab</a></td><td>Основная вкладка профиля пользователя, <a href="/api/profile#tabs">подробнее здесь »</a>.</td></tr><tr><td><strong>saved_music</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.21?<a href="/type/Document">Document</a></td><td>Первая композиция на вкладке музыки в профиле; подробнее о вкладке музыки в профиле см. <a href="/api/profile#music">здесь »</a>.</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.22?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Личная заметка об этом контакте, видимая только нам; подробнее о заметках о контактах см. <a href="/api/contacts#private-notes-for-contacts">здесь »</a>.</td></tr><tr><td><strong>bot_manager_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.25?<a href="/type/long">long</a></td><td>Если этот пользователь является <a href="/api/bots/managed-bots">управляемым ботом »</a> — идентификатор пользователя или бота-менеджера, который им управляет.</td></tr></tbody></table>

### Тип

[UserFull](/type/UserFull/)

### Связанные страницы

#### [Отложенные сообщения](/api/scheduled-messages/)

Telegram позволяет планировать отправку сообщений

#### [Перевод сообщений](/api/translation/)

Telegram позволяет переводить сообщения в чатах: пользователи Telegram Premium могут даже включить перевод чата в реальном времени.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [Заблокированные пользователи](/api/block/)

Работа со списком заблокированных.

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Установить пользовательские [обои »](/api/wallpapers/) в конкретном личном чате с другим пользователем.

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/)

Задать глобальные настройки приватности

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/)

Получить точную дату прочтения одного из наших сообщений, отправленных в личный чат с другим пользователем.

Возможно только для исходящих личных сообщений не старше [appConfig.pm\_read\_date\_expire\_period »](/api/config/#pm-read-date-expire-period).

[@term:peer] Если у `peer` установлен флаг [userFull](/constructor/userFull/).`read_dates_private`, мы не сможем получить точную дату прочтения отправленных ему сообщений, и будет возвращена ошибка RPC `USER_PRIVACY_RESTRICTED`.  
Точная дата прочтения сообщений может быть недоступна и по другим причинам, подробнее [см. здесь »](/constructor/globalPrivacySettings/).  
Чтобы установить [userFull](/constructor/userFull/).`read_dates_private` для себя, вызовите [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), установив флаг `settings.hide_read_marks`.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Доход от рекламы в каналах и ботах](/api/revenue/)

В Telegram действует одна из самых щедрых систем вознаграждения в истории социальных сетей. Владельцы каналов и ботов Telegram теперь могут получать 50% дохода от рекламы, показанной в их каналах и ботах. На этой странице описаны методы для вывода дохода от рекламы в каналах и ботах, а также для просмотра подробной статистики доходов.

#### [Эмодзи-статус](/api/emoji-status/)

Telegram позволяет пользователям выбрать эмотикон или пользовательский эмодзи в качестве статуса, который отображается рядом с их именем в чатах и профилях.

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Глобальные настройки приватности

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Защита контента](/api/content-protection/)

Пользователи и боты, желающие сохранить приватность своих сообщений, а также владельцы групп и каналов, желающие оставить свой контент доступным только участникам, могут включить защиту контента: она препятствует созданию снимков экрана и копированию, отключает пересылку сообщений и ограничивает возможность сохранять медиа из публикаций.

#### [Закреплённые сообщения](/api/pin/)

Telegram позволяет закреплять несколько сообщений вверху конкретного чата.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Список контактов](/api/contacts/)

Работа с контактами.

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
