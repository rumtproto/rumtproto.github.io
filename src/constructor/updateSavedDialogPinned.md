---
title: "updateSavedDialogPinned"
original: "https://core.telegram.org/constructor/updateSavedDialogPinned"
section: ref
kind: constructor
description: "Диалог в сохранённых сообщениях был закреплён или откреплён"
layout: layout.njk
---

# updateSavedDialogPinned

[Диалог в сохранённых сообщениях](/api/saved-messages/) был закреплён или откреплён

```
updateSavedDialogPinned#aeaf9e74 flags:# pinned:flags.0?true peer:DialogPeer = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Был ли диалог закреплён</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/DialogPeer">DialogPeer</a></td><td>[@term:peer] Диалог</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
