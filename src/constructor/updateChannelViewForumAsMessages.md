---
title: "updateChannelViewForumAsMessages"
original: "https://core.telegram.org/constructor/updateChannelViewForumAsMessages"
section: ref
kind: constructor
description: "Пользователи также могут выбрать отображение сообщений из всех тем так, как если бы они были отправлены в обычную группу, с помощью настройки «Показывать как сообщения» в…"
layout: layout.njk
---

# updateChannelViewForumAsMessages

Пользователи также могут выбрать отображение сообщений из всех тем так, как если бы они были отправлены в обычную группу, с помощью настройки «Показывать как сообщения» в локальном клиенте.  
Эта настройка затрагивает только текущую учётную запись и синхронизируется с другими активными сессиями методом [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/); вызов этого метода обновит значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и отправит [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

```
updateChannelViewForumAsMessages#7b68920 channel_id:long enabled:Bool = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор форума</td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Новое значение переключателя.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/)

Пользователи также могут отображать сообщения из всех тем [форума](/api/forum/) так, как если бы они были отправлены в обычную группу, — с помощью настройки «Показывать как сообщения» в локальном клиенте: эта настройка влияет только на текущий аккаунт и синхронизируется с другими активными сессиями с помощью этого метода.

Вызов этого метода обновит значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и отправит обновление [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [dialog](/constructor/dialog/)

Чат

#### [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/)

Пользователи также могут выбрать отображение сообщений из всех тем так, как если бы они были отправлены в обычную группу, с помощью настройки «Показывать как сообщения» в локальном клиенте.  
Эта настройка затрагивает только текущую учётную запись и синхронизируется с другими активными сессиями методом [channels.toggleViewForumAsMessages](/method/channels.toggleViewForumAsMessages/); вызов этого метода обновит значение флага `view_forum_as_messages` в [channelFull](/constructor/channelFull/) или [dialog](/constructor/dialog/) и отправит [updateChannelViewForumAsMessages](/constructor/updateChannelViewForumAsMessages/).
