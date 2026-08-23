---
title: "Channels.AdminLogResults (тип)"
original: "https://core.telegram.org/type/channels.AdminLogResults"
section: ref
kind: type
layout: layout.njk
---

# Channels.AdminLogResults

*Тип из схемы TL.*

> Admin log events

## Определение TL

```
channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;

---functions---

channels.getAdminLog#33ddf480 flags:# channel:InputChannel q:string events_filter:flags.0?ChannelAdminLogEventsFilter admins:flags.1?Vector<InputUser> max_id:long min_id:long limit:int = channels.AdminLogResults;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channels.adminLogResults](/constructor/channels.adminLogResults/) | Admin log events |

## Методы

| Method | Описание |
|---|---|
| [channels.getAdminLog](/method/channels.getAdminLog/) | Get the admin log of a [channel/supergroup](https://core.telegram.org/api/channel) |
