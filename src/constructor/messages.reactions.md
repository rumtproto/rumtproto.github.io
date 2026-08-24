---
title: "messages.reactions"
original: "https://core.telegram.org/constructor/messages.reactions"
section: ref
kind: constructor
description: "Список реакций на сообщения"
layout: layout.njk
---

# messages.reactions

Список [реакций на сообщения](/api/reactions/)

```
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш, используемый для кеширования; его также можно заново вычислить локально по алгоритму, указанному <a href="/api/reactions#recent-reactions">здесь »</a>.</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Reaction">Reaction</a>&gt;</td><td>Реакции</td></tr></tbody></table>

### Тип

[messages.Reactions](/type/messages.Reactions/)

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
