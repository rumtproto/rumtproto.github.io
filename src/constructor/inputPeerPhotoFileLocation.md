---
title: "inputPeerPhotoFileLocation"
original: "https://core.telegram.org/constructor/inputPeerPhotoFileLocation"
section: ref
kind: constructor
description: "Расположение фотографии профиля канала, группы, супергруппы или пользователя"
layout: layout.njk
---

# inputPeerPhotoFileLocation

Расположение фотографии профиля канала, группы, супергруппы или пользователя

```
inputPeerPhotoFileLocation#37257e99 flags:# big:flags.0?true peer:InputPeer photo_id:long = InputFileLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>big</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Загружать ли версию изображения в высоком качестве</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, фотографию профиля которого нужно скачать</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор фотографии</td></tr></tbody></table>

### Тип

[InputFileLocation](/type/InputFileLocation/)
