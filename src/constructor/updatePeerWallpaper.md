---
title: "updatePeerWallpaper"
original: "https://core.telegram.org/constructor/updatePeerWallpaper"
section: ref
kind: constructor
description: "Изменились обои » указанного пира."
layout: layout.njk
---

# updatePeerWallpaper

Изменились [обои »](/api/wallpapers/) указанного пира.

```
updatePeerWallpaper#ae3f101d flags:# wallpaper_overridden:flags.1?true peer:Peer wallpaper:flags.0?WallPaper = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>wallpaper_overridden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Выбрал ли другой пользователь обои для нас с помощью <a href="/method/messages.setChatWallPaper">messages.setChatWallPaper</a> и флага <code>for_both</code>; подробнее <a href="/api/wallpapers#installing-wallpapers-in-a-specific-chat-or-channel">см. здесь »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, в котором изменились обои.</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/WallPaper">WallPaper</a></td><td>Новые обои; если не заданы, обои были удалены и следует использовать обои по умолчанию.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Установить пользовательские [обои »](/api/wallpapers/) в конкретном личном чате с другим пользователем.

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.
