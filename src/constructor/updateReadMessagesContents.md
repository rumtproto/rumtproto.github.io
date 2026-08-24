---
title: "updateReadMessagesContents"
original: "https://core.telegram.org/constructor/updateReadMessagesContents"
section: ref
kind: constructor
description: "Содержимое сообщений в общем ящике сообщений было прочитано (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл…"
layout: layout.njk
---

# updateReadMessagesContents

Содержимое сообщений в общем [ящике сообщений](/api/updates/) было прочитано (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл просмотрен и отмечен как прочитанный с помощью [messages.readMessageContents](/method/messages.readMessageContents/)).

```
updateReadMessagesContents#f8227181 flags:# messages:Vector<int> pts:int pts_count:int date:flags.0?int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы прочитанных сообщений</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">Число событий после генерации</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Число сгенерированных событий</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Когда последнее сообщение в <code>messages</code> было отмечено как прочитанное.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [messages.readMessageContents](/method/messages.readMessageContents/)

Уведомляет отправителя о том, что получатель прослушал голосовое сообщение или посмотрел видео, порождая [updateReadMessagesContents](/constructor/updateReadMessagesContents/).
