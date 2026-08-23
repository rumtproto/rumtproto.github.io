---
title: "phone.getGroupParticipants (метод)"
original: "https://core.telegram.org/method/phone.getGroupParticipants"
section: ref
kind: method
layout: layout.njk
---

# phone.getGroupParticipants

*Метод из схемы TL.*

> Get [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) participants.

## Определение TL

```
phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;
---functions---
phone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Group call whose participants should be fetched |
| ids | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | If specified, will fetch group participant info about the specified peers |
| sources | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | If specified, will fetch group participant info about the specified WebRTC source IDs |
| offset | [string](/type/string/) | Offset for results, taken from the next_offset field of [phone.groupParticipants](/constructor/phone.groupParticipants/) or the participants_next_offset field of [phone.groupCall](/constructor/phone.groupCall/), initially an empty string. Note: if no more results are available, the method call will return an empty next_offset; thus, avoid providing the next_offset returned in [phone.groupParticipants](/constructor/phone.groupParticipants/) if it is empty, to avoid an infinite loop. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[phone.GroupParticipants](/type/phone.GroupParticipants/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [phone.groupParticipants](/constructor/phone.groupParticipants/)

Contains a page of group call participants, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call).

#### [phone.groupCall](/constructor/phone.groupCall/)

Contains group call information and an initial participant page, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call).

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
