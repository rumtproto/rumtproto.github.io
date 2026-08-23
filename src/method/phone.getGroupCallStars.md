---
title: "phone.getGroupCallStars (метод)"
original: "https://core.telegram.org/method/phone.getGroupCallStars"
section: ref
kind: method
layout: layout.njk
---

# phone.getGroupCallStars

*Метод из схемы TL.*

> Fetch a live story's total donations and top donors, see [paid live story donations »](https://core.telegram.org/api/group-calls#paid-live-story-donations).

## Определение TL

```
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;
---functions---
phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Live story group call |

## Результат

[phone.GroupCallStars](/type/phone.GroupCallStars/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
