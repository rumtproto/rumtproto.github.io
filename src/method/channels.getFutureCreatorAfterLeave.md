---
title: "channels.getFutureCreatorAfterLeave"
original: "https://core.telegram.org/method/channels.getFutureCreatorAfterLeave"
section: ref
kind: method
description: "Только для владельцев групп и каналов: возвращает идентификатор пользователя, который станет новым владельцем группы, если мы решим её покинуть; подробнее о полном порядке…"
layout: layout.njk
---

# channels.getFutureCreatorAfterLeave

Только для владельцев групп и каналов: возвращает идентификатор пользователя, который станет новым владельцем группы, если мы решим её покинуть; подробнее о полном порядке действий см. [здесь »](/api/channel/#leaving-groups-channels).

```
 Method schema is available as of layer 223. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Супергруппа или канал, которые мы собираемся покинуть.</td></tr></tbody></table>

### Результат

[User](/type/User/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>
