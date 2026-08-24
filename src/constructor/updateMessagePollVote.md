---
title: "updateMessagePollVote"
original: "https://core.telegram.org/constructor/updateMessagePollVote"
section: ref
kind: constructor
description: "Конкретный пир проголосовал в опросе (это обновление может получить только бот)."
layout: layout.njk
---

# updateMessagePollVote

Конкретный пир проголосовал в опросе (это обновление может получить только бот).

```
updateMessagePollVote#24f40e77 poll_id:long peer:Peer options:Vector<bytes> qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>poll_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор опроса</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, проголосовавший в опросе</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/bytes">bytes</a>&gt;</td><td>Выбранный вариант или варианты</td></tr><tr><td><strong>positions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Отсчитываемые от нуля индексы выбранных вариантов в векторе <code>answers</code>, поэлементно соответствующие <code>options</code></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
