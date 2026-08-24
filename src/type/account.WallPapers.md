---
title: "account.WallPapers"
original: "https://core.telegram.org/type/account.WallPapers"
section: ref
kind: type
description: "Обои"
layout: layout.njk
---

# Account.WallPapers

[Обои](/api/wallpapers/)

```
account.wallPapersNotModified#1c199183 = account.WallPapers;
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;

---functions---

account.getWallPapers#7967d36 hash:long = account.WallPapers;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.wallPapersNotModified">account.wallPapersNotModified</a></td><td>Новых <a href="/api/wallpapers">обоев</a> не найдено</td></tr><tr><td><a href="/constructor/account.wallPapers">account.wallPapers</a></td><td>Установленные <a href="/api/wallpapers">обои</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getWallPapers">account.getWallPapers</a></td><td>Возвращает список доступных <a href="/api/wallpapers">обоев</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
