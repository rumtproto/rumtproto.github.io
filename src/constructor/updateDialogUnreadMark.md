---
title: "updateDialogUnreadMark"
original: "https://core.telegram.org/constructor/updateDialogUnreadMark"
section: ref
kind: constructor
description: "Была изменена ручная отметка о непрочитанности чата"
layout: layout.njk
---

# updateDialogUnreadMark

Была изменена ручная отметка о непрочитанности чата

```
updateDialogUnreadMark#b658f23e flags:# unread:flags.0?true peer:DialogPeer saved_peer_id:flags.1?Peer = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Чат был помечен как прочитанный или как непрочитанный</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/DialogPeer">DialogPeer</a></td><td>[@term:peer] Диалог</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Peer">Peer</a></td><td>Если установлено, отметка относится к указанному <a href="/api/monoforum">идентификатору темы монофорума »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.
