---
title: "channelAdminLogEventsFilter"
original: "https://core.telegram.org/constructor/channelAdminLogEventsFilter"
section: ref
kind: constructor
description: "Получать только определённые события журнала администратора"
layout: layout.njk
---

# channelAdminLogEventsFilter

Получать только определённые события журнала администратора

```
channelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true sub_extend:flags.18?true edit_rank:flags.19?true = ChannelAdminLogEventsFilter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>join</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantJoin">События вступления</a>, включая <a href="/constructor/channelAdminLogEventActionParticipantJoinByInvite">вступления по пригласительным ссылкам</a> и <a href="/constructor/channelAdminLogEventActionParticipantJoinByRequest">заявки на вступление</a>.</td></tr><tr><td><strong>leave</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantLeave">События выхода</a></td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantInvite">События приглашения</a></td></tr><tr><td><strong>ban</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan">События блокировки</a></td></tr><tr><td><strong>unban</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan">События снятия блокировки</a></td></tr><tr><td><strong>kick</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan">События исключения</a></td></tr><tr><td><strong>unkick</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan">События отмены исключения</a></td></tr><tr><td><strong>promote</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleAdmin">События назначения администратором</a></td></tr><tr><td><strong>demote</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleAdmin">События снятия прав администратора</a></td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>События изменения информации (когда изменяются настройки канала: <a href="/constructor/channelAdminLogEventActionChangeAbout">описание</a>, <a href="/constructor/channelAdminLogEventActionChangeLinkedChat">связанный чат</a>, <a href="/constructor/channelAdminLogEventActionChangeLocation">местоположение</a>, <a href="/constructor/channelAdminLogEventActionChangePhoto">фотография</a>, <a href="/constructor/channelAdminLogEventActionChangeStickerSet">набор стикеров</a>, <a href="/constructor/channelAdminLogEventActionChangeTitle">название</a> или <a href="/constructor/channelAdminLogEventActionChangeUsername">имя пользователя</a>, <a href="/constructor/channelAdminLogEventActionToggleSlowMode">медленный режим</a>, <a href="/constructor/channelAdminLogEventActionChangeHistoryTTL">срок хранения истории</a>)</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>События изменения настроек (<a href="/constructor/channelAdminLogEventActionToggleInvites">приглашения</a>, <a href="/constructor/channelAdminLogEventActionTogglePreHistoryHidden">скрытая предыстория</a>, <a href="/constructor/channelAdminLogEventActionToggleSignatures">подписи</a>, <a href="/constructor/channelAdminLogEventActionDefaultBannedRights">права по умолчанию</a>, <a href="/constructor/channelAdminLogEventActionToggleForum">переключение режима форума</a>)</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionUpdatePinned">События закрепления сообщений</a></td></tr><tr><td><strong>edit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionEditMessage">События редактирования сообщений</a></td></tr><tr><td><strong>delete</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionDeleteMessage">События удаления сообщений</a></td></tr><tr><td><strong>group_call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>События группового звонка</td></tr><tr><td><strong>invites</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>События приглашений</td></tr><tr><td><strong>send</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>В канале было опубликовано сообщение</td></tr><tr><td><strong>forums</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/constructor/true">true</a></td><td>События, связанные с <a href="/api/forum">форумом</a></td></tr><tr><td><strong>sub_extend</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/constructor/true">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantSubExtend">События продления подписки за Telegram Stars »</a></td></tr><tr><td><strong>edit_rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>События, в которых было изменено пользовательское <a href="/api/rank">звание »</a> участника (<a href="/constructor/channelAdminLogEventActionParticipantEditRank">channelAdminLogEventActionParticipantEditRank</a>).</td></tr></tbody></table>

### Тип

[ChannelAdminLogEventsFilter](/type/ChannelAdminLogEventsFilter/)

### Связанные страницы

#### [channelAdminLogEventActionParticipantJoin](/constructor/channelAdminLogEventActionParticipantJoin/)

Пользователь вступил в группу (для больших групп сведения о вступившем пользователе не показываются)

#### [channelAdminLogEventActionParticipantJoinByInvite](/constructor/channelAdminLogEventActionParticipantJoinByInvite/)

Пользователь вступил в [супергруппу или канал](/api/channel/) по конкретной пригласительной ссылке

#### [channelAdminLogEventActionParticipantJoinByRequest](/constructor/channelAdminLogEventActionParticipantJoinByRequest/)

Администратор принял в чат нового участника

#### [channelAdminLogEventActionParticipantLeave](/constructor/channelAdminLogEventActionParticipantLeave/)

Пользователь покинул канал/супергруппу (для больших групп сведения о вступившем пользователе не показываются)

#### [channelAdminLogEventActionParticipantInvite](/constructor/channelAdminLogEventActionParticipantInvite/)

Пользователь был приглашён в группу

#### [channelAdminLogEventActionParticipantToggleBan](/constructor/channelAdminLogEventActionParticipantToggleBan/)

[Права](/api/rights/) заблокированного пользователя были изменены

#### [channelAdminLogEventActionParticipantToggleAdmin](/constructor/channelAdminLogEventActionParticipantToggleAdmin/)

[Права](/api/rights/) администратора у пользователя были изменены

#### [channelAdminLogEventActionChangeAbout](/constructor/channelAdminLogEventActionChangeAbout/)

Описание было изменено

#### [channelAdminLogEventActionChangeLinkedChat](/constructor/channelAdminLogEventActionChangeLinkedChat/)

Связанный чат был изменён

#### [channelAdminLogEventActionChangeLocation](/constructor/channelAdminLogEventActionChangeLocation/)

Местоположение геогруппы было изменено

#### [channelAdminLogEventActionChangePhoto](/constructor/channelAdminLogEventActionChangePhoto/)

Изображение канала или супергруппы было изменено

#### [channelAdminLogEventActionChangeStickerSet](/constructor/channelAdminLogEventActionChangeStickerSet/)

Набор стикеров супергруппы был изменён

#### [channelAdminLogEventActionChangeTitle](/constructor/channelAdminLogEventActionChangeTitle/)

Название канала/супергруппы было изменено

#### [channelAdminLogEventActionChangeUsername](/constructor/channelAdminLogEventActionChangeUsername/)

Имя пользователя канала/супергруппы было изменено

#### [channelAdminLogEventActionToggleSlowMode](/constructor/channelAdminLogEventActionToggleSlowMode/)

[Изменена настройка медленного режима для супергрупп](/method/channels.toggleSlowMode/)

#### [channelAdminLogEventActionChangeHistoryTTL](/constructor/channelAdminLogEventActionChangeHistoryTTL/)

Время жизни сообщений в этом чате было изменено

#### [channelAdminLogEventActionToggleInvites](/constructor/channelAdminLogEventActionToggleInvites/)

Приглашения были включены или отключены

#### [channelAdminLogEventActionTogglePreHistoryHidden](/constructor/channelAdminLogEventActionTogglePreHistoryHidden/)

Настройка скрытия предыдущей истории была [изменена](/method/channels.togglePreHistoryHidden/)

#### [channelAdminLogEventActionToggleSignatures](/constructor/channelAdminLogEventActionToggleSignatures/)

Подписи авторов в канале были включены/отключены

#### [channelAdminLogEventActionDefaultBannedRights](/constructor/channelAdminLogEventActionDefaultBannedRights/)

Права по умолчанию для заблокированных пользователей были изменены

#### [channelAdminLogEventActionToggleForum](/constructor/channelAdminLogEventActionToggleForum/)

Функциональность [форума](/api/forum/) была включена или отключена.

#### [channelAdminLogEventActionUpdatePinned](/constructor/channelAdminLogEventActionUpdatePinned/)

Сообщение было закреплено

#### [channelAdminLogEventActionEditMessage](/constructor/channelAdminLogEventActionEditMessage/)

Сообщение было отредактировано

#### [channelAdminLogEventActionDeleteMessage](/constructor/channelAdminLogEventActionDeleteMessage/)

Сообщение было удалено

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [channelAdminLogEventActionParticipantSubExtend](/constructor/channelAdminLogEventActionParticipantSubExtend/)

Платный подписчик продлил свою [подписку за Telegram Stars »](/api/stars/#star-subscriptions).

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.

#### [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/)

[Звание »](/api/rank/) участника изменено.
