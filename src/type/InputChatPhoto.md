---
title: "InputChatPhoto"
original: "https://core.telegram.org/type/InputChatPhoto"
section: ref
kind: type
description: "Определяет новую фотографию профиля группы."
layout: layout.njk
---

# InputChatPhoto

Определяет новую фотографию профиля группы.

```
inputChatPhotoEmpty#1ca48f57 = InputChatPhoto;
inputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;
inputChatPhoto#8953ad37 id:InputPhoto = InputChatPhoto;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputChatPhotoEmpty">inputChatPhotoEmpty</a></td><td>Пустой конструктор, удалить фотографию группы.</td></tr><tr><td><a href="/constructor/inputChatUploadedPhoto">inputChatUploadedPhoto</a></td><td>Новая фотография, которая будет установлена как фотография профиля группы.<br><br>Флаги <code>file</code>, <code>video</code> и <code>video_emoji_markup</code> взаимоисключающие.</td></tr><tr><td><a href="/constructor/inputChatPhoto">inputChatPhoto</a></td><td>Существующая фотография, которую нужно установить как фотографию профиля чата.</td></tr></tbody></table>
