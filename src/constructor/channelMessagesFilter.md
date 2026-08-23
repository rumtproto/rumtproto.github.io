---
title: "channelMessagesFilter (конструктор)"
original: "https://core.telegram.org/constructor/channelMessagesFilter"
section: ref
kind: constructor
layout: layout.njk
---

# channelMessagesFilter

*Конструктор из схемы TL.*

> Filter for getting only certain types of channel messages.
> This filter cannot be used to fetch messages older than the channel message box size.

## Определение TL

```
channelMessagesFilter#cd77d957 flags:# exclude_new_messages:flags.1?true ranges:Vector<MessageRange> = ChannelMessagesFilter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| exclude_new_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to exclude new messages from the search |
| ranges | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageRange](/type/MessageRange/)> | A range of messages to fetch |

## Тип

[ChannelMessagesFilter](/type/ChannelMessagesFilter/)
