---
title: "bots.getPopularAppBots"
original: "https://core.telegram.org/method/bots.getPopularAppBots"
section: ref
kind: method
description: "Получить популярные Main Mini Apps для использования во вкладке приложений в глобальном поиске »."
layout: layout.njk
---

# bots.getPopularAppBots

Получить популярные [Main Mini Apps](/api/bots/webapps/#main-mini-apps) для использования во [вкладке приложений в глобальном поиске »](/api/search/#apps-tab).

```
bots.popularAppBots#1991b13b flags:# next_offset:flags.0?string users:Vector<User> = bots.PopularAppBots;
---functions---
bots.getPopularAppBots#c2510192 offset:string limit:int = bots.PopularAppBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для <a href="/api/offsets">постраничной выборки</a>; изначально — пустая строка, затем повторно используйте <code>next_offset</code>, возвращённый предыдущим запросом.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[bots.PopularAppBots](/type/bots.PopularAppBots/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.
