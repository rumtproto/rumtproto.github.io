---
title: "webPageAttributeStory"
original: "https://core.telegram.org/constructor/webPageAttributeStory"
section: ref
kind: constructor
description: "Предпросмотр веб-страницы для истории Telegram"
layout: layout.njk
---

# webPageAttributeStory

Предпросмотр веб-страницы для истории Telegram

```
webPageAttributeStory#2e94c3e7 flags:# peer:Peer id:int story:flags.0?StoryItem = WebPageAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, опубликовавший историю</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/stories#watching-stories">Идентификатор истории</a></td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/StoryItem">StoryItem</a></td><td>Может содержать историю; если её нет, историю следует получить, когда и если потребуется, с помощью <a href="/method/stories.getStoriesByID">stories.getStoriesByID</a> с указанными выше <code>id</code> и <code>peer</code>.</td></tr></tbody></table>

### Тип

[WebPageAttribute](/type/WebPageAttribute/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Получить полные сведения о наборе [историй](/api/stories/) по их идентификаторам.
