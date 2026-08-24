---
title: "messages.Chats"
original: "https://core.telegram.org/type/messages.Chats"
section: ref
kind: type
description: "Объект содержит список чатов со вспомогательными данными."
layout: layout.njk
---

# messages.Chats

Объект содержит список чатов со вспомогательными данными.

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;

---functions---

messages.getChats#49e9528f id:Vector<long> = messages.Chats;
messages.getCommonChats#e40ca104 user_id:InputUser max_id:long limit:int = messages.Chats;

channels.getChannels#a7f6bbb id:Vector<InputChannel> = messages.Chats;
channels.getAdminedPublicChannels#f8b036af flags:# by_location:flags.0?true check_limit:flags.1?true for_personal:flags.2?true = messages.Chats;
channels.getLeftChannels#8341ecc0 offset:int = messages.Chats;
channels.getGroupsForDiscussion#f5dad378 = messages.Chats;
channels.getChannelRecommendations#25a71742 flags:# channel:flags.0?InputChannel = messages.Chats;

stories.getChatsToSend#a56a8b60 = messages.Chats;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.chats">messages.chats</a></td><td>Список чатов со вспомогательными данными.</td></tr><tr><td><a href="/constructor/messages.chatsSlice">messages.chatsSlice</a></td><td>Неполный список чатов; остальные придётся получить с помощью <a href="/api/offsets">постраничной выборки</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getChats">messages.getChats</a></td><td>Возвращает основные сведения о чатах по их идентификаторам.</td></tr><tr><td><a href="/method/messages.getCommonChats">messages.getCommonChats</a></td><td>Получить общие с пользователем чаты</td></tr><tr><td><a href="/method/channels.getChannels">channels.getChannels</a></td><td>Получить информацию о <a href="/api/channel">каналах и супергруппах</a></td></tr><tr><td><a href="/method/channels.getAdminedPublicChannels">channels.getAdminedPublicChannels</a></td><td>Получить <a href="/api/channel">каналы, супергруппы и геогруппы</a>, в которых мы являемся администратором. Обычно вызывается, когда пользователь превышает <a href="/constructor/config">ограничение</a> на число принадлежащих ему публичных <a href="/api/channel">каналов, супергрупп и геогрупп</a> и ему предлагается удалить один из его каналов, супергрупп или геогрупп.</td></tr><tr><td><a href="/method/channels.getLeftChannels">channels.getLeftChannels</a></td><td>Получить список <a href="/api/channel">каналов и супергрупп</a>, которые мы покинули; требуется <a href="/api/takeout">сессия выгрузки данных, подробнее см. здесь »</a>.</td></tr><tr><td><a href="/method/channels.getGroupsForDiscussion">channels.getGroupsForDiscussion</a></td><td>Получить все группы, которые можно использовать в качестве <a href="/api/discussion">групп обсуждения</a>.<br><br>Возвращённые <a href="/api/channel#basic-groups">обычные группы</a> необходимо сначала преобразовать в <a href="/api/channel#supergroups">супергруппы</a>, и только затем их можно назначить группой обсуждения.<br>Чтобы назначить возвращённую супергруппу группой обсуждения, нужно сначала открыть доступ к её старым сообщениям с помощью <a href="/method/channels.togglePreHistoryHidden">channels.togglePreHistoryHidden</a>.</td></tr><tr><td><a href="/method/channels.getChannelRecommendations">channels.getChannelRecommendations</a></td><td>Получить список публичных каналов схожей тематики, отобранных по сходству их <strong>аудитории подписчиков</strong>.</td></tr><tr><td><a href="/method/stories.getChatsToSend">stories.getChatsToSend</a></td><td>Получить список каналов, в которых пользователь может публиковать <a href="/api/stories">истории</a></td></tr></tbody></table>
