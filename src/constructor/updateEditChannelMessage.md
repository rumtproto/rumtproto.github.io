---
title: "updateEditChannelMessage"
original: "https://core.telegram.org/constructor/updateEditChannelMessage"
section: ref
kind: constructor
description: "Сообщение было отредактировано в канале или супергруппе"
layout: layout.njk
---

# updateEditChannelMessage

Сообщение было отредактировано в [канале или супергруппе](/api/channel/)

```
updateEditChannelMessage#1b3f4df7 message:Message pts:int pts_count:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Новое сообщение</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">Число событий после генерации</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Число сгенерированных событий</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
