---
title: "phone.groupCallStars (конструктор)"
original: "https://core.telegram.org/constructor/phone.groupCallStars"
section: ref
kind: constructor
layout: layout.njk
---

# phone.groupCallStars

*Конструктор из схемы TL.*

> Contains a live story's total donations and top donors, see [paid live story donations »](https://core.telegram.org/api/group-calls#paid-live-story-donations).

## Определение TL

```
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| total_stars | [long](/type/long/) | Total Stars donated to the live story |
| top_donors | [Vector](https://core.telegram.org/type/Vector%20t)<[GroupCallDonor](/type/GroupCallDonor/)> | Top donors |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in top_donors |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in top_donors |

## Тип

[phone.GroupCallStars](/type/phone.GroupCallStars/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
