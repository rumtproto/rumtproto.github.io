---
title: "DialogFilter"
original: "https://core.telegram.org/type/DialogFilter"
section: ref
kind: type
description: "Фильтр диалогов (папка »)"
layout: layout.njk
---

# DialogFilter

Фильтр диалогов ([папка »](/api/folders/))

```
dialogFilter#aa472651 flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;
dialogFilterDefault#363293ae = DialogFilter;
dialogFilterChatlist#96537bd7 flags:# has_my_invites:flags.26?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/dialogFilter">dialogFilter</a></td><td>Фильтр диалогов, он же <a href="/api/folders">папка</a></td></tr><tr><td><a href="/constructor/dialogFilterDefault">dialogFilterDefault</a></td><td>Используется только при изменении порядка папок для обозначения папки по умолчанию (все чаты).</td></tr><tr><td><a href="/constructor/dialogFilterChatlist">dialogFilterChatlist</a></td><td>Папка, импортированная по <a href="/api/links#chat-folder-links">глубокой ссылке на папку чатов »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
