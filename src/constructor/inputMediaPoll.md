---
title: "inputMediaPoll"
original: "https://core.telegram.org/constructor/inputMediaPoll"
section: ref
kind: constructor
description: "Опрос"
layout: layout.njk
---

# inputMediaPoll

Опрос

```
inputMediaPoll#f94e5f1 flags:# poll:Poll correct_answers:flags.0?Vector<bytes> solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>poll</strong></td><td style="text-align: center;"><a href="/type/Poll">Poll</a></td><td>Опрос, который нужно отправить</td></tr><tr><td><strong>correct_answers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Отсчитываемые от нуля индексы правильных ответов в векторе <code>answers</code> (для викторин)</td></tr><tr><td><strong>attached_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/InputMedia">InputMedia</a></td><td>Необязательное вложение для отображения рядом с опросом</td></tr><tr><td><strong>solution</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Текст, который показывается, когда пользователь выбирает неверный ответ или нажимает на значок лампочки в опросе-викторине, 0–200 символов, не более 2 переводов строки.</td></tr><tr><td><strong>solution_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления текста</a> для пояснения в поле <code>solution</code>.</td></tr><tr><td><strong>solution_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputMedia">InputMedia</a></td><td>Необязательное медиавложение, показываемое рядом с пояснением к ответу на викторину</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
