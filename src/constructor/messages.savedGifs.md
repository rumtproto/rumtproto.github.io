---
title: "messages.savedGifs"
original: "https://core.telegram.org/constructor/messages.savedGifs"
section: ref
kind: constructor
description: "Сохранённые GIF"
layout: layout.njk
---

# messages.savedGifs

Сохранённые GIF

```
messages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>gifs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Список сохранённых GIF-файлов</td></tr></tbody></table>

### Тип

[messages.SavedGifs](/type/messages.SavedGifs/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
