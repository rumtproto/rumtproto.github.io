---
title: "База данных пиров"
original: "https://core.telegram.org/api/peers"
section: api
description: "Многие конструкторы API следует сохранять в локальную базу данных сразу после получения и обновлять исключительно реактивно (пассивно) — когда они приходят в обновлениях или иным…"
layout: layout.njk
---

# База данных пиров

Многие конструкторы API следует сохранять в локальную базу данных сразу после получения и обновлять исключительно реактивно (пассивно) — когда они приходят в обновлениях или иным описанным в документации способом. Это позволяет не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

[@term:peer] [@term:access_hash] Особенно важны конструкторы [user](/constructor/user/), [chat](/constructor/chat/), [channel](/constructor/channel/) и их полные аналоги [userFull](/constructor/userFull/), [chatFull](/constructor/chatFull/), [channelFull](/constructor/channelFull/): они содержат важные сведения о пользователях, ботах, чатах и каналах (далее — _пиры_, `peer`: любой адресат в API — пользователь, чат или канал), и, самое главное, значение `access_hash` (хеш доступа — выданное сервером число, которое подтверждает право клиента обращаться к этому пиру), **необходимое** для работы с пирами через API.

На этой странице подробно описано, как и когда следует обновлять локальные базы данных перечисленных выше конструкторов, а также даётся более развёрнутое изложение базовых понятий, связанных с пирами.

> Для краткости в документации применительно к базе данных пиров часто используется слово «кеш» вместо «база данных», однако учтите: полученные сведения (или как минимум пару «идентификатор + хеш доступа») рекомендуется сохранять именно в базу данных, чтобы после запуска вызывать методы, требующие хеш доступа, и просматривать прочую информацию о пире, не перезапрашивая историю чата и данные пира заново.

### База данных сведений о пирах

```
userEmpty#d3bc4b7a id:long = User;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

chatEmpty#29562865 id:long = Chat;
chat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;
chatForbidden#6592a1a7 id:long title:string = Chat;

channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
channelForbidden#17d493d5 flags:# broadcast:flags.5?true megagroup:flags.8?true monoforum:flags.10?true id:long access_hash:long title:string until_date:flags.16?int = Chat;

inputUserEmpty#b98886cf = InputUser;
inputUserSelf#f7c1b13f = InputUser;
inputUser#f21158c6 user_id:long access_hash:long = InputUser;
inputUserFromMessage#1da448e2 peer:InputPeer msg_id:int user_id:long = InputUser;

// No inputChat, just a long is used (because basic chats don't have access hashes)

inputChannelEmpty#ee8c1e86 = InputChannel;
inputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;
inputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;

inputPeerEmpty#7f3b18ea = InputPeer;
inputPeerSelf#7da07ec9 = InputPeer;
inputPeerChat#35a95cb9 chat_id:long = InputPeer;
inputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;
inputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;
inputPeerUserFromMessage#a87b0a1c peer:InputPeer msg_id:int user_id:long = InputPeer;
inputPeerChannelFromMessage#bd2a0840 peer:InputPeer msg_id:int channel_id:long = InputPeer;

---functions---

users.getUsers#0d91a548 id:Vector<InputUser> = Vector<User>;
messages.getChats#49e9528f id:Vector<long> = messages.Chats;
channels.getChannels#0a7f6bbb id:Vector<InputChannel> = messages.Chats;
```

База информации о пирах содержит следующие сведения:

