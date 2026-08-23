---
title: "messageFwdHeader (конструктор)"
original: "https://core.telegram.org/constructor/messageFwdHeader"
section: ref
kind: constructor
layout: layout.njk
---

# messageFwdHeader

*Конструктор из схемы TL.*

> Info about a forwarded message

## Определение TL

```
messageFwdHeader#4e4df4bb flags:# imported:flags.7?true saved_out:flags.11?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int saved_from_id:flags.8?Peer saved_from_name:flags.9?string saved_date:flags.10?int psa_type:flags.6?string = MessageFwdHeader;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| imported | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether this message was [imported from a foreign chat service, click here for more info »](https://core.telegram.org/api/import) |
| saved_out | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Only for messages forwarded to [saved messages »](https://core.telegram.org/api/saved-messages), set if the original message was outgoing (though the message may have been originally outgoing even if this flag is not set, if from_id points to the current user). |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | The ID of the user that originally sent the message |
| from_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | The name of the user that originally sent the message |
| date | [int](/type/int/) | When was the message originally sent |
| channel_post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | ID of the channel message that was forwarded |
| post_author | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | For channels and if signatures are enabled, author of the channel message |
| saved_from_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Peer](/type/Peer/) | Only for messages forwarded to [saved messages »](https://core.telegram.org/api/saved-messages), contains the dialog where the message was originally sent. |
| saved_from_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Only for messages forwarded to [saved messages »](https://core.telegram.org/api/saved-messages), contains the original ID of the message in saved_from_peer. |
| saved_from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[Peer](/type/Peer/) | Only for forwarded messages reforwarded to [saved messages »](https://core.telegram.org/api/saved-messages), contains the sender of the original message (i.e. if user A sends a message, then user B forwards it somewhere, then user C saves it to saved messages, this field will contain the ID of user B and from_id will contain the ID of user A). |
| saved_from_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[string](/type/string/) | Only for forwarded messages from users with forward privacy enabled, sent by users with forward privacy enabled, reforwarded to [saved messages »](https://core.telegram.org/api/saved-messages), contains the sender of the original message (i.e. if user A (fwd privacy enabled) sends a message, then user B (fwd privacy enabled) forwards it somewhere, then user C saves it to saved messages, this field will contain the name of user B and from_name will contain the name of user A). |
| saved_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Only for forwarded messages reforwarded to [saved messages »](https://core.telegram.org/api/saved-messages), indicates when was the original message sent (i.e. if user A sends a message @ unixtime 1, then user B forwards it somewhere @ unixtime 2, then user C saves it to saved messages @ unixtime 3, this field will contain 2, date will contain 1 and the date of the containing [message](/constructor/message/) will contain 3). |
| psa_type | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[string](/type/string/) | PSA type |

## Тип

[MessageFwdHeader](/type/MessageFwdHeader/)

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [message](/constructor/message/)

A message
