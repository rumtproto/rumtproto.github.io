---
title: "stories.searchPosts"
original: "https://core.telegram.org/method/stories.searchPosts"
section: ref
kind: method
description: "Глобальный поиск историй по хештегу или медиазоне с местоположением; подробнее о полном порядке действий см. здесь »."
layout: layout.njk
---

# stories.searchPosts

Глобальный поиск [историй](/api/stories/) по хештегу или [медиазоне с местоположением](/api/stories/#location-tags); подробнее о полном порядке действий см. [здесь »](/api/stories/#searching-stories).

При вызове метода **обязательно** должно быть задано либо `hashtag`, **либо** `area`.

```
stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;
---functions---
stories.searchPosts#d1810907 flags:# hashtag:flags.0?string area:flags.1?MediaArea peer:flags.2?InputPeer offset:string limit:int = stories.FoundStories;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>hashtag</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Хештег (без <code>#</code>)</td></tr><tr><td><strong>area</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/MediaArea">MediaArea</a></td><td><a href="/constructor/mediaAreaGeoPoint">mediaAreaGeoPoint</a> или <a href="/constructor/mediaAreaVenue">mediaAreaVenue</a>.<br>Обратите внимание: области <a href="/constructor/mediaAreaGeoPoint">mediaAreaGeoPoint</a> доступны для поиска, только если у них есть связанный <code>address</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Если установлено, возвращает только истории, опубликованные этим пиром.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для <a href="/api/offsets">постраничной выборки</a>: изначально — пустая строка, затем <code>next_offset</code> из ранее возвращённого <a href="/constructor/stories.foundStories">stories.foundStories</a>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[stories.FoundStories](/type/stories.FoundStories/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>HASHTAG_INVALID</td><td>Указанный хештег недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/)

Представляет геометку, прикреплённую к [истории](/api/stories/).

#### [mediaAreaVenue](/constructor/mediaAreaVenue/)

Представляет метку места, прикреплённую к [истории](/api/stories/), с дополнительными сведениями о заведении.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [stories.foundStories](/constructor/stories.foundStories/)

Истории, найденные с помощью [глобального поиска историй »](/api/stories/#searching-stories).

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
