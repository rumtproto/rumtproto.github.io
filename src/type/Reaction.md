---
title: "Reaction"
original: "https://core.telegram.org/type/Reaction"
section: ref
kind: type
description: "Реакция на сообщение"
layout: layout.njk
---

# Reaction

[Реакция на сообщение](/api/reactions/)

```
reactionEmpty#79f5d419 = Reaction;
reactionEmoji#1b2286b8 emoticon:string = Reaction;
reactionCustomEmoji#8935fc73 document_id:long = Reaction;
reactionPaid#523da4eb = Reaction;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/reactionEmpty">reactionEmpty</a></td><td>Без реакции</td></tr><tr><td><a href="/constructor/reactionEmoji">reactionEmoji</a></td><td>Обычная реакция на сообщение в виде эмодзи</td></tr><tr><td><a href="/constructor/reactionCustomEmoji">reactionCustomEmoji</a></td><td>Реакция на сообщение <a href="/api/custom-emoji">пользовательским эмодзи</a></td></tr><tr><td><a href="/constructor/reactionPaid">reactionPaid</a></td><td>Представляет <a href="/api/reactions#paid-reactions">платную реакцию за Telegram Stars »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
