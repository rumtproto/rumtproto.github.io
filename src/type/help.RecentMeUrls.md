---
title: "help.RecentMeUrls"
original: "https://core.telegram.org/type/help.RecentMeUrls"
section: ref
kind: type
description: "Недавние ссылки t.me"
layout: layout.njk
---

# Help.RecentMeUrls

Недавние ссылки t.me

```
help.recentMeUrls#e0310d7 urls:Vector<RecentMeUrl> chats:Vector<Chat> users:Vector<User> = help.RecentMeUrls;

---functions---

help.getRecentMeUrls#3dc0f114 referer:string = help.RecentMeUrls;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.recentMeUrls">help.recentMeUrls</a></td><td>Недавние ссылки t.me</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getRecentMeUrls">help.getRecentMeUrls</a></td><td>Получить недавно использованные ссылки <code>t.me</code>.<br><br>При установке официальных приложений по кнопкам «Download Telegram», размещённым на страницах <a href="https://t.me">t.me</a>, приложению после установки передаётся реферальный параметр.<br>Если после загрузки приложения пользователь создаёт новую учётную запись (а не входит в существующую), реферальный параметр следует импортировать с помощью этого метода, который возвращает страницы <a href="https://t.me">t.me</a>, недавно открывавшиеся пользователем до установки Telegram.</td></tr></tbody></table>
