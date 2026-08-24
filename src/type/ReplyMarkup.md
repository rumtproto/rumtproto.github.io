---
title: "ReplyMarkup"
original: "https://core.telegram.org/type/ReplyMarkup"
section: ref
kind: type
description: "Разметка ответа для клавиатур ботов и инлайн-клавиатур"
layout: layout.njk
---

# ReplyMarkup

Разметка ответа для клавиатур ботов и инлайн-клавиатур

```
replyKeyboardHide#a03e5b85 flags:# selective:flags.2?true = ReplyMarkup;
replyKeyboardForceReply#86b40b08 flags:# single_use:flags.1?true selective:flags.2?true placeholder:flags.3?string = ReplyMarkup;
replyKeyboardMarkup#85dd99d1 flags:# resize:flags.0?true single_use:flags.1?true selective:flags.2?true persistent:flags.4?true rows:Vector<KeyboardButtonRow> placeholder:flags.3?string = ReplyMarkup;
replyInlineMarkup#48a30254 rows:Vector<KeyboardButtonRow> = ReplyMarkup;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/replyKeyboardHide">replyKeyboardHide</a></td><td>Скрыть отправленную клавиатуру ответа</td></tr><tr><td><a href="/constructor/replyKeyboardForceReply">replyKeyboardForceReply</a></td><td>Заставить пользователя отправить ответ</td></tr><tr><td><a href="/constructor/replyKeyboardMarkup">replyKeyboardMarkup</a></td><td>Представляет клавиатуру ответа</td></tr><tr><td><a href="/constructor/replyInlineMarkup">replyInlineMarkup</a></td><td>Представляет инлайн-клавиатуру</td></tr></tbody></table>
