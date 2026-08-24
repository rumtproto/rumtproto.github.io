---
title: "help.getRecentMeUrls"
original: "https://core.telegram.org/method/help.getRecentMeUrls"
section: ref
kind: method
description: "Получить недавно использованные ссылки t.me."
layout: layout.njk
---

# help.getRecentMeUrls

Получить недавно использованные ссылки `t.me`.

При установке официальных приложений по кнопкам «Download Telegram», размещённым на страницах [t.me](https://t.me), после установки в приложение передаётся реферальный параметр.  
Если после загрузки приложения пользователь создаёт новую учётную запись (вместо входа в существующую), реферальный параметр следует импортировать этим методом, который возвращает страницы [t.me](https://t.me), недавно открывавшиеся пользователем до установки Telegram.

```
help.recentMeUrls#e0310d7 urls:Vector<RecentMeUrl> chats:Vector<Chat> users:Vector<User> = help.RecentMeUrls;
---functions---
help.getRecentMeUrls#3dc0f114 referer:string = help.RecentMeUrls;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>referer</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Источник перехода</td></tr></tbody></table>

### Результат

[help.RecentMeUrls](/type/help.RecentMeUrls/)

### Этот метод доступен только пользователям
