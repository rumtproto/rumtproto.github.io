---
title: "account.wallPapers"
original: "https://core.telegram.org/constructor/account.wallPapers"
section: ref
kind: constructor
description: "Установленные обои"
layout: layout.njk
---

# account.wallPapers

Установленные [обои](/api/wallpapers/)

```
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>wallpapers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/WallPaper">WallPaper</a>&gt;</td><td><a href="/api/wallpapers">Обои</a></td></tr></tbody></table>

### Тип

[account.WallPapers](/type/account.WallPapers/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
