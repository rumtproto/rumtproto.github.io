---
title: "account.getWallPaper"
original: "https://core.telegram.org/method/account.getWallPaper"
section: ref
kind: method
description: "Получить информацию об определённых обоях"
layout: layout.njk
---

# account.getWallPaper

Получить информацию об определённых [обоях](/api/wallpapers/)

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
---functions---
account.getWallPaper#fc8ddbea wallpaper:InputWallPaper = WallPaper;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/type/InputWallPaper">InputWallPaper</a></td><td><a href="/api/wallpapers">Обои</a>, о которых нужно получить сведения</td></tr></tbody></table>

### Результат

[WallPaper](/type/WallPaper/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>WALLPAPER_INVALID</td><td>Указанные обои недействительны.</td></tr></tbody></table>

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
