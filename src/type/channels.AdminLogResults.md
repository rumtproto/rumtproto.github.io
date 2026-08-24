---
title: "channels.AdminLogResults"
original: "https://core.telegram.org/type/channels.AdminLogResults"
section: ref
kind: type
description: "События журнала администратора"
layout: layout.njk
---

# Channels.AdminLogResults

События журнала администратора

```
channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;

---functions---

channels.getAdminLog#33ddf480 flags:# channel:InputChannel q:string events_filter:flags.0?ChannelAdminLogEventsFilter admins:flags.1?Vector<InputUser> max_id:long min_id:long limit:int = channels.AdminLogResults;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channels.adminLogResults">channels.adminLogResults</a></td><td>События журнала администратора</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/channels.getAdminLog">channels.getAdminLog</a></td><td>Получить журнал администратора <a href="/api/channel">канала или супергруппы</a></td></tr></tbody></table>
