---
title: "account.getMultiWallPapers"
original: "https://core.telegram.org/method/account.getMultiWallPapers"
section: ref
kind: method
description: "Получить информацию о нескольких обоях"
layout: layout.njk
---

# account.getMultiWallPapers

Получить информацию о нескольких [обоях](/api/wallpapers/)

```
---functions---
account.getMultiWallPapers#65ad71dc wallpapers:Vector<InputWallPaper> = Vector<WallPaper>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>wallpapers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputWallPaper">InputWallPaper</a>&gt;</td><td><a href="/api/wallpapers">Обои</a>, информацию о которых нужно получить</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[WallPaper](/type/WallPaper/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>WALLPAPER_INVALID</td><td>Указанные обои недействительны.</td></tr></tbody></table>

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
