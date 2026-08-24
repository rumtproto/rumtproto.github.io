---
title: "stories.getStoryViewsList"
original: "https://core.telegram.org/method/stories.getStoryViewsList"
section: ref
kind: method
description: "Получить список пользователей, просмотревших конкретную опубликованную нами историю"
layout: layout.njk
---

# stories.getStoryViewsList

Получить список пользователей, просмотревших конкретную [опубликованную нами историю](/api/stories/)

```
stories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;
---functions---
stories.getStoryViewsList#7ed23c57 flags:# just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:InputPeer q:flags.1?string id:int offset:string limit:int = stories.StoryViewsList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>just_contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Получать ли только реакции и просмотры, сделанные нашими <a href="/api/contacts">контактами</a></td></tr><tr><td><strong>reactions_first</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Возвращать ли сведения <a href="/constructor/storyView">storyView</a> о пользователях, отреагировавших на историю (то есть если флаг установлен, сервер сначала, как обычно, отсортирует результаты по дате просмотра, а затем дополнительно поставит в начало списка те <a href="/constructor/storyView">storyView</a>, с которыми связана реакция). Игнорируется, если установлен <code>forwards_first</code>.</td></tr><tr><td><strong>forwards_first</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, сначала возвращает пересылки и репосты, затем реакции, затем остальные просмотры; иначе возвращает взаимодействия, отсортированные просто по дате взаимодействия.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором была опубликована история</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Поиск определённых пиров</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для постраничной выборки, берётся из <a href="/constructor/stories.storyViewsList">stories.storyViewsList</a>.<code>next_offset</code></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[stories.StoryViewsList](/type/stories.StoryViewsList/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STORY_ID_INVALID</td><td>Указанный идентификатор истории недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Список контактов](/api/contacts/)

Работа с контактами.

#### [storyView](/constructor/storyView/)

Сведения о датах просмотра и реакциях для [истории](/api/stories/)

#### [stories.storyViewsList](/constructor/stories.storyViewsList/)

Счётчики реакций и просмотров [истории](/api/stories/)

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
