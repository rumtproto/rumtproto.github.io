---
title: "InputWallPaper"
original: "https://core.telegram.org/type/InputWallPaper"
section: ref
kind: type
description: "Обои"
layout: layout.njk
---

# InputWallPaper

[Обои](/api/wallpapers/)

```
inputWallPaper#e630b979 id:long access_hash:long = InputWallPaper;
inputWallPaperSlug#72091c80 slug:string = InputWallPaper;
inputWallPaperNoFile#967a462e id:long = InputWallPaper;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputWallPaper">inputWallPaper</a></td><td><a href="/api/wallpapers">Обои</a></td></tr><tr><td><a href="/constructor/inputWallPaperSlug">inputWallPaperSlug</a></td><td><a href="/api/wallpapers">Обои</a> по слагу (уникальному идентификатору, полученному из <a href="/api/links#wallpaper-links">ссылки на обои »</a>)</td></tr><tr><td><a href="/constructor/inputWallPaperNoFile">inputWallPaperNoFile</a></td><td><a href="/api/wallpapers">Обои</a> без хеша доступа к файлу; используются, например, при удалении обоев (<code>unsave=true</code>) методом <a href="/method/account.saveWallPaper">account.saveWallPaper</a>, когда передаётся только идентификатор обоев.</td></tr></tbody></table>

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
