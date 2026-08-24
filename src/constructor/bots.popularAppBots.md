---
title: "bots.popularAppBots"
original: "https://core.telegram.org/constructor/bots.popularAppBots"
section: ref
kind: constructor
description: "Популярные Main Mini Apps, предназначенные для вкладки приложений в глобальном поиске »."
layout: layout.njk
---

# bots.popularAppBots

Популярные [Main Mini Apps](/api/bots/webapps/#main-mini-apps), предназначенные для [вкладки приложений в глобальном поиске »](/api/search/#apps-tab).

```
bots.popularAppBots#1991b13b flags:# next_offset:flags.0?string users:Vector<User> = bots.PopularAppBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для <a href="/api/offsets">постраничной выборки</a>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>[@term:Mini App] Боты, связанные с каждым <a href="/api/bots/webapps#main-mini-apps">Main Mini App, подробнее »</a>.</td></tr></tbody></table>

### Тип

[bots.PopularAppBots](/type/bots.PopularAppBots/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.
