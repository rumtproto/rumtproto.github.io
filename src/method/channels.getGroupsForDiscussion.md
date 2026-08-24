---
title: "channels.getGroupsForDiscussion"
original: "https://core.telegram.org/method/channels.getGroupsForDiscussion"
section: ref
kind: method
description: "Получить все группы, которые можно использовать в качестве групп обсуждения."
layout: layout.njk
---

# channels.getGroupsForDiscussion

Получить все группы, которые можно использовать в качестве [групп обсуждения](/api/discussion/).

Возвращённые [обычные группы](/api/channel/#basic-groups) необходимо сначала преобразовать в [супергруппы](/api/channel/#supergroups), прежде чем их можно будет назначить группой обсуждения.  
Чтобы назначить возвращённую супергруппу группой обсуждения, необходимо сначала открыть доступ к её старым сообщениям методом [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/).

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getGroupsForDiscussion#f5dad378 = messages.Chats;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[messages.Chats](/type/messages.Chats/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/)

Скрыть или показать историю сообщений для новых участников канала или супергруппы
