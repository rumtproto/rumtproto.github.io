---
title: "replyKeyboardHide"
original: "https://core.telegram.org/constructor/replyKeyboardHide"
section: ref
kind: constructor
description: "Скрыть отправленную клавиатуру ответа"
layout: layout.njk
---

# replyKeyboardHide

Скрыть отправленную клавиатуру ответа

```
replyKeyboardHide#a03e5b85 flags:# selective:flags.2?true = ReplyMarkup;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>selective</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Используйте этот флаг, если хотите убрать клавиатуру только для определённых пользователей. Адресаты: 1) пользователи, упомянутые через @ в тексте объекта Message; 2) если сообщение бота является ответом (задано reply_to_message_id) — отправитель исходного сообщения.<br><br>Пример: пользователь голосует в опросе, бот отправляет в ответ на голос подтверждающее сообщение и убирает клавиатуру для этого пользователя, продолжая показывать клавиатуру с вариантами ответа тем, кто ещё не проголосовал</td></tr></tbody></table>

### Тип

[ReplyMarkup](/type/ReplyMarkup/)
