---
title: "updateChannelTooLong"
original: "https://core.telegram.org/constructor/updateChannelTooLong"
section: ref
kind: constructor
description: "В указанном канале появились новые обновления; клиент обязан получить их вручную, вызвав updates.getChannelDifference, как описано в документации »."
layout: layout.njk
---

# updateChannelTooLong

В указанном канале появились новые обновления; клиент обязан получить их вручную, вызвав [updates.getChannelDifference](/method/updates.getChannelDifference/), как описано в [документации »](/api/updates/).

Если PTS канала в настоящий момент не сохранён в базе данных (то есть мы вступили в этот канал с другого клиента, пока текущий клиент был не в сети), начать получение с указанного pts.

**Не** обязательно означает, что [достигнут предел размера ящика сообщений канала](/api/updates/#recovering-gaps-for-very-old-messages); это лишь означает, что число обновлений в очереди ящика сообщений слишком велико, чтобы доставить их пассивно через сокет.

```
updateChannelTooLong#108d941f flags:# channel_id:long pts:flags.0?int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Канал</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">PTS</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [updates.getChannelDifference](/method/updates.getChannelDifference/)

Возвращает разницу между текущим состоянием обновлений определённого канала и переданным состоянием.
