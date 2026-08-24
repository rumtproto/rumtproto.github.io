---
title: "messages.Reactions"
original: "https://core.telegram.org/type/messages.Reactions"
section: ref
kind: type
description: "Набор реакций на сообщения"
layout: layout.njk
---

# messages.Reactions

Набор [реакций на сообщения](/api/reactions/)

```
messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;

---functions---

messages.getTopReactions#bb8125ba limit:int hash:long = messages.Reactions;
messages.getRecentReactions#39461db2 limit:int hash:long = messages.Reactions;
messages.getDefaultTagReactions#bdf93428 hash:long = messages.Reactions;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.reactionsNotModified">messages.reactionsNotModified</a></td><td>Серверный список <a href="/api/reactions">реакций на сообщения</a> не изменился</td></tr><tr><td><a href="/constructor/messages.reactions">messages.reactions</a></td><td>Список <a href="/api/reactions">реакций на сообщения</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getTopReactions">messages.getTopReactions</a></td><td>Получены популярные <a href="/api/reactions">реакции на сообщения</a></td></tr><tr><td><a href="/method/messages.getRecentReactions">messages.getRecentReactions</a></td><td>Получить недавно использованные <a href="/api/reactions">реакции на сообщения</a></td></tr><tr><td><a href="/method/messages.getDefaultTagReactions">messages.getDefaultTagReactions</a></td><td>Получить рекомендуемый список <a href="/api/saved-messages#tags">реакций-тегов для сохранённых сообщений</a> по умолчанию.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
