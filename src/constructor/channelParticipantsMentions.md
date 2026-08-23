---
title: "channelParticipantsMentions (конструктор)"
original: "https://core.telegram.org/constructor/channelParticipantsMentions"
section: ref
kind: constructor
layout: layout.njk
---

# channelParticipantsMentions

*Конструктор из схемы TL.*

> This filter is used when looking for supergroup members to mention.  
> This filter will automatically remove anonymous admins, and return even non-participant users that replied to a specific [thread](https://core.telegram.org/api/threads) through the [comment section](https://core.telegram.org/api/threads#channel-comments) of a channel.

## Определение TL

```
channelParticipantsMentions#e04b5ceb flags:# q:flags.0?string top_msg_id:flags.1?int = ChannelParticipantsFilter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| q | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Filter by user name or username |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Look only for users that posted in this [thread](https://core.telegram.org/api/threads) |

## Тип

[ChannelParticipantsFilter](/type/ChannelParticipantsFilter/)

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
