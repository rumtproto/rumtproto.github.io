---
title: "replyKeyboardForceReply"
original: "https://core.telegram.org/constructor/replyKeyboardForceReply"
section: ref
kind: constructor
description: "Заставить пользователя отправить ответ"
layout: layout.njk
---

# replyKeyboardForceReply

Заставить пользователя отправить ответ

```
replyKeyboardForceReply#86b40b08 flags:# single_use:flags.1?true selective:flags.2?true placeholder:flags.3?string = ReplyMarkup;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>single_use</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Требует от клиентов скрыть клавиатуру сразу после её использования. Клавиатура останется доступной, но клиенты автоматически покажут в чате обычную буквенную клавиатуру — пользователь может нажать специальную кнопку в поле ввода, чтобы снова увидеть пользовательскую клавиатуру.</td></tr><tr><td><strong>selective</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Используйте этот параметр, если хотите показать клавиатуру только определённым пользователям. Адресаты: 1) пользователи, упомянутые через @ в тексте объекта Message; 2) если сообщение бота является ответом (задано reply_to_message_id) — отправитель исходного сообщения.<br>Пример: пользователь просит сменить язык бота, бот отвечает на запрос клавиатурой для выбора нового языка. Остальные участники группы клавиатуру не видят.</td></tr><tr><td><strong>placeholder</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Замещающий текст, отображаемый в поле ввода при активной клавиатуре; 1–64 символа.</td></tr></tbody></table>

### Тип

[ReplyMarkup](/type/ReplyMarkup/)