-   [Идентификатор пира »](#peer-id)
-   [Хеш доступа »](#access-hash)
-   [Прочие сведения »](#other-info)

И наполняться она должна так:

-   [Сохранением полученных конструкторов user, chat, channel »](#saving-constructors)
-   [Обработкой определённых обновлений »](#handling-updates)
-   [Ручным обновлением данных »](#manual-refreshes)

Пример реализации: [tdlib](https://github.com/tdlib/td/).

#### Сохранение конструкторов

База информации о пирах должна обновляться каждый раз, когда получен новый конструктор типа [user](/constructor/user/), [chat](/constructor/chat/) или [channel](/constructor/channel/) (а также их варианты `forbidden`, используемые для пиров, к которым у пользователя нет доступа, но основные сведения о которых он всё же может видеть).

Эти конструкторы приходят при работе с API (например, в общих чатах, через функцию поиска, при [разрешении имени пользователя](/api/invites/#public-usernames), по [временным ссылкам на профиль](/api/links/#temporary-profile-links) и так далее...).

Если не оговорено иное (особые случаи описаны на страницах конкретных конструкторов), при обновлении локальной базы пиров все поля только что полученного конструктора имеют приоритет над старым конструктором, закешированным локально (в том числе поля, не заданные в новом конструкторе, удаляются).

#### Обработка обновлений

Перечисленные ниже обновления должны приводить к обновлению небольшого подмножества сведений, хранящихся в базе пиров (как в обычном варианте, так и в [варианте с полной информацией](#full-info-database)).

#### Обновления, относящиеся к пользователям, каналам и супергруппам

-   [updateUserStatus](/constructor/updateUserStatus/) — обновите [user](/constructor/user/).`status`
-   [updateUserName](/constructor/updateUserName/) — обновите [user](/constructor/user/).`first_name`/`last_name`/`username`/`usernames`
-   [updatePeerBlocked](/constructor/updatePeerBlocked/) — обновите [userFull](/constructor/userFull/).`blocked`, [channelFull](/constructor/channelFull/).`blocked`
-   [updatePeerSettings](/constructor/updatePeerSettings/) — обновите [userFull](/constructor/userFull/).`settings`
-   [updatePeerWallpaper](/constructor/updatePeerWallpaper/) — обновите [userFull](/constructor/userFull/).`wallpaper`, [channelFull](/constructor/channelFull/).`wallpaper`
-   [updateUserEmojiStatus](/constructor/updateUserEmojiStatus/) — обновите [user](/constructor/user/).`emoji_status`
-   [updateChannelAvailableMessages](/constructor/updateChannelAvailableMessages/) — обновите [channel](/constructor/channel/).`hidden_prehistory`

#### Обновления, относящиеся к обычным группам

```
chat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;

chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#0360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;

chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;

updateChatParticipants#07761198 participants:ChatParticipants = Update;
updateChatParticipantAdd#3dda5451 chat_id:long user_id:long inviter_id:long date:int version:int = Update;
updateChatParticipantDelete#e32f3d77 chat_id:long user_id:long version:int = Update;
updateChatParticipantAdmin#d7ca61a2 chat_id:long user_id:long is_admin:Bool version:int = Update;
updateChatDefaultBannedRights#54c01850 peer:Peer default_banned_rights:ChatBannedRights version:int = Update;
updateChatParticipantRank#bd8367b9 chat_id:long user_id:long rank:string version:int = Update;

updateChatParticipant#d087663a flags:# chat_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChatParticipant new_participant:flags.1?ChatParticipant invite:flags.2?ExportedChatInvite qts:int = Update;
```

Все обновления, относящиеся к [обычным группам](/api/channel/#basic-groups) (не к супергруппам), содержат также целочисленное поле `version`, по которому и следует применять обновление, сравнивая его со значением поля `version` закешированного [chat](/constructor/chat/) (далее — `cached_version`):

-   Если `version` меньше, чем `cached_version+1`, пропустите обновление
-   Если `version` равно `cached_version+1`, примените обновление и обновите `version` локального [chat](/constructor/chat/)
-   Если `version` больше, чем `cached_version+1`, пропустите обновление, признайте локальные [chat](/constructor/chat/) и [chatFull](/constructor/chatFull/) недействительными и загрузите их заново с помощью [messages.getFullChat](/method/messages.getFullChat/)
-   Если локально закешированного [chat](/constructor/chat/) для этого чата нет, пропустите обновление и загрузите полную информацию с помощью [messages.getFullChat](/method/messages.getFullChat/)

Учтите, что [chatParticipants](/constructor/chatParticipants/).`version` (содержится в [chatFull](/constructor/chatFull/)) указывает ровно на ту же последовательность, что и [chat](/constructor/chat/).`version`.

Ниже — полный список обновлений, относящихся к обычным группам и содержащих поле `version`, а также указание, какие части сохранённых [chat](/constructor/chat/)/[chatFull](/constructor/chatFull/) они должны обновлять при применении:

-   [updateChatParticipants](/constructor/updateChatParticipants/) — обновите [chat](/constructor/chat/).`participants_count`, [chatFull](/constructor/chatFull/).`participants` (учтите, что `version` находится внутри [chatParticipants](/constructor/chatParticipants/) в [updateChatParticipants](/constructor/updateChatParticipants/).`participants`, а не в конструкторе верхнего уровня, и отсутствует в варианте [chatParticipantsForbidden](/constructor/chatParticipantsForbidden/), который приходит при блокировке).
-   [updateChatParticipant](/constructor/updateChatParticipant/) — обновите [chat](/constructor/chat/).`participants_count`, [chatFull](/constructor/chatFull/).`participants`.
-   [updateChatParticipantAdd](/constructor/updateChatParticipantAdd/) — обновите [chat](/constructor/chat/).`participants_count`, [chatFull](/constructor/chatFull/).`participants`.
-   [updateChatParticipantDelete](/constructor/updateChatParticipantDelete/) — обновите [chat](/constructor/chat/).`participants_count`, [chatFull](/constructor/chatFull/).`participants`.
-   [updateChatParticipantAdmin](/constructor/updateChatParticipantAdmin/) — обновите [chat](/constructor/chat/).`admin_rights`, если `user_id` указывает на текущего пользователя, и [chatFull](/constructor/chatFull/).`participants` — безусловно.
-   [updateChatDefaultBannedRights](/constructor/updateChatDefaultBannedRights/) — обновите [chat](/constructor/chat/).`default_banned_rights`
-   [updateChatParticipantRank](/constructor/updateChatParticipantRank/) — обновите поле `rank` типа [ChatParticipant](/type/ChatParticipant/) (содержится в [chatFull](/constructor/chatFull/).`participants`) для указанного пользователя

[@term:qts] Исключение из правила — [updateChatParticipant](/constructor/updateChatParticipant/): это обновление доступно только ботам и **не** имеет поля `version`; вместо этого отсев дубликатов опирается лишь на обычный механизм дедупликации по `qts` — счётчику состояния, по которому ботам доставляются обновления; подробнее [здесь »](/api/updates/).

#### Ручное обновление данных

По соображениям производительности сервер не всегда присылает обновления с актуальными сведениями обо всех пирах: поэтому информацию об _уже закешированных_ пирах в отдельных случаях приходится обновлять вручную — пакетными методами [users.getUsers](/method/users.getUsers/), [messages.getChats](/method/messages.getChats/), [channels.getChannels](/method/channels.getChannels/), каждый из которых требует ранее сохранённый `access_hash`.

Приведённый ниже список не исчерпывающий: клиенты вправе обновлять информацию о пирах и в других ситуациях (например, при открытии страницы профиля и т. п.).

-   [@term:min] При запросе информации об одном из следующих внутренних идентификаторов пользователей, если она ещё не закеширована или закеширована в варианте `min` (усечённом — с неполными данными о пире): 777000 (пользователь сервисных уведомлений), 1271266957 (бот ответов), 1087968824 (анонимный бот), 136817688 (бот каналов), 5434988373 (антиспам-бот).  
    Информацию об этих идентификаторах даже обычные пользователи могут запрашивать с нулевым хешем доступа.

-   После вызова [bots.setBotInfo](/method/bots.setBotInfo/) с изменением `name` (но **не** `about` и не `description`, поскольку изменение этих полей и так вызывает обновление базы полной информации, а вместе с ней и базы пиров) — для бота, данные которого мы изменили

-   После получения ошибки `CHAT_FORWARDS_RESTRICTED` при пересылке сообщений из чата — чтобы обновить информацию об исходном чате (то есть сам факт получения этой ошибки означает, что клиент не запретил пользователю локально переслать сообщение из защищённого чата, потому что закешированный флаг [channel](/constructor/channel/).`noforwards`/[chat](/constructor/chat/).`noforwards` устарел).

-   После получения ошибки `CHAT_GUEST_SEND_FORBIDDEN` при отправке сообщений в [группу обсуждения](/api/discussion/) — чтобы обновить информацию о группе обсуждения (то есть сам факт получения этой ошибки означает, что клиент не запретил локально отправку сообщения пользователем, не состоящим в группе обсуждения, где писать могут только участники, потому что закешированный флаг [channel](/constructor/channel/).`join_to_send` устарел).

-   После получения ошибки `USER_NOT_PARTICIPANT` при вызове [channels.leaveChannel](/method/channels.leaveChannel/) — чтобы обновить информацию о канале/супергруппе (то есть сам факт получения этой ошибки означает, что клиент попытался выйти из канала/супергруппы, участником которых он не является, и не предотвратил это локально, потому что его конструктор [channel](/constructor/channel/) устарел).

-   После вызова следующих методов (как при успешном вызове, так и после получения ошибки `USERNAME_NOT_MODIFIED`, которая также считается успехом):

    -   [account.toggleUsername](/method/account.toggleUsername/), [account.reorderUsernames](/method/account.reorderUsernames/) — для нас самих
    -   [bots.toggleUsername](/method/bots.toggleUsername/), [bots.reorderUsernames](/method/bots.reorderUsernames/) — для бота, чьё имя пользователя мы изменили
    -   [channels.toggleUsername](/method/channels.toggleUsername/), [channels.reorderUsernames](/method/channels.reorderUsernames/) — для канала, чьё имя пользователя мы изменили

    Обновлять информацию вручную вызовом [users.getUsers](/method/users.getUsers/), [channels.getChannels](/method/channels.getChannels/) следует **только** в том случае, если новый порядок имён пользователя или активное имя нельзя применить локально (например, вызов метода успешно сделал активным имя, которое в нашем локальном кеше не связано с этим пиром, и тому подобное); иначе поля `username` и `usernames` в базе информации о пирах следует обновить локально, взяв данные, переданные пользователем в методы переключения и переупорядочивания.

-   После вызова следующих методов, если пользователь, которому мы установили фотографию профиля, **не** возвращён в [photos.photo](/constructor/photos.photo/).`users`:

    -   [photos.updateProfilePhoto](/method/photos.updateProfilePhoto/)
    -   [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/)
    -   [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/) — только если не установлен `suggest`
-   После вызова [photos.deletePhotos](/method/photos.deletePhotos/), если после удаления переданных в метод фотографий в локальном кеше не осталось ни одной фотографии текущего пользователя.

-   После неудачной попытки скачать фотографию пира.

-   [contacts.getStatuses](/method/contacts.getStatuses/) клиентам следует вызывать каждые `70000-100000` секунд, чтобы обновлять поле [user](/constructor/user/).`status` у контактов.  
    Точный интервал опроса статусов контактов следует выбирать случайно в диапазоне от `70000` до `100000` и выбирать заново при каждом вызове [contacts.getStatuses](/method/contacts.getStatuses/).  
    Если запрос [contacts.getStatuses](/method/contacts.getStatuses/) завершился неудачей, повторите вызов метода через `5`–`10` секунд.

#### Идентификатор пира

Идентификатор пира `id` — это уникальный 64-битный идентификатор, по которому определяется конкретный пользователь, чат или канал.

Это поле следует использовать как первичный ключ в базах каналов, чатов и пользователей.

Учтите, что последовательности идентификаторов пользователей, чатов и каналов **перекрываются**, поэтому необходимо выбрать один из вариантов:

-   Использовать отдельные таблицы или хеш-таблицы для [user](/constructor/user/), [chat](/constructor/chat/) и [channel](/constructor/channel/), ЛИБО
-   Преобразовывать идентификаторы пиров в идентификаторы bot API, как описано [здесь »](/api/bots/ids/), что позволит использовать единую последовательность идентификаторов (и единую базу) для всех трёх типов пиров, сохраняя уникальность.  
    В этом случае для всех типов пиров _можно_ использовать одну таблицу, но, поскольку структуры конструкторов различаются, во избежание бесполезных проверок типов имеет смысл всё же завести три таблицы, как и в первом варианте.

Перейдите по ссылкам ниже, чтобы посмотреть допустимые диапазоны MTProto-идентификаторов для разных типов чатов, а также узнать, как преобразовать их в единый диапазон bot API:

-   [Пользователи »](/api/bots/ids/#user-ids)
-   [Чаты »](/api/bots/ids/#chat-ids)
-   [Супергруппы и каналы »](/api/bots/ids/#supergroup-channel-ids)
-   [Монофорумы »](/api/bots/ids/#monoforum-ids)

Преобразовывать идентификаторы пиров в [идентификаторы bot API](/api/bots/ids/) полезно, даже если вы всё же решили использовать раздельные базы данных: так идентификаторы станут визуально узнаваемее и для вас, и для ваших пользователей, а заодно будет гарантирована совместимость с bot API.

#### Хеш доступа

Поле `access_hash` — второе по важности поле, которое хранится в [базе информации о пирах](#peer-info-database); оно нужно для построения конструкторов [InputPeer](/type/InputPeer/), [inputUser](/type/InputUser/) и [inputChannel](/type/InputChannel/), с помощью которых происходит взаимодействие с пирами в API.  
Учтите, что у [chat](/constructor/chat/) ([обычных групп »](/api/channel/)) хеша доступа нет, и он им не нужен.  
У [user](/constructor/user/) и [channel](/constructor/channel/) ([супергрупп и каналов »](/api/channel/)) хеш доступа есть, и он бывает нескольких разновидностей:

-   Полный хеш доступа: пригоден для использования в любом месте API.
-   Хеш доступа `min`: приходит в [конструкторах `min` »](/api/min/) и годится только для загрузки фотографий профиля через [`inputPeerPhotoFileLocation` »](/constructor/inputPeerPhotoFileLocation/).
-   Хеш доступа, выведенный из сообщения: настоящим хешем доступа не является, строится по правилам, описанным [здесь »](/api/min/), и обязан применяться тогда, когда локально доступен только хеш доступа `min`, а требуется полный.
-   Нулевой хеш доступа: равен `0`; боты обязаны применять его, когда локально доступен только хеш доступа `min` (или его нет вовсе), а требуется полный.

Перечисленные выше разновидности хеша доступа приведены в порядке убывания приоритета: если в кеше уже лежит разновидность с более высоким приоритетом, перезаписывать её разновидностью с более низким приоритетом нельзя.

Хеши доступа приходят в ходе взаимодействия с API (например, в общих чатах, через поиск, при [разрешении имени пользователя](/api/invites/#public-usernames), по [временным ссылкам на профиль](/api/links/#temporary-profile-links) и так далее): если у вас есть только идентификатор пользователя, канала или супергруппы без какого-либо хеша доступа, взаимодействовать с этим пиром вы **не сможете**.  
Хеши доступа нельзя переиспользовать между разными аккаунтами или разными сессиями входа (авторизации) одного и того же аккаунта, однако их можно переиспользовать между разными MTProto-сессиями, привязанными к одной и той же сессии входа.  
Это одна из основополагающих мер Telegram против спама.

Клиентам и клиентским API не следует показывать хеши доступа пользователям: вне текущей сессии входа (авторизации) они всё равно бесполезны, и не стоит перекладывать на пользователя их хранение, когда клиент прекрасно справляется с этим сам.

Примечание: хеши доступа могут содержаться и в некоторых других конструкторах, не связанных с пирами (то есть отличных от [user](/constructor/user/), [chat](/constructor/chat/) и [channel](/constructor/channel/)); их следует хранить в отдельной базе данных.

#### Прочая информация

Различные другие поля, которые обычно использует клиент; они описаны на страницах соответствующих конструкторов ([user](/constructor/user/), [chat](/constructor/chat/) и [channel](/constructor/channel/)).  
Как сказано в документации конструкторов, некоторые поля нельзя перезаписывать при получении [конструктора `min`](/api/min/), а изменение некоторых других полей обязано приводить к признанию недействительной [базы полной информации »](#full-info-database).

### База полной информации

```
users.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;

userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;
chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;

---functions---

users.getFullUser#b60f5918 id:InputUser = users.UserFull;
messages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;
channels.getFullChannel#08736a09 channel:InputChannel = messages.ChatFull;
```

Пример реализации: [tdlib](https://github.com/tdlib/td/).

База полной информации содержит данные из конструкторов [userFull](/constructor/userFull/), [chatFull](/constructor/chatFull/) и [channelFull](/constructor/channelFull/).

Чтобы наполнить базу полной информации для пира, вызовите [users.getFullUser](/method/users.getFullUser/), [messages.getFullChat](/method/messages.getFullChat/) или [channels.getFullChannel](/method/channels.getFullChannel/) — каждому из этих методов требуется ранее закешированный [access\_hash »](#access-hash).

Признавайте недействительными только записи [userFull](/constructor/userFull/) и [channelFull](/constructor/channelFull/) — через 60 секунд после их сохранения.

[@term:TTL] Обновляйте базу полной информации, когда клиенту нужны какие-либо данные из полного конструктора **и** при этом в базе ещё нет соответствующей записи, либо нужная запись признана недействительной по TTL (time to live — время жизни записи в кеше, по истечении которого она считается устаревшей), либо если:

-   Некоторое событие (из перечисленных [здесь »](#peer-info-database)) меняет значение вполне определённого набора полей записи в [базе информации о пирах »](#peer-info-database) (не полной!).  
    Подробности см. в документации на страницах конструкторов [user](/constructor/user/) и [channel](/constructor/channel/) (ищите по ключевому слову «invalidate»).
-   При получении обновлений [updateUser](/constructor/updateUser/), [updateChat](/constructor/updateChat/), [updateChannel](/constructor/updateChannel/) и некоторых других, перечисленных [здесь »](/type/Update/)
-   После вызова [bots.setBotInfo](/method/bots.setBotInfo/) (даже при ошибке) с изменением `about` или `description` (но **не** `name`) — для бота, информацию о котором мы изменили.
-   После вызова [messages.setChatWallPaper](/method/messages.setChatWallPaper/) для _удаления_ обоев, завершившегося ошибкой, — для пира, обои которого мы пытались изменить, чтобы получить корректные и актуальные настройки обоев.
-   После вызова [messages.setChatAvailableReactions](/method/messages.setChatAvailableReactions/), завершившегося ошибкой, отличной от `CHAT_NOT_MODIFIED`, — для пира, настройки реакций которого мы пытались изменить.
-   После получения ошибки `SEND_AS_PEER_INVALID` от любого метода, работающего с группой или супергруппой: обновите информацию о получателе, чтобы выяснить, от имени каких каналов можно отправлять сообщения в эту группу или супергруппу через `send_as`.
-   Если [chat](/constructor/chat/).`photo` не равно [chatFull](/constructor/chatFull/).`chat_photo`
-   Поле [channelFull](/constructor/channelFull/).`linked_chat_id` канала или супергруппы A обновилось и указывает на канал или супергруппу B, но [channelFull](/constructor/channelFull/).`linked_chat_id` канала или супергруппы B не указывает на канал или супергруппу A — обновите [channelFull](/constructor/channelFull/) канала или супергруппы B.
-   Информация о боте, состоящем в канале или супергруппе, получена иным путём, но самого бота нет в [channelFull](/constructor/channelFull/).`bot_info`.
-   Если [channelFull](/constructor/channelFull/).`participants_count` меньше, чем [channelFull](/constructor/channelFull/).`admins_count`, после локального обновления списка администраторов иным путём.
-   Если [настройка приватности »](/api/privacy/) [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/) текущего авторизованного пользователя изменилась — обновите весь кеш [userFull](/constructor/userFull/) для всех пользователей.
-   После получения ошибки, отличной от `USER_NOT_PARTICIPANT`, при вызове [channels.leaveChannel](/method/channels.leaveChannel/)
-   Если фотография профиля обновлена или удалена
-   После успешного вызова любого из следующих методов — для соответствующего бота:
    -   [bots.deletePreviewMedia](/method/bots.deletePreviewMedia/)
-   После вызова любого из следующих методов (успешного или нет):
    -   [bots.setBotGroupDefaultAdminRights](/method/bots.setBotGroupDefaultAdminRights/) — для бота
    -   [bots.setBotBroadcastDefaultAdminRights](/method/bots.setBotBroadcastDefaultAdminRights/) — для бота
    -   [channels.inviteToChannel](/method/channels.inviteToChannel/) — для канала или супергруппы
    -   [channels.editAdmin](/method/channels.editAdmin/) — для канала или супергруппы
    -   [messages.editChatCreator](/method/messages.editChatCreator/) — для канала, супергруппы или группы
-   При получении RPC-ошибки `CHANNEL_PRIVATE` или `CHANNEL_PUBLIC_GROUP_NA`.
-   Когда канал становится приватным или публичным (а до этого был публичным или приватным соответственно; публичный — есть хотя бы одно имя пользователя, приватный — имён пользователя нет).
-   Если мы заблокировали участника чата или супергруппы, указав [chatBannedRights](/constructor/chatBannedRights/).`until_date`, то в момент `until_date` администратору следует обновить полный кеш этого чата или супергруппы.

Приведённый список не является исчерпывающим: клиенты могут обновлять информацию о пирах и в других случаях (например, при открытии страницы профиля и т. п.).
