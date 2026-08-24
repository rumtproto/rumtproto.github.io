---
title: "account.Themes"
original: "https://core.telegram.org/type/account.Themes"
section: ref
kind: type
description: "Установленные темы оформления"
layout: layout.njk
---

# account.Themes

Установленные темы оформления

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;

---functions---

account.getThemes#7206e458 format:string hash:long = account.Themes;
account.getChatThemes#d638de89 hash:long = account.Themes;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.themesNotModified">account.themesNotModified</a></td><td>Новые темы не установлены</td></tr><tr><td><a href="/constructor/account.themes">account.themes</a></td><td>Установленные темы оформления</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getThemes">account.getThemes</a></td><td>Получить установленные темы оформления</td></tr><tr><td><a href="/method/account.getChatThemes">account.getChatThemes</a></td><td>Получить все доступные <a href="/api/themes">темы оформления чатов »</a>.</td></tr></tbody></table>
