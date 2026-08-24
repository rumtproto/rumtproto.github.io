---
title: "messages.getAvailableEffects"
original: "https://core.telegram.org/method/messages.getAvailableEffects"
section: ref
kind: method
description: "Получить полный список доступных анимированных эффектов для сообщений »."
layout: layout.njk
---

# messages.getAvailableEffects

Получить полный список доступных [анимированных эффектов для сообщений »](/api/effects/).

```
messages.availableEffectsNotModified#d1ed9a5b = messages.AvailableEffects;
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;
---functions---
messages.getAvailableEffects#dea20a39 hash:int = messages.AvailableEffects;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.AvailableEffects](/type/messages.AvailableEffects/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.
