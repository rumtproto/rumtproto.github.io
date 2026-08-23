---
title: "channels.getGroupsForDiscussion (метод)"
original: "https://core.telegram.org/method/channels.getGroupsForDiscussion"
section: ref
kind: method
layout: layout.njk
---

# channels.getGroupsForDiscussion

*Метод из схемы TL.*

> Get all groups that can be used as [discussion groups](https://core.telegram.org/api/discussion).
> Returned [basic group chats](https://core.telegram.org/api/channel#basic-groups) must be first upgraded to [supergroups](https://core.telegram.org/api/channel#supergroups) before they can be set as a discussion group.  
> To set a returned supergroup as a discussion group, access to its old messages must be enabled using [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/), first.

## Определение TL

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getGroupsForDiscussion#f5dad378 = messages.Chats;
```

## Параметры

This constructor does not require any parameters.

## Результат

[messages.Chats](/type/messages.Chats/)

## Only users can use this method

## Related pages

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/)

Hide/unhide message history for new channel/supergroup users
