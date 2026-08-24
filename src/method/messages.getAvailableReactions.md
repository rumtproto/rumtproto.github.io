---
title: "messages.getAvailableReactions"
original: "https://core.telegram.org/method/messages.getAvailableReactions"
section: ref
kind: method
description: "Получить доступные реакции на сообщения »"
layout: layout.njk
---

# messages.getAvailableReactions

Получить доступные [реакции на сообщения »](/api/reactions/)

```
messages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;
---functions---
messages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.AvailableReactions](/type/messages.AvailableReactions/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
