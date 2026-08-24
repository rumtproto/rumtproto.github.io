---
title: "Пригласительные ссылки"
original: "https://core.telegram.org/api/invites"
section: api
description: "Чаты и каналы могут иметь либо публичное имя пользователя, либо приватную пригласительную ссылку: приватные пригласительные ссылки дополнительно поддерживают заявки на вступление…"
layout: layout.njk
---

# Пригласительные ссылки

У [чатов и каналов](/api/channel/) может быть публичное имя пользователя или приватная пригласительная ссылка, а приватные пригласительные ссылки можно дополнительно усилить [заявками на вступление](https://telegram.org/blog/shared-media-scrolling-calendar-join-requests-and-more#join-requests-for-groups-and-channels), рассматриваемыми по каждому пользователю отдельно.

### Публичные имена пользователя

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;

---functions---

contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
channels.joinChannel#24b524c5 channel:InputChannel = Updates;

channels.checkUsername#10e6bd2c channel:InputChannel username:string = Bool;
channels.updateUsername#3514b3de channel:InputChannel username:string = Bool;
```

Публичное имя пользователя могут иметь только [супергруппы и каналы](/api/channel/): [обычную группу](/api/channel/) обязательно нужно сначала преобразовать в [супергруппу](/api/channel/) и лишь затем назначать ей имя пользователя; подробности см. в [документации по миграции »](/api/channel/#migration).

[channels.updateUsername](/method/channels.updateUsername/) позволяет напрямую назначить или изменить публичное имя пользователя супергруппы или канала.  
Перед назначением имени можно вызвать [channels.checkUsername](/method/channels.updateUsername/), чтобы убедиться, что указанное имя корректно и свободно.

[@term:peer] [channels.joinChannel](/method/channels.joinChannel/) позволяет вступить в супергруппу или канал, используя сведения о пире (`peer` — адресат: пользователь, чат или канал), полученные с помощью [contacts.resolveUsername](/method/contacts.resolveUsername/).

### Пригласительные ссылки

```
chatInviteExported#a22cbd96 flags:# revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:string admin_id:long date:int start_date:flags.4?int expire_date:flags.1?int usage_limit:flags.2?int usage:flags.3?int requested:flags.7?int subscription_expired:flags.10?int title:flags.8?string subscription_pricing:flags.9?StarsSubscriptionPricing = ExportedChatInvite;

messages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;

messages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;


chatInviteImporter#8c5adfd9 flags:# requested:flags.0?true via_chatlist:flags.3?true user_id:long date:int about:flags.2?string approved_by:flags.1?long = ChatInviteImporter;

messages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;


chatAdminWithInvites#f2ecef23 admin_id:long invites_count:int revoked_invites_count:int = ChatAdminWithInvites;

messages.chatAdminsWithInvites#b69b72d7 admins:Vector<ChatAdminWithInvites> users:Vector<User> = messages.ChatAdminsWithInvites;

chatInviteAlready#5a686d7c chat:Chat = ChatInvite;
chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;

---functions---

messages.exportChatInvite#a455de90 flags:# legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:InputPeer expire_date:flags.0?int usage_limit:flags.1?int title:flags.4?string subscription_pricing:flags.5?StarsSubscriptionPricing = ExportedChatInvite;

messages.getExportedChatInvites#a2b5a3f6 flags:# revoked:flags.3?true peer:InputPeer admin_id:InputUser offset_date:flags.2?int offset_link:flags.2?string limit:int = messages.ExportedChatInvites;
messages.getExportedChatInvite#73746f5c peer:InputPeer link:string = messages.ExportedChatInvite;

messages.editExportedChatInvite#bdca2f75 flags:# revoked:flags.2?true peer:InputPeer link:string expire_date:flags.0?int usage_limit:flags.1?int request_needed:flags.3?Bool title:flags.4?string = messages.ExportedChatInvite;

messages.deleteRevokedExportedChatInvites#56987bd5 peer:InputPeer admin_id:InputUser = Bool;
messages.deleteExportedChatInvite#d464a42b peer:InputPeer link:string = Bool;

messages.getAdminsWithInvites#3920e6ef peer:InputPeer = messages.ChatAdminsWithInvites;
messages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true subscription_expired:flags.3?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;

messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;
messages.importChatInvite#6c50051c hash:string = Updates;
```

Приватной пригласительной ссылке при желании можно задать срок действия и лимит использований, а ещё её можно настроить так, чтобы пользователи попадали в канал, супергруппу или группу только после явного одобрения администратором: подробнее см. [заявки на вступление »](#join-requests).

[@term:unixtime] Пригласительные ссылки соответствуют следующему регулярному выражению: `@(?:t|telegram)\.(?:me|dog)/(joinchat/|\+)?([\w-]+)@i`.  
Первую группу совпадения можно передать в параметр `hash` метода [messages.checkChatInvite](/method/messages.checkChatInvite/), чтобы получить информацию о чате, и метода [messages.importChatInvite](/method/messages.importChatInvite/), чтобы вступить в чат.  
[messages.checkChatInvite](/method/messages.checkChatInvite/) может вернуть [chatInvitePeek](/constructor/chatInvitePeek/) только для [супергрупп и каналов](/api/channel/); в этом случае пользователь вправе напрямую читать сообщения чата с помощью [обновлений](/api/updates/), [messages.getHistory](/method/messages.getHistory/) и [channels.getMessages](/method/channels.getMessages/) вплоть до момента, указанного в поле `expires` (время в формате unixtime — число секунд с 1 января 1970 года).

У только что созданных групп, супергрупп и каналов пригласительная ссылка по умолчанию уже есть.  
Чтобы создать новую, используйте [messages.exportChatInvite](/method/messages.exportChatInvite/).  
Чтобы получить сведения о существующих приглашениях чата, при необходимости отобрав только ссылки, созданные заданным администратором, используйте [messages.getExportedChatInvites](/method/messages.getExportedChatInvites/).  
[messages.getExportedChatInvite](/method/messages.getExportedChatInvite/) позволяет получить информацию о конкретной пригласительной ссылке.

[messages.editExportedChatInvite](/method/messages.editExportedChatInvite/) используется для изменения или отзыва существующих пригласительных ссылок: по отозванной ссылке вступить в группу нельзя, но информацию об отозванных ссылках по-прежнему можно получить через [messages.getExportedChatInvites](/method/messages.getExportedChatInvites/) с установленным флагом `revoked`.  
Используйте [messages.deleteExportedChatInvite](/method/messages.deleteExportedChatInvite/), чтобы безвозвратно удалить пригласительную ссылку, и [messages.deleteRevokedExportedChatInvites](/method/messages.deleteRevokedExportedChatInvites/), чтобы безвозвратно удалить отозванную пригласительную ссылку.

[messages.getChatInviteImporters](/method/messages.getChatInviteImporters/) позволяет получить информацию о пользователях, вступивших по конкретной пригласительной ссылке.

Базовую статистику по числу пригласительных ссылок, созданных конкретным администратором, можно получить с помощью [messages.getAdminsWithInvites](/method/messages.getAdminsWithInvites/).

#### Платные пригласительные ссылки

Администраторы каналов теперь могут создавать особые [пригласительные ссылки](/api/invites/#invite-links), которые позволяют вступить в канал за ежемесячную плату в Telegram Stars.

Подписка на канал по платной пригласительной ссылке переводит Telegram Stars на баланс канала.

Подробнее о полном сценарии см. [здесь »](/api/subscriptions/#channel-subscriptions).

### Заявки на вступление

```
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;

chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;

updatePendingJoinRequests#7063c3db peer:Peer requests_pending:int recent_requesters:Vector<long> = Update;
updateBotChatInviteRequester#11dfa986 peer:Peer date:int user_id:long about:string invite:ExportedChatInvite qts:int = Update;

messages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;

peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;

messageActionChatJoinedByRequest#ebbca3cb = MessageAction;

channelAdminLogEventActionParticipantJoinByRequest#afb6144a invite:ExportedChatInvite approved_by:long = ChannelAdminLogEventAction;

---functions---

messages.checkChatInvite#3eadb1bb hash:string = ChatInvite;
messages.importChatInvite#6c50051c hash:string = Updates;

messages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true subscription_expired:flags.3?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;

messages.hideChatJoinRequest#7fe7e815 flags:# approved:flags.0?true peer:InputPeer user_id:InputUser = Updates;
messages.hideAllChatJoinRequests#e085f4ea flags:# approved:flags.0?true peer:InputPeer link:flags.1?string = Updates;

channels.toggleJoinRequest#4c2985b6 channel:InputChannel enabled:Bool = Updates;
```

Если при [создании или изменении пригласительной ссылки](#invite-links) установлен флаг `request_needed`, либо если соответствующая опция включена методом [channels.toggleJoinRequest](/method/channels.toggleJoinRequest/), то пользователи, применившие пригласительную ссылку через [messages.importChatInvite](/method/messages.importChatInvite/), получат RPC-ошибку `INVITE_REQUEST_SENT`, означающую, что заявка на вступление успешно отправлена администраторам чата.

Соответствующим образом будет выставлен и флаг [`channel.join_request`](/constructor/channel/) в связанных сведениях о супергруппе.

Администраторы-боты получат обновление [updateBotChatInviteRequester](/constructor/updateBotChatInviteRequester/) на каждую отдельную заявку на вступление.  
Администраторы-пользователи получат [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/) и должны вызвать [messages.getChatInviteImporters](/method/messages.getChatInviteImporters/) с установленным флагом `requested`, чтобы получить список пользователей, ожидающих допуска в группу.

После этого администраторы могут воспользоваться методом [messages.hideChatJoinRequest](/method/messages.hideChatJoinRequest/), чтобы одобрить или отклонить отдельную заявку, и методом [messages.hideAllChatJoinRequests](/method/messages.hideAllChatJoinRequests/), чтобы одобрить или отклонить сразу несколько заявок.

Администраторы также могут отправить пользователю сообщение прежде, чем допустить его в группу: в этом случае графическим клиентам _на стороне пользователя_ следует показать в строке действий диалога с администратором пометку о том, что переписку начал администратор чата или канала, куда пользователь недавно подавал заявку на вступление; подробнее см. [документацию по строке действий »](/api/action-bar/#an-admin-from-a-recent-join-request-is-contacting-you).

### Прямые приглашения

```
missingInvitee#628c9224 flags:# premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:long = MissingInvitee;

messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;

---functions---

messages.addChatUser#cbc6d107 chat_id:long user_id:InputUser fwd_limit:int = messages.InvitedUsers;
messages.createChat#92ceddd4 flags:# users:Vector<InputUser> title:string ttl_period:flags.0?int = messages.InvitedUsers;

channels.inviteToChannel#c9e33d54 channel:InputChannel users:Vector<InputUser> = messages.InvitedUsers;
```

Пользователей можно также приглашать в группы и каналы напрямую — как при создании ([обычные группы](/api/channel/) через [messages.createChat](/method/messages.createChat/)), так и позже ([обычные группы](/api/channel/) через [messages.addChatUser](/method/messages.addChatUser/), [супергруппы и каналы](/api/channel/) через [channels.inviteToChannel](/method/channels.inviteToChannel/)).

Эти методы возвращают конструктор [messages.invitedUsers](/constructor/messages.invitedUsers/), содержащий список [обновлений](/api/updates/) об успешно приглашённых пользователях (а при создании группы — и сведения о ней) и список конструкторов [missingInvitee](/constructor/missingInvitee/) с перечнем пользователей, пригласить которых по той или иной причине не удалось.

А именно:

-   Если ни один из флагов [missingInvitee](/constructor/missingInvitee/) не установлен, добавить пользователя не удалось из-за его настроек приватности — вместо этого можно создать [пригласительную ссылку](#invite-links) и отправить её ему обычным сообщением.
-   Если установлен флаг [missingInvitee](/constructor/missingInvitee/).`premium_would_allow_invite`, добавить пользователя не удалось _лишь потому_, что для выполнения операции текущей учётной записи требуется оформить подписку [Telegram Premium](/api/premium/).
-   Если установлен флаг [missingInvitee](/constructor/missingInvitee/).`premium_required_for_pm`, добавить пользователя не удалось из-за его настроек приватности, и вдобавок текущей учётной записи требуется оформить подписку [Telegram Premium](/api/premium/), чтобы отправить пользователю пригласительную ссылку в личном сообщении.
