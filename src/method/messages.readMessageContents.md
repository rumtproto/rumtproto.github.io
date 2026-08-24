---
title: "messages.readMessageContents"
original: "https://core.telegram.org/method/messages.readMessageContents"
section: ref
kind: method
description: "Уведомляет отправителя о том, что получатель прослушал голосовое сообщение или посмотрел видео, порождая updateReadMessagesContents."
layout: layout.njk
---

# messages.readMessageContents

Уведомляет отправителя о том, что получатель прослушал голосовое сообщение или посмотрел видео, порождая [updateReadMessagesContents](/constructor/updateReadMessagesContents/).

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
---functions---
messages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Список идентификаторов сообщений</td></tr></tbody></table>

### Результат

[messages.AffectedMessages](/type/messages.AffectedMessages/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [updateReadMessagesContents](/constructor/updateReadMessagesContents/)

Содержимое сообщений в общем [ящике сообщений](/api/updates/) было прочитано (генерируется специально для таких сообщений, как голосовые сообщения или видео, только после того, как медиафайл просмотрен и отмечен как прочитанный с помощью [messages.readMessageContents](/method/messages.readMessageContents/)).
