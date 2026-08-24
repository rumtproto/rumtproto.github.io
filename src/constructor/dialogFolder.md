---
title: "dialogFolder"
original: "https://core.telegram.org/constructor/dialogFolder"
section: ref
kind: constructor
description: "Диалог в папке"
layout: layout.njk
---

# dialogFolder

Диалог в папке

```
dialogFolder#71bd134c flags:# pinned:flags.2?true folder:Folder peer:Peer top_message:int unread_muted_peers_count:int unread_unmuted_peers_count:int unread_muted_messages_count:int unread_unmuted_messages_count:int = Dialog;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Закреплена ли эта папка</td></tr><tr><td><strong>folder</strong></td><td style="text-align: center;"><a href="/type/Folder">Folder</a></td><td>Папка</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир в папке</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего сообщения диалога</td></tr><tr><td><strong>unread_muted_peers_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пиров с отключёнными уведомлениями и непрочитанными сообщениями в папке</td></tr><tr><td><strong>unread_unmuted_peers_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пиров с включёнными уведомлениями и непрочитанными сообщениями в папке</td></tr><tr><td><strong>unread_muted_messages_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений от пиров с отключёнными уведомлениями в папке</td></tr><tr><td><strong>unread_unmuted_messages_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений от пиров с включёнными уведомлениями в папке</td></tr></tbody></table>

### Тип

[Dialog](/type/Dialog/)
