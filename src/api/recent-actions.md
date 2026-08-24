---
title: "Журнал действий администраторов"
original: "https://core.telegram.org/api/recent-actions"
section: api
description: "И супергруппы, и каналы предоставляют так называемый журнал действий администраторов — список недавних значимых действий в супергруппе или канале: изменение настроек и информации…"
layout: layout.njk
---

# Журнал действий администраторов

И у супергрупп, и у каналов есть так называемый [журнал действий администраторов](https://telegram.org/blog/admin-revolution) — список недавних значимых действий в супергруппе или канале: изменение настроек группы либо канала или сведений о них от имени администратора, исключение и блокировка пользователей и многое другое.

```
channelAdminLogEvent#1fad68cd id:long date:int user_id:long action:ChannelAdminLogEventAction = ChannelAdminLogEvent;

channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;

channelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true sub_extend:flags.18?true edit_rank:flags.19?true = ChannelAdminLogEventsFilter;

---functions---

channels.getAdminLog#33ddf480 flags:# channel:InputChannel q:string events_filter:flags.0?ChannelAdminLogEventsFilter admins:flags.1?Vector<InputUser> max_id:long min_id:long limit:int = channels.AdminLogResults;
```

[@term:q] Метод [channels.getAdminLog](/method/channels.getAdminLog/) позволяет получить список недавних действий администраторов.  
Конструктор [channelAdminLogEventsFilter](/constructor/channelAdminLogEventsFilter/) позволяет отобрать действия только определённого типа, а параметр `admins` — показать только действия определённых администраторов.  
Параметр `q` (от англ. query — поисковый запрос) позволяет, кроме того, оставить только записи, совпадающие с заданной строкой.

Полный перечень доступных событий приведён на [странице типа »](/type/ChannelAdminLogEventAction/).
