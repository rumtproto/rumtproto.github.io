---
title: "messages.AvailableReactions"
original: "https://core.telegram.org/type/messages.AvailableReactions"
section: ref
kind: type
description: "Анимации и метаданные, связанные с реакциями на сообщения »"
layout: layout.njk
---

# messages.AvailableReactions

Анимации и метаданные, связанные с [реакциями на сообщения »](/api/reactions/)

```
messages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;

---functions---

messages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.availableReactionsNotModified">messages.availableReactionsNotModified</a></td><td>Новых реакций нет</td></tr><tr><td><a href="/constructor/messages.availableReactions">messages.availableReactions</a></td><td>Анимации и метаданные, связанные с <a href="/api/reactions">реакциями на сообщения »</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getAvailableReactions">messages.getAvailableReactions</a></td><td>Получить доступные <a href="/api/reactions">реакции на сообщения »</a></td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
