---
title: "messages.getAttachedStickers"
original: "https://core.telegram.org/method/messages.getAttachedStickers"
section: ref
kind: method
description: "Получить стикеры, прикреплённые к фотографии или видео"
layout: layout.njk
---

# messages.getAttachedStickers

Получить стикеры, прикреплённые к фотографии или видео

```
---functions---
messages.getAttachedStickers#cc5b67cc media:InputStickeredMedia = Vector<StickerSetCovered>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputStickeredMedia">InputStickeredMedia</a></td><td>Медиа со стикерами</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[StickerSetCovered](/type/StickerSetCovered/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MEDIA_EMPTY</td><td>Указанный объект медиа недействителен.</td></tr></tbody></table>
