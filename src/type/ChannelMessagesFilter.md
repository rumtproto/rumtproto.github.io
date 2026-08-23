---
title: "ChannelMessagesFilter (тип)"
original: "https://core.telegram.org/type/ChannelMessagesFilter"
section: ref
kind: type
layout: layout.njk
---

# ChannelMessagesFilter

*Тип из схемы TL.*

> Filter for fetching only certain types of channel messages

## Определение TL

```
channelMessagesFilterEmpty#94d42ee7 = ChannelMessagesFilter;
channelMessagesFilter#cd77d957 flags:# exclude_new_messages:flags.1?true ranges:Vector<MessageRange> = ChannelMessagesFilter;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channelMessagesFilterEmpty](/constructor/channelMessagesFilterEmpty/) | No filter |
| [channelMessagesFilter](/constructor/channelMessagesFilter/) | Filter for getting only certain types of channel messages. This filter cannot be used to fetch messages older than the channel message box size. |
