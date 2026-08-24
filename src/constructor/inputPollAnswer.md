---
title: "inputPollAnswer"
original: "https://core.telegram.org/constructor/inputPollAnswer"
section: ref
kind: constructor
description: "Вариант ответа для добавления в опрос со свободным ответом »"
layout: layout.njk
---

# inputPollAnswer

Вариант ответа для добавления в [опрос со свободным ответом »](/api/poll/#open-answer-polls)

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Текст ответа</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputMedia">InputMedia</a></td><td>Необязательное вложение для отображения рядом с ответом</td></tr></tbody></table>

### Тип

[PollAnswer](/type/PollAnswer/)

### Связанные страницы

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.
