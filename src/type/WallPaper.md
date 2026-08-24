---
title: "WallPaper"
original: "https://core.telegram.org/type/WallPaper"
section: ref
kind: type
description: "Объект содержит информацию об обоях."
layout: layout.njk
---

# WallPaper

Объект содержит информацию об [обоях](/api/wallpapers/).

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;

---functions---

account.getWallPaper#fc8ddbea wallpaper:InputWallPaper = WallPaper;
account.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/wallPaper">wallPaper</a></td><td>Представляет <a href="/api/wallpapers">обои</a> на основе изображения.</td></tr><tr><td><a href="/constructor/wallPaperNoFile">wallPaperNoFile</a></td><td>Представляет <a href="/api/wallpapers">обои</a> только на основе цветов или градиентов.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getWallPaper">account.getWallPaper</a></td><td>Получить информацию об определённых <a href="/api/wallpapers">обоях</a></td></tr><tr><td><a href="/method/account.uploadWallPaper">account.uploadWallPaper</a></td><td>Создать и загрузить новые <a href="/api/wallpapers">обои</a></td></tr></tbody></table>

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
