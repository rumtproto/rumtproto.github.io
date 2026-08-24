---
title: "messageActionSetChatWallPaper"
original: "https://core.telegram.org/constructor/messageActionSetChatWallPaper"
section: ref
kind: constructor
description: "Обои » текущего чата были изменены."
layout: layout.njk
---

# messageActionSetChatWallPaper

[Обои »](/api/wallpapers/) текущего чата были изменены.

```
messageActionSetChatWallPaper#5060a3f4 flags:# same:flags.0?true for_both:flags.1?true wallpaper:WallPaper = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>same</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что пользователь применил <a href="/api/wallpapers">обои »</a>, ранее отправленные другим пользователем в сообщении <a href="/constructor/messageActionSetChatWallPaper">messageActionSetChatWallPaper</a>.</td></tr><tr><td><strong>for_both</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>[@term:peer] Если установлено, указывает, что обои были принудительно применены для обеих сторон, без явного подтверждения со стороны собеседника.<br>Если сообщение входящее и новые обои, выбранные для нас другим пользователем, нам не понравились, мы можем вернуть прежние обои только на своей стороне, вызвав <a href="/method/messages.setChatWallPaper">messages.setChatWallPaper</a> и передав только флаг <code>revert</code> (и, разумеется, параметр <code>peer</code>).</td></tr><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/type/WallPaper">WallPaper</a></td><td>Новые <a href="/api/wallpapers">обои</a></td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/)

[Обои »](/api/wallpapers/) текущего чата были изменены.

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Установить пользовательские [обои »](/api/wallpapers/) в конкретном личном чате с другим пользователем.
