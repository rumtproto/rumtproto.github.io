---
title: "Phone.GroupCallStars (тип)"
original: "https://core.telegram.org/type/phone.GroupCallStars"
section: ref
kind: type
layout: layout.njk
---

# Phone.GroupCallStars

*Тип из схемы TL.*

> Contains a live story's total donations and top donors, see [paid live story donations »](https://core.telegram.org/api/group-calls#paid-live-story-donations).

## Определение TL

```
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;

---functions---

phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.groupCallStars](/constructor/phone.groupCallStars/) | Contains a live story's total donations and top donors, see [paid live story donations »](https://core.telegram.org/api/group-calls#paid-live-story-donations). |

## Методы

| Method | Описание |
|---|---|
| [phone.getGroupCallStars](/method/phone.getGroupCallStars/) | Fetch a live story's total donations and top donors, see [paid live story donations »](https://core.telegram.org/api/group-calls#paid-live-story-donations). |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
