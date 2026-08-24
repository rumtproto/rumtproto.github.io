---
title: "ChannelMessagesFilter"
original: "https://core.telegram.org/type/ChannelMessagesFilter"
section: ref
kind: type
description: "Фильтр для получения только определённых типов сообщений канала"
layout: layout.njk
---

# ChannelMessagesFilter

Фильтр для получения только определённых типов сообщений канала

```
channelMessagesFilterEmpty#94d42ee7 = ChannelMessagesFilter;
channelMessagesFilter#cd77d957 flags:# exclude_new_messages:flags.1?true ranges:Vector<MessageRange> = ChannelMessagesFilter;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/channelMessagesFilterEmpty">channelMessagesFilterEmpty</a></td><td>Без фильтра</td></tr><tr><td><a href="/constructor/channelMessagesFilter">channelMessagesFilter</a></td><td>Фильтр для получения только определённых типов сообщений канала.<br><br>С помощью этого фильтра нельзя получить сообщения старше, чем позволяет размер ящика сообщений канала.</td></tr></tbody></table>
