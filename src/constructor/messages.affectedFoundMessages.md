---
title: "messages.affectedFoundMessages"
original: "https://core.telegram.org/constructor/messages.affectedFoundMessages"
section: ref
kind: constructor
description: "Найденные сообщения, затронутые изменениями"
layout: layout.njk
---

# messages.affectedFoundMessages

Найденные сообщения, затронутые изменениями

```
messages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">Число событий после генерации</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Число сгенерированных событий</a></td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если больше нуля, запрос необходимо повторить, чтобы удалить остальные сообщения</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы затронутых сообщений</td></tr></tbody></table>

### Тип

[messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
