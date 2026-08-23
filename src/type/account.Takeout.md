---
title: "Account.Takeout (тип)"
original: "https://core.telegram.org/type/account.Takeout"
section: ref
kind: type
layout: layout.njk
---

# Account.Takeout

*Тип из схемы TL.*

> Takeout info

## Определение TL

```
account.takeout#4dba4501 id:long = account.Takeout;

---functions---

account.initTakeoutSession#8ef3eab0 flags:# contacts:flags.0?true message_users:flags.1?true message_chats:flags.2?true message_megagroups:flags.3?true message_channels:flags.4?true files:flags.5?true file_max_size:flags.5?long = account.Takeout;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.takeout](/constructor/account.takeout/) | Takeout info |

## Методы

| Method | Описание |
|---|---|
| [account.initTakeoutSession](/method/account.initTakeoutSession/) | Initialize a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). |
