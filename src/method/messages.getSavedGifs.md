---
title: "messages.getSavedGifs"
original: "https://core.telegram.org/method/messages.getSavedGifs"
section: ref
kind: method
description: "Получить сохранённые GIF."
layout: layout.njk
---

# messages.getSavedGifs

Получить сохранённые GIF.

```
messages.savedGifsNotModified#e8025ca2 = messages.SavedGifs;
messages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;
---functions---
messages.getSavedGifs#5cf09635 hash:long = messages.SavedGifs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.SavedGifs](/type/messages.SavedGifs/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
