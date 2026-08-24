---
title: "updates.channelDifferenceEmpty"
original: "https://core.telegram.org/constructor/updates.channelDifferenceEmpty"
section: ref
kind: constructor
description: "Новых обновлений нет"
layout: layout.njk
---

# updates.channelDifferenceEmpty

Новых обновлений нет

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>final</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Есть ли ещё обновления, которые нужно получить (всегда false)</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Последнее значение <a href="/api/updates">PTS</a></td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Клиенты должны повторно запросить разницу канала по истечении timeout секунд, если пользователь <a href="/api/updates#subscribing-to-updates-of-channels-supergroups">в данный момент просматривает чат, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Тип

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
