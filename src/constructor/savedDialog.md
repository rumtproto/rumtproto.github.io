---
title: "savedDialog"
original: "https://core.telegram.org/constructor/savedDialog"
section: ref
kind: constructor
description: "Представляет сохранённый диалог »."
layout: layout.njk
---

# savedDialog

Представляет [сохранённый диалог »](/api/saved-messages/).

```
savedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Закреплён ли диалог</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Диалог</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего сообщения</td></tr></tbody></table>

### Тип

[SavedDialog](/type/SavedDialog/)

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
