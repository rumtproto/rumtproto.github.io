---
title: "updateChannelWebPage"
original: "https://core.telegram.org/constructor/updateChannelWebPage"
section: ref
kind: constructor
description: "Для ссылки в сообщении канала или супергруппы был сформирован предпросмотр веб-страницы"
layout: layout.njk
---

# updateChannelWebPage

Для ссылки в сообщении [канала или супергруппы](/api/channel/) был сформирован предпросмотр веб-страницы

```
updateChannelWebPage#2f2ba99f channel_id:long webpage:WebPage pts:int pts_count:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/channel">канала/супергруппы</a></td></tr><tr><td><strong>webpage</strong></td><td style="text-align: center;"><a href="/type/WebPage">WebPage</a></td><td>Сформированное превью веб-страницы</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">Число событий после генерации</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Число сгенерированных событий</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
