---
title: "contacts.getTopPeers"
original: "https://core.telegram.org/method/contacts.getTopPeers"
section: ref
kind: method
description: "Получить наиболее используемые пиры"
layout: layout.njk
---

# contacts.getTopPeers

Получить наиболее используемые пиры

```
contacts.topPeersNotModified#de266ef5 = contacts.TopPeers;
contacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;
contacts.topPeersDisabled#b52c939d = contacts.TopPeers;
---functions---
contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true offset:int limit:int hash:long = contacts.TopPeers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>correspondents</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Пользователи, с которыми мы переписываемся чаще всего</td></tr><tr><td><strong>bots_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Наиболее используемые боты</td></tr><tr><td><strong>bots_inline</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Наиболее используемые инлайн-боты</td></tr><tr><td><strong>phone_calls</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Пользователи, которым чаще всего звонят</td></tr><tr><td><strong>forward_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Пользователи, которым пользователь часто пересылает сообщения</td></tr><tr><td><strong>forward_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Чаты, в которые пользователь часто пересылает сообщения</td></tr><tr><td><strong>groups</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Часто открываемые группы и супергруппы</td></tr><tr><td><strong>channels</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>Наиболее посещаемые каналы</td></tr><tr><td><strong>bots_app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>[@term:Mini App] Наиболее часто используемые <a href="/api/bots/webapps#main-mini-apps">основные Mini App ботов</a>.</td></tr><tr><td><strong>bots_guestchat</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/constructor/true">true</a></td><td>Наиболее часто используемые <a href="/api/bots/guest-mode">гостевые боты »</a></td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение для <a href="/api/offsets">постраничной выборки</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr></tbody></table>

### Результат

[contacts.TopPeers](/type/contacts.TopPeers/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TYPES_EMPTY</td><td>Не указан тип популярных пиров.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Гостевой режим для ботов](/api/bots/guest-mode/)

Гостевых ботов можно вызывать по имени пользователя из **любого** несекретного личного чата, группы и супергруппы (кроме групп и супергрупп с включённой [защитой контента »](/api/content-protection/#for-groups-and-channels)); они публикуют свои результаты прямо в чат, даже если не состоят в нём.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
