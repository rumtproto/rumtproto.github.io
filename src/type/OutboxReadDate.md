---
title: "OutboxReadDate (тип)"
original: "https://core.telegram.org/type/OutboxReadDate"
section: ref
kind: type
layout: layout.njk
---

# OutboxReadDate

*Тип из схемы TL.*

> Exact read date of a private message we sent to another user.

## Определение TL

```
outboxReadDate#3bb842ac date:int = OutboxReadDate;

---functions---

messages.getOutboxReadDate#8c4bfe5d peer:InputPeer msg_id:int = OutboxReadDate;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [outboxReadDate](/constructor/outboxReadDate/) | Exact read date of a private message we sent to another user. |

## Методы

| Method | Описание |
|---|---|
| [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/) | Get the exact read date of one of our messages, sent to a private chat with another user. Can be only done for private outgoing messages not older than [appConfig.pm_read_date_expire_period »](https://core.telegram.org/api/config#pm-read-date-expire-period). If the peer's [userFull](/constructor/userFull/).read_dates_private flag is set, we will not be able to fetch the exact read date of messages we send to them, and a USER_PRIVACY_RESTRICTED RPC error will be emitted. The exact read date of messages might still be unavailable for other reasons, see [here »](/constructor/globalPrivacySettings/) for more info. To set [userFull](/constructor/userFull/).read_dates_private for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the settings.hide_read_marks flag. |
