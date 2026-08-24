---
title: "Каналы, супергруппы, гигагруппы и обычные группы"
original: "https://core.telegram.org/api/channel"
section: api
description: "Каналы — это инструмент для вещания сообщений на большую аудиторию. Число подписчиков у них не ограничено, они могут быть публичными и иметь постоянный URL, а у каждой публикации…"
layout: layout.njk
---

# Каналы, супергруппы, гигагруппы и обычные группы

### Каналы

[Каналы](https://telegram.org/tour/channels) — это инструмент для вещания сообщений на большую аудиторию. Число подписчиков у них не ограничено, они могут быть публичными и иметь постоянный URL, а у каждой публикации в канале есть собственный счётчик просмотров.  
Технически они представлены конструкторами [channel](/constructor/channel/).

Каналы создаются методом [channels.createChannel](/method/channels.createChannel/) с установленным флагом `broadcast`.

Сообщения, публикуемые в каналах, могут быть:

-   Анонимными (поведение по умолчанию)
-   С текстовой подписью без гиперссылки: чтобы включить или выключить эту возможность, вызовите [channels.toggleSignatures](/method/channels.toggleSignatures/) с установленным `signatures_enabled`.
-   Выглядеть в точности как сообщения в группе, с полной информацией об отправителе (и с тем же интерфейсом, что используется для сообщений в группах): чтобы включить или выключить эту возможность, вызовите [channels.toggleSignatures](/method/channels.toggleSignatures/) с установленными `signatures_enabled` и `profiles_enabled`.  
    Включение этого режима позволит администраторам публиковать сообщения в канале от имени любого из подконтрольных им профилей (в том числе других каналов и самого канала — для анонимных сообщений, как в режиме по умолчанию) с помощью флага `send_as` метода [messages.sendMessage](/method/messages.sendMessage/) и других методов отправки сообщений; подробнее см. [здесь »](#sending-messages-on-behalf-of-owned-channels-and-groups).

### Супергруппы

[Супергруппы](https://telegram.org/tour/groups) — мощный инструмент для построения сообществ, каждая из них вмещает до 200 000 участников.  
Технически супергруппа — это на самом деле канал: супергруппы представлены конструкторами [channel](/constructor/channel/) с флагом `megagroup`, равным true.

Супергруппы создаются методом [channels.createChannel](/method/channels.createChannel/) с установленным флагом `megagroup`.  
Супергруппе также можно назначить `geo_point`, чтобы она стала [геочатом »](/api/nearby/).

[@term:send_as] При отправке сообщений в каналы и супергруппы методом [messages.sendMessage](/method/messages.sendMessage/) и другими методами отправки сообщений можно выбрать, от чьего имени уйдёт сообщение: от текущего пользователя (по умолчанию), от принадлежащего нам канала или от текущей группы (для [анонимных администраторов группы »](/api/rights/#anonymous-admins)). Для этого заполняется флаг `send_as` — в нём указывается пир, от имени которого публикуется сообщение, — в [messages.sendMessage](/method/messages.sendMessage/) и подобных методах; подробнее см. [здесь »](#sending-messages-on-behalf-of-owned-channels-and-groups).

#### Форумы

Супергруппы можно преобразовать в [форумы](/api/forum/), разделив общение на отдельные [темы форума](/api/forum/#forum-topics); подробности см. в [документации по форумам »](/api/forum/).

#### Монофорумы

Монофорумы — особая разновидность [форума »](#forums), используемая для реализации личных сообщений в каналы; подробности см. в [документации по монофорумам »](/api/monoforum/).

#### Гигагруппы

Гигагруппы — это нечто среднее между каналом и супергруппой.  
Администратор, [получив соответствующее предложение от API »](/api/config/#channel-suggestions), может преобразовать супергруппу в гигагруппу методом [channels.convertToGigagroup](/method/channels.convertToGigagroup/) (только в одну сторону).  
После этого писать в группе смогут только администраторы (как если бы [право `send_messages` было по умолчанию отключено для всех участников группы](#rights)), но ограничение на число участников снимается, и группа может стать гораздо больше супергруппы (например, свыше 200 000 участников на текущий момент).  
Кроме того, приглашать людей в гигагруппы нельзя, а участникам голосовых чатов в гигагруппах по умолчанию отключён микрофон.

### Обычные группы

[@term:pts] В предыдущих версиях Telegram методом [messages.createChat](/method/messages.createChat/) можно было создавать только обычные группы (представленные конструкторами [chat](/constructor/chat/)): у таких групп меньше возможностей, и в них может быть не более 200 участников.  
Сообщения всех обычных групп хранятся в [ящике сообщений пользователя »](/api/updates/#message-related-event-sequences): это значит, что все обычные группы и все личные чаты используют общую, единую последовательность идентификаторов сообщений и значений [PTS](/api/updates/) (`pts` — счётчик состояния ящика, который монотонно растёт с каждым событием).

Все обновления, относящиеся **только** к обычным группам, дополнительно содержат целочисленный идентификатор `version`, который следует использовать так же, как значения **pts**, — чтобы отбрасывать дубликаты и обновлять устаревшие сведения об участниках и о чате, как описано [здесь »](/api/peers/#basic-group-updates).

#### Участники обычной группы

```
chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#0360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;

chatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;
chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;

chatFull#2633421b flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions reactions_limit:flags.20?int = ChatFull;
```

В отличие от супергрупп, где список участников загружается по требованию — только если пользователь открывает список участников (да и то администраторы могут его скрыть), — клиенты **всегда** обязаны запрашивать и [сохранять](/api/peers/) полный список участников обычных групп, который сразу доступен в [chatFull](/constructor/chatFull/) и запрашивается методом [messages.getFullChat](/method/messages.getFullChat/), поскольку это единственный источник данных, которые должны отображаться в интерфейсе сообщений, — например, [меток участников »](#group-member-admin-tags).

#### Миграция

Чтобы повысить обычную группу до супергруппы, применяется метод [messages.migrateChat](/method/messages.migrateChat/).

Клиентам следует автоматически преобразовывать обычные группы в супергруппы, если администратор пытается выполнить действие, поддерживаемое только супергруппами.

Поле `chats` результата будет содержать два объекта:

-   Конструктор [chat](/constructor/chat/) с полем `migrated_to`, указывающим на адрес новой супергруппы
-   Новый конструктор [channel](/constructor/channel/) с флагом megagroup

При [запросе полной информации](/method/channels.getFullChannel/) о преобразованном канале объект [channelFull](/constructor/channelFull/) будет содержать поля `migrated_from_chat_id` и `migrated_from_max_id`, указывающие исходный идентификатор чата и идентификатор сообщения в исходном чате, на котором группа была преобразована.

Все пользователи чата получат [updateNewMessage](/constructor/updateNewMessage/) из старого чата с [messageService](/constructor/messageService/), содержащим конструктор [messageActionChatMigrateTo](/constructor/messageActionChatMigrateTo/).

Все новые сообщения необходимо отправлять в новую супергруппу.

При работе с преобразованными группами клиенты должны обрабатывать загрузку истории сообщений (а также результатов поиска и тому подобного) как из обычной группы, так и из новой супергруппы. Это делается объединением двух списков сообщений (запрошенных с разными значениями [Peer](/type/Peer/)) на стороне клиента.

### Отправка сообщений от имени принадлежащих вам каналов и групп

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;

sendAsPeer#b81c7034 flags:# premium_required:flags.0?true peer:Peer = SendAsPeer;

channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;

---functions---

messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;

messages.saveDefaultSendAs#ccfddf96 peer:InputPeer send_as:InputPeer = Bool;
```

При отправке сообщений в каналы и супергруппы методом [messages.sendMessage](/method/messages.sendMessage/) и другими методами отправки сообщений можно выбрать, от чьего имени уйдёт сообщение: от текущего пользователя (по умолчанию), от принадлежащего нам канала или от текущей группы (для [анонимных администраторов группы »](/api/rights/#anonymous-admins)). Для этого заполняется флаг `send_as` в [messages.sendMessage](/method/messages.sendMessage/) и подобных методах.

Два последних варианта дают дополнительный уровень анонимизации: в отправленном [сообщении](/constructor/message/) поле `from_id` будет указывать на выбранный канал или группу, а не на нашу учётную запись.

Список пиров, которые можно передать в `send_as`, получается методом [channels.getSendAs](/method/channels.getSendAs/); в поле `peer` указывается канал или группа, куда мы собираемся отправить сообщение.

Этот метод возвращает список конструкторов [sendAsPeer](/constructor/sendAsPeer/) — по одному на каждый пир, который можно передать в `send_as` именно для данного `peer`, — вместе с необязательным флагом `premium_required`, который устанавливается, если для передачи этого пира в `send_as` требуется подписка [Premium](/api/premium/).

Для супергрупп возвращаются следующие пиры:

-   Текущий пользователь (по умолчанию). Не возвращается, если текущий пользователь — администратор с [включённым правом анонимности »](/api/rights/#anonymous-admins).
-   Текущая супергруппа или другие принадлежащие нам каналы, если текущий пользователь — администратор этой супергруппы с [включённым правом анонимности »](/api/rights/#anonymous-admins).
-   Другие принадлежащие нам каналы, если текущий пользователь — администратор этой супергруппы.

Для каналов возвращаются следующие пиры:

-   Текущий канал (по умолчанию)
-   Текущий пользователь или другие принадлежащие нам каналы, если мы администраторы текущего канала и с помощью [channels.toggleSignatures](/method/channels.toggleSignatures/) включены и подписи, и профили — то есть установлены флаги `signatures_enabled` и `profiles_enabled`.

В `send_as` для указанного `peer` разрешено использовать **только** те пиры, которые вернул [channels.getSendAs](/method/channels.getSendAs/).

Установите флаг `for_paid_reactions`, чтобы получить список пиров, от имени которых можно отправлять [платные реакции »](/api/reactions/#paid-reactions) с помощью [paidReactionPrivacyPeer](/constructor/paidReactionPrivacyPeer/).

Метод [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/) позволяет изменить значение `send_as` по умолчанию для конкретного канала или супергруппы: оно будет применяться также к реакциям, платным реакциям и всем остальным видам взаимодействия (в том числе в методах, которые не требуют `send_as` явно, — например, [messages.sendReaction](/method/messages.sendReaction/) и [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/)).

### Выход из групп и каналов

```
chat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;

channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

userEmpty#d3bc4b7a id:long = User;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;

messageActionNewCreatorPending#b07ed085 new_creator_id:long = MessageAction;
messageActionChangeCreator#e188503b new_creator_id:long = MessageAction;

---functions---

channels.leaveChannel#f836aa95 channel:InputChannel = Updates;
messages.deleteChatUser#a2185cab flags:# revoke_history:flags.0?true chat_id:long user_id:InputUser = Updates;

messages.getFutureChatCreatorAfterLeave#3b7d0ea6 peer:InputPeer = User;
```

Чтобы покинуть супергруппу или канал, вызовите [channels.leaveChannel](/method/channels.leaveChannel/).

Чтобы покинуть обычную группу, вызовите [messages.deleteChatUser](/method/messages.deleteChatUser/), передав идентификатор группы в `chat_id`, а [inputUserSelf](/constructor/inputUserSelf/) — в `user_id`.

Однако если установлен флаг [chat](/constructor/chat/).`creator`/[channel](/constructor/channel/).`creator`, клиент обязан **перед** выходом из чата вызвать [messages.getFutureChatCreatorAfterLeave](/method/messages.getFutureChatCreatorAfterLeave/).

Если метод возвращает RPC-ошибку, клиент может молча продолжить выход из группы.

В противном случае пользователю следует показать всплывающее окно с уведомлением о том, что возвращённый [user](/constructor/user/) станет новым владельцем группы или канала через 7 дней (для каналов и супергрупп) либо сразу же (для обычных групп), и предложить три кнопки:

-   «Назначить другого администратора»: при нажатии переключитесь на стандартную процедуру [передачи прав владения с выбором администратора, назначаемого владельцем »](#transferring-ownership-of-a-group-channel); при успехе покиньте канал.

-   «Отмена»

-   «Покинуть группу»: при нажатии вызовите [channels.leaveChannel](/method/channels.leaveChannel/)/[messages.deleteChatUser](/method/messages.deleteChatUser/), как описано выше: права владения перейдут к возвращённому пользователю на изложенных выше условиях.

    Кроме того, при выходе из супергруппы будут сгенерированы следующие сообщения:

    -   В супергруппу от имени прежнего владельца, покинувшего группу, будет отправлено [messageActionNewCreatorPending](/constructor/messageActionNewCreatorPending/) (то есть [messageService](/constructor/messageService/).`from_id` будет равен идентификатору прежнего владельца), при этом идентификатор нового ожидающего владельца указывается в `new_creator_id`
    -   [@term:deep link] Прежний владелец получит [updateNewMessage](/constructor/updateNewMessage/) из личного чата с пользователем сервисных уведомлений (идентификатор `777000`) с уведомлением о том, что он покинул группу и указанный администратор станет новым владельцем через 7 дней, если прежний владелец не вернётся в неё (вернуться можно по глубокой ссылке — `deep link`, открывающей нужный объект прямо в приложении, — которая содержится в [кнопке](/constructor/keyboardButtonUrl/), прикреплённой к сообщению)
    -   Через 7 дней, если прежний администратор не вернётся в супергруппу, права владения будут переданы новому администратору, а в супергруппу от имени прежнего владельца, покинувшего группу, будет отправлено [messageActionChangeCreator](/constructor/messageActionChangeCreator/) (то есть [messageService](/constructor/messageService/).`from_id` будет равен идентификатору прежнего владельца), при этом идентификатор нового владельца указывается в `new_creator_id`

[@note] В оригинале последний пункт говорит о «прежнем администраторе» и «новом администраторе», хотя речь идёт о том же прежнем владельце, который вышел из группы, и о назначенном ему преемнике; формулировка сохранена как есть.

### Передача прав владения группой/каналом

```
---functions---

messages.editChatCreator#f743b857 peer:InputPeer user_id:InputUser password:InputCheckPasswordSRP = Updates;
```

Права владения обычной группой, супергруппой или каналом можно передать с помощью [messages.editChatCreator](/method/messages.editChatCreator/): этот метод требует, чтобы в учётной записи был настроен действующий [пароль двухфакторной аутентификации](/api/srp/), который необходимо передать в параметр `password` метода так, как описано в [документации по двухфакторной аутентификации](/api/srp/).

Идентификатор обычной группы, супергруппы или канала передаётся в `peer`, а идентификатор нового владельца — в `user_id`.

### Метки участников и администраторов группы

Участники групповых чатов (как обычных групп, так и супергрупп) теперь могут добавлять рядом со своим именем **метку** — чтобы показать свою должность на работе, специальность, по которой они учатся, и многое другое; подробнее см. [здесь »](/api/rank/).

### Пригласительные ссылки и заявки на вступление

У каналов, обычных групп и супергрупп может быть публичное имя (`username`) или приватная пригласительная ссылка: приватные пригласительные ссылки дополнительно могут требовать индивидуальной заявки на вступление от каждого пользователя.

Подробнее о работе с публичными именами, пригласительными ссылками и заявками на вступление см. [здесь »](/api/invites/).

### Права

Каналы, обычные группы и супергруппы позволяют задавать [детальные разрешения](https://telegram.org/blog/permissions-groups-undo) как для администраторов, так и для отдельных пользователей; каналы, супергруппы и обычные группы также позволяют задавать общие детальные разрешения для пользователей.

Подробнее о том, как задавать и изменять права, см. [здесь »](/api/rights/).

### Закреплённые сообщения

Telegram позволяет закреплять вверху несколько сообщений в чате, группе, супергруппе или канале.

Подробнее о закреплении и откреплении сообщений см. [здесь »](/api/pin/).

### Обсуждение

К каналу можно привязать группу в качестве [группы обсуждения](https://telegram.org/blog/privacy-discussions-web-bots), чтобы пользователи могли обсуждать публикации.

Подробнее о том, как назначить каналу группу обсуждения, см. [здесь »](/api/discussion/)

### Недавние действия

И супергруппы, и каналы предоставляют так называемый [журнал администратора](https://telegram.org/blog/admin-revolution) — журнал недавних значимых действий в супергруппе или канале: изменения настроек либо сведений о группе или канале от имени администратора, исключения и блокировки пользователей и многое другое.

Подробнее см. [здесь »](/api/recent-actions/).

### Глобальный поиск

В [представлении поиска »](/api/search/#global-search) есть отдельная вкладка «Каналы» для глобального поиска по каналам, подробности см. [здесь »](/api/search/#global-search).
