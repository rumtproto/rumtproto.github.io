---
title: "messages.availableEffects"
original: "https://core.telegram.org/constructor/messages.availableEffects"
section: ref
kind: constructor
description: "Полный список доступных анимированных эффектов для сообщений »."
layout: layout.njk
---

# messages.availableEffects

Полный список доступных [анимированных эффектов для сообщений »](/api/effects/).

```
messages.availableEffects#bddb616e hash:int effects:Vector<AvailableEffect> documents:Vector<Document> = messages.AvailableEffects;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>effects</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AvailableEffect">AvailableEffect</a>&gt;</td><td>Эффекты сообщений</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Документы, указанные в конструкторах <code>effects</code>.</td></tr></tbody></table>

### Тип

[messages.AvailableEffects](/type/messages.AvailableEffects/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.
