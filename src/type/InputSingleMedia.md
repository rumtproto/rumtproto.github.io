---
title: "InputSingleMedia"
original: "https://core.telegram.org/type/InputSingleMedia"
section: ref
kind: type
description: "Отдельный медиафайл в альбоме или сгруппированных медиафайлах, отправленный методом messages.sendMultiMedia."
layout: layout.njk
---

# InputSingleMedia

Отдельный медиафайл в [альбоме или сгруппированных медиафайлах](/api/files/#albums-grouped-media), отправленный методом [messages.sendMultiMedia](/method/messages.sendMultiMedia/).

```
inputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputSingleMedia">inputSingleMedia</a></td><td>Один медиафайл из <a href="/api/files#albums-grouped-media">альбома или сгруппированных медиафайлов</a>, отправленных методом <a href="/method/messages.sendMultiMedia">messages.sendMultiMedia</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Отправить [альбом или сгруппированные медиафайлы](/api/files/#albums-grouped-media)
