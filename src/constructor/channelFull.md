---
title: "channelFull"
original: "https://core.telegram.org/constructor/channelFull"
section: ref
kind: constructor
description: "Полная информация о канале, супергруппе или гигагруппе."
layout: layout.njk
---

# channelFull

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>can_view_participants</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Можем ли мы просматривать список участников?</td></tr><tr><td><strong>can_set_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Можем ли мы задать имя пользователя канала?</td></tr><tr><td><strong>can_set_stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Можем ли мы <a href="/method/channels.setStickers">привязать</a> набор стикеров к супергруппе?</td></tr><tr><td><strong>hidden_prehistory</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Скрыта ли от нас история, предшествующая нашему вступлению?</td></tr><tr><td><strong>can_set_location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>Можем ли мы задать геопозицию этой группы (для геогрупп)</td></tr><tr><td><strong>has_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Доступны ли отложенные сообщения</td></tr><tr><td><strong>can_view_stats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/constructor/true">true</a></td><td>Может ли пользователь просматривать <a href="/api/stats">статистику канала/супергруппы</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/constructor/true">true</a></td><td>Заблокированы ли анонимные администраторы этой супергруппы: если установлено, вы не будете получать сообщения от <a href="/api/rights#anonymous-admins">анонимных администраторов групп »</a> в <a href="/api/discussion">комментариях к обсуждениям через @replies</a></td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>can_delete_channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.0?<a href="/constructor/true">true</a></td><td>Можем ли мы удалить этот канал?</td></tr><tr><td><strong>antispam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.1?<a href="/constructor/true">true</a></td><td>Включена ли в этой супергруппе <a href="/api/antispam">встроенная защита от спама</a>.</td></tr><tr><td><strong>participants_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.2?<a href="/constructor/true">true</a></td><td>Скрыт ли список участников.</td></tr><tr><td><strong>translations_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.3?<a href="/constructor/true">true</a></td><td>Следует ли скрыть <a href="/api/translation">всплывающее окно перевода чата в реальном времени</a>.</td></tr><tr><td><strong>stories_pinned_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.5?<a href="/constructor/true">true</a></td><td>Есть ли у этого пользователя <a href="/api/stories#pinned-or-archived-stories">закреплённые истории</a>.</td></tr><tr><td><strong>view_forum_as_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.6?<a href="/constructor/true">true</a></td><td>Пользователи также могут выбрать отображение сообщений из всех тем <a href="/api/forum">форума</a> так, как если бы они были отправлены в обычную группу, с помощью настройки «Показывать как сообщения» в локальном клиенте.<br>Эта настройка влияет только на текущий аккаунт и синхронизируется с другими активными сессиями методом <a href="/method/channels.toggleViewForumAsMessages">channels.toggleViewForumAsMessages</a>; вызов этого метода изменит значение данного флага.</td></tr><tr><td><strong>restricted_sponsored</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.11?<a href="/constructor/true">true</a></td><td>Была ли реклама в этом канале <a href="/api/boost#disable-ads-on-the-channel">отключена так, как описано здесь »</a> (этот флаг виден только владельцу канала).</td></tr><tr><td><strong>can_view_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.12?<a href="/constructor/true">true</a></td><td>Если установлено, этот пользователь может просматривать <a href="/api/revenue#revenue-statistics">статистику доходов от рекламы »</a> для этого канала.</td></tr><tr><td><strong>paid_media_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.14?<a href="/constructor/true">true</a></td><td>Может ли текущий пользователь отправлять или пересылать <a href="/api/paid-media">платное медиа »</a> в этот канал.</td></tr><tr><td><strong>can_view_stars_revenue</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.15?<a href="/constructor/true">true</a></td><td>Если установлено, этот пользователь может просматривать <a href="/api/stars#revenue-statistics">статистику доходов в Telegram Stars »</a> для этого канала.</td></tr><tr><td><strong>paid_reactions_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.16?<a href="/constructor/true">true</a></td><td>Если установлено, пользователи могут отправлять <a href="/api/reactions#paid-reactions">платные реакции за Telegram Stars »</a> на сообщения этого канала.</td></tr><tr><td><strong>stargifts_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.19?<a href="/constructor/true">true</a></td><td>Если установлено, пользователи могут отправлять этому каналу <a href="/api/gifts">подарки »</a>.</td></tr><tr><td><strong>paid_messages_available</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.20?<a href="/constructor/true">true</a></td><td>Если установлено, администраторы могут включать в этой супергруппе <a href="/api/paid-messages">платные сообщения »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Информация о канале</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Количество участников канала</td></tr><tr><td><strong>admins_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Количество администраторов канала</td></tr><tr><td><strong>kicked_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Количество пользователей, <a href="/api/rights">удалённых</a> из канала</td></tr><tr><td><strong>banned_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Количество пользователей, <a href="/api/rights">заблокированных</a> в канале</td></tr><tr><td><strong>online_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/int">int</a></td><td>Количество пользователей, находящихся в сети</td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все входящие сообщения.</td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все исходящие сообщения.</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений</td></tr><tr><td><strong>chat_photo</strong></td><td style="text-align: center;"><a href="/type/Photo">Photo</a></td><td>Изображение канала</td></tr><tr><td><strong>notify_settings</strong></td><td style="text-align: center;"><a href="/type/PeerNotifySettings">PeerNotifySettings</a></td><td>Настройки уведомлений</td></tr><tr><td><strong>exported_invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>Пригласительная ссылка</td></tr><tr><td><strong>bot_info</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotInfo">BotInfo</a>&gt;</td><td>Информация о ботах в канале или супергруппе</td></tr><tr><td><strong>migrated_from_chat_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/long">long</a></td><td>Идентификатор чата, из которого была <a href="/api/channel">выполнена миграция</a> этой группы</td></tr><tr><td><strong>migrated_from_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Идентификатор сообщения в исходном чате, на котором эта группа была <a href="/api/channel">перенесена</a></td></tr><tr><td><strong>pinned_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Идентификатор последнего <a href="/api/pin">закреплённого сообщения</a></td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/StickerSet">StickerSet</a></td><td>Привязанный набор стикеров</td></tr><tr><td><strong>available_min_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/int">int</a></td><td>Наибольший идентификатор сообщения в канале, недоступного из-за скрытой истории.</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Идентификатор папки пира, подробнее см. здесь</a></td></tr><tr><td><strong>linked_chat_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/long">long</a></td><td>Идентификатор связанного <a href="/api/discussion">чата обсуждения</a> для каналов (и наоборот, идентификатор связанного канала для чатов обсуждения).</td></tr><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/ChannelLocation">ChannelLocation</a></td><td>Местоположение геогруппы</td></tr><tr><td><strong>slowmode_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/int">int</a></td><td>Если указано, пользователи в супергруппах смогут отправлять только одно сообщение каждые <code>slowmode_seconds</code> секунд</td></tr><tr><td><strong>slowmode_next_send_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/int">int</a></td><td>Указывает, когда пользователю будет разрешено отправить следующее сообщение в супергруппе (unixtime)</td></tr><tr><td><strong>stats_dc</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/int">int</a></td><td>Если установлено, указывает DC, который следует использовать для получения статистики канала</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Последнее значение <a href="/api/updates">PTS</a> для этого канала</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/InputGroupCall">InputGroupCall</a></td><td>Активный или запланированный <a href="/api/group-calls#video-chats-livestreams">видеочат/трансляция »</a>, связанный с этой супергруппой/каналом</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/type/int">int</a></td><td>Время жизни сообщений в этом канале или супергруппе</td></tr><tr><td><strong>pending_suggestions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Список <a href="/api/config#suggestions">предлагаемых действий</a> для администратора супергруппы, <a href="/api/config#suggestions">подробнее см. здесь »</a>.</td></tr><tr><td><strong>groupcall_default_join_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.26?<a href="/type/Peer">Peer</a></td><td>Явно сохранённый пир по умолчанию, от имени которого выполняется вход в <a href="/api/group-calls#video-chats-livestreams">видеочат или трансляцию »</a> этой супергруппы либо канала; если не задан, используется текущий пользователь</td></tr><tr><td><strong>theme_emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.27?<a href="/type/string">string</a></td><td>Эмодзи, обозначающий определённую тему оформления чата</td></tr><tr><td><strong>requests_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/type/int">int</a></td><td>Ожидающие рассмотрения <a href="/api/invites#join-requests">заявки на вступление »</a></td></tr><tr><td><strong>recent_requesters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы пользователей, недавно подавших заявку на вступление</td></tr><tr><td><strong>default_send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.29?<a href="/type/Peer">Peer</a></td><td>Пир, используемый по умолчанию для отправки сообщений в этот канал</td></tr><tr><td><strong>available_reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.30?<a href="/type/ChatReactions">ChatReactions</a></td><td>Разрешённые <a href="/api/reactions">реакции на сообщения »</a></td></tr><tr><td><strong>reactions_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.13?<a href="/type/int">int</a></td><td>Этот флаг позволяет задать собственное ограничение на число уникальных реакций (то есть настраиваемый аналог <a href="/api/config#reactions-uniq-max">appConfig.reactions_uniq_max</a>).</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.4?<a href="/type/PeerStories">PeerStories</a></td><td><a href="/api/stories">Истории</a> канала</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.7?<a href="/type/WallPaper">WallPaper</a></td><td><a href="/api/wallpapers">Обои</a></td></tr><tr><td><strong>boosts_applied</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.8?<a href="/type/int">int</a></td><td>Количество <a href="/api/boost">бустов</a>, которые текущий пользователь отдал текущей <em>супергруппе</em>.</td></tr><tr><td><strong>boosts_unrestrict</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.9?<a href="/type/int">int</a></td><td>Количество <a href="/api/boost">бустов</a>, которое требуется этой <em>супергруппе</em>, чтобы обойти медленный режим и другие ограничения; подробнее см. <a href="/api/boost#bypass-slowmode-and-chat-restrictions">здесь »</a>.</td></tr><tr><td><strong>emojiset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.10?<a href="/type/StickerSet">StickerSet</a></td><td><a href="/api/custom-emoji">Набор стикеров с пользовательскими эмодзи</a>, привязанный к текущей <em>супергруппе</em> с помощью метода <a href="/method/channels.setEmojiStickers">channels.setEmojiStickers</a> после достижения нужного уровня бустов; подробнее см. <a href="/api/boost#setting-a-custom-emoji-stickerset-for-supergroups">здесь »</a>.</td></tr><tr><td><strong>bot_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.17?<a href="/type/BotVerification">BotVerification</a></td><td><a href="/api/bots/verification">Значок верификации бота</a></td></tr><tr><td><strong>stargifts_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.18?<a href="/type/int">int</a></td><td>Администраторы с правами <a href="/constructor/chatAdminRights">chatAdminRights</a>.<code>post_messages</code> увидят общее число полученных подарков, все остальные — число подарков, добавленных в профиль канала.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.21?<a href="/type/long">long</a></td><td>Если установлено и больше 0, в этой супергруппе, <a href="/api/monoforum">монофоруме</a> или монофоруме, связанном с этим каналом, включены <a href="/api/paid-messages">платные сообщения »</a>, и мы <em>обязаны</em> заплатить указанное количество <a href="/api/stars">Stars</a>, чтобы отправлять туда сообщения; полное описание процесса см. <a href="/api/paid-messages">здесь »</a>.<br>Этот флаг будет установлен и для монофорума, и в <a href="/constructor/channelFull">channelFull</a> связанного канала).<br>Если установлено и равно 0, монофорум в целом требует оплаты, но мы освобождены от неё.</td></tr><tr><td><strong>main_tab</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags2</a>.22?<a href="/type/ProfileTab">ProfileTab</a></td><td>Основная вкладка профиля канала, <a href="/api/profile#tabs">подробнее здесь »</a>.</td></tr></tbody></table>

