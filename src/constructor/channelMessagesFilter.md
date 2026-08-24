---
title: "channelMessagesFilter"
original: "https://core.telegram.org/constructor/channelMessagesFilter"
section: ref
kind: constructor
description: "Фильтр для получения только определённых типов сообщений канала."
layout: layout.njk
---

# channelMessagesFilter

Фильтр для получения только определённых типов сообщений канала.

С помощью этого фильтра нельзя получить сообщения старше, чем позволяет размер ящика сообщений канала.

```
channelMessagesFilter#cd77d957 flags:# exclude_new_messages:flags.1?true ranges:Vector<MessageRange> = ChannelMessagesFilter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>exclude_new_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Исключать ли из поиска новые сообщения</td></tr><tr><td><strong>ranges</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageRange">MessageRange</a>&gt;</td><td>Диапазон сообщений для получения</td></tr></tbody></table>

### Тип

[ChannelMessagesFilter](/type/ChannelMessagesFilter/)
