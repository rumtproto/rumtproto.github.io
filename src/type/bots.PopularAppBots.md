---
title: "bots.PopularAppBots"
original: "https://core.telegram.org/type/bots.PopularAppBots"
section: ref
kind: type
description: "Популярные Main Mini Apps, предназначенные для вкладки приложений в глобальном поиске »."
layout: layout.njk
---

# bots.PopularAppBots

Популярные [Main Mini Apps](/api/bots/webapps/#main-mini-apps), предназначенные для [вкладки приложений в глобальном поиске »](/api/search/#apps-tab).

```
bots.popularAppBots#1991b13b flags:# next_offset:flags.0?string users:Vector<User> = bots.PopularAppBots;

---functions---

bots.getPopularAppBots#c2510192 offset:string limit:int = bots.PopularAppBots;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/bots.popularAppBots">bots.popularAppBots</a></td><td>Популярные <a href="/api/bots/webapps#main-mini-apps">Main Mini Apps</a>, предназначенные для <a href="/api/search#apps-tab">вкладки приложений в глобальном поиске »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.getPopularAppBots">bots.getPopularAppBots</a></td><td>Получить популярные <a href="/api/bots/webapps#main-mini-apps">Main Mini Apps</a> для использования во <a href="/api/search#apps-tab">вкладке приложений в глобальном поиске »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.