### Тип

[ChatFull](/type/ChatFull/)

### Связанные страницы

#### [channels.setStickers](/method/channels.setStickers/)

Привязать набор стикеров к супергруппе

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.

#### [Права администраторов, ограничения и права по умолчанию](/api/rights/)

Как работать с правами администраторов, детальными ограничениями и общими правами в каналах, группах и супергруппах.

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.

#### [Встроенная система антиспама](/api/antispam/)

Администраторы супергрупп с определённым числом участников могут задействовать всю упреждающую мощь собственных антиспам-алгоритмов Telegram — включить новый агрессивный режим автоматических спам-фильтров.

#### [Перевод сообщений](/api/translation/)

Telegram позволяет переводить сообщения в чатах: пользователи Telegram Premium могут даже включить перевод чата в реальном времени.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Пользователи также могут отображать сообщения из всех тем [форума](/api/forum/) так, как если бы они были отправлены в обычную группу, — с помощью настройки «Показывать как сообщения» в локальном клиенте: эта настройка влияет только на текущий аккаунт и синхронизируется с другими активными сессиями с помощью этого метода.

Вызов этого метода обновит значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и отправит обновление [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Доход от рекламы в каналах и ботах](/api/revenue/)

В Telegram действует одна из самых щедрых систем вознаграждения в истории социальных сетей. Владельцы каналов и ботов Telegram теперь могут получать 50% дохода от рекламы, показанной в их каналах и ботах. На этой странице описаны методы для вывода дохода от рекламы в каналах и ботах, а также для просмотра подробной статистики доходов.

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Закреплённые сообщения](/api/pin/)

Telegram позволяет закреплять несколько сообщений вверху конкретного чата.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [channels.setEmojiStickers](/method/channels.setEmojiStickers/)

Задать [набор пользовательских эмодзи](/api/custom-emoji/) для супергрупп. Использовать можно только после достижения как минимум [уровня буста »](/api/boost/), указанного в параметре конфигурации [`group_emoji_stickers_level_min` »](/api/config/#group-emoji-stickers-level-min).

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.

#### [chatAdminRights](/constructor/chatAdminRights/)

Представляет права администратора в [канале или супергруппе](/api/channel/).

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
