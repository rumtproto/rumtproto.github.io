---
title: "channels.adminLogResults (конструктор)"
original: "https://core.telegram.org/constructor/channels.adminLogResults"
section: ref
kind: constructor
layout: layout.njk
---

# channels.adminLogResults

*Конструктор из схемы TL.*

> Admin log events

## Определение TL

```
channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| events | [Vector](https://core.telegram.org/type/Vector%20t)<[ChannelAdminLogEvent](/type/ChannelAdminLogEvent/)> | Admin log events |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in events |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in events |

## Тип

[channels.AdminLogResults](/type/channels.AdminLogResults/)
