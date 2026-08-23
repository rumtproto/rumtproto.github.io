---
title: "Help.RecentMeUrls (тип)"
original: "https://core.telegram.org/type/help.RecentMeUrls"
section: ref
kind: type
layout: layout.njk
---

# Help.RecentMeUrls

*Тип из схемы TL.*

> Recent t.me URLs

## Определение TL

```
help.recentMeUrls#e0310d7 urls:Vector<RecentMeUrl> chats:Vector<Chat> users:Vector<User> = help.RecentMeUrls;

---functions---

help.getRecentMeUrls#3dc0f114 referer:string = help.RecentMeUrls;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.recentMeUrls](/constructor/help.recentMeUrls/) | Recent t.me URLs |

## Методы

| Method | Описание |
|---|---|
| [help.getRecentMeUrls](/method/help.getRecentMeUrls/) | Get recently used t.me links. When installing official applications from "Download Telegram" buttons present in [t.me](https://t.me) pages, a referral parameter is passed to applications after installation. If, after downloading the application, the user creates a new account (instead of logging into an existing one), the referral parameter should be imported using this method, which returns the [t.me](https://t.me) pages the user recently opened, before installing Telegram. |
