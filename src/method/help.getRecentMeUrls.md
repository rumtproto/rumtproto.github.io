---
title: "help.getRecentMeUrls (метод)"
original: "https://core.telegram.org/method/help.getRecentMeUrls"
section: ref
kind: method
layout: layout.njk
---

# help.getRecentMeUrls

*Метод из схемы TL.*

> Get recently used `t.me` links.
> When installing official applications from "Download Telegram" buttons present in [t.me](https://t.me) pages, a referral parameter is passed to applications after installation.  
> If, after downloading the application, the user creates a new account (instead of logging into an existing one), the referral parameter should be imported using this method, which returns the [t.me](https://t.me) pages the user recently opened, before installing Telegram.

## Определение TL

```
help.recentMeUrls#e0310d7 urls:Vector<RecentMeUrl> chats:Vector<Chat> users:Vector<User> = help.RecentMeUrls;
---functions---
help.getRecentMeUrls#3dc0f114 referer:string = help.RecentMeUrls;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| referer | [string](/type/string/) | Referrer |

## Результат

[help.RecentMeUrls](/type/help.RecentMeUrls/)

## Only users can use this method
