---
title: "ChatBannedRights"
original: "https://core.telegram.org/type/ChatBannedRights"
section: ref
kind: type
description: "Представляет права обычного пользователя в супергруппе, канале или чате."
layout: layout.njk
---

# ChatBannedRights

Представляет права обычного пользователя в [супергруппе, канале или чате](/api/channel/).

```
chatBannedRights#9f120418 flags:# view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true edit_rank:flags.26?true until_date:int = ChatBannedRights;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatBannedRights">chatBannedRights</a></td><td>Представляет права обычного пользователя в <a href="/api/channel">супергруппе, канале или чате</a>. В этом случае флаги инвертированы: если флаг установлен, он <strong>запрещает</strong> пользователю выполнять соответствующее действие.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
