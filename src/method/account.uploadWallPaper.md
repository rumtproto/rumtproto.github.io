---
title: "account.uploadWallPaper"
original: "https://core.telegram.org/method/account.uploadWallPaper"
section: ref
kind: method
description: "Создать и загрузить новые обои"
layout: layout.njk
---

# account.uploadWallPaper

Создать и загрузить новые [обои](/api/wallpapers/)

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
---functions---
account.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>for_chat</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг при загрузке обоев, которые будут переданы в <a href="/method/messages.setChatWallPaper">messages.setChatWallPaper</a>.</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td>Обои в формате JPG/PNG</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип загруженных обоев</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/WallPaperSettings">WallPaperSettings</a></td><td>Настройки обоев</td></tr></tbody></table>

### Результат

[WallPaper](/type/WallPaper/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>WALLPAPER_FILE_INVALID</td><td>Указанный файл обоев недействителен.</td></tr><tr><td>400</td><td>WALLPAPER_MIME_INVALID</td><td>Указанный MIME-тип обоев недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Установить пользовательские [обои »](/api/wallpapers/) в конкретном личном чате с другим пользователем.

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
