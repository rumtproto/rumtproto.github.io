---
title: "messages.toggleSuggestedPostApproval (метод)"
original: "https://core.telegram.org/method/messages.toggleSuggestedPostApproval"
section: ref
kind: method
layout: layout.njk
---

# messages.toggleSuggestedPostApproval

*Метод из схемы TL.*

> Approve or reject a [suggested post »](https://core.telegram.org/api/suggested-posts).

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.toggleSuggestedPostApproval#8107455c flags:# reject:flags.1?true peer:InputPeer msg_id:int schedule_date:flags.0?int reject_comment:flags.2?string = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| reject | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Reject the suggested post. |
| peer | [InputPeer](/type/InputPeer/) | Both for users and channels, must contain the ID of the [direct messages monoforum »](https://core.telegram.org/api/monoforum) (for channels, the topic ID is extracted automatically from the msg_id). |
| msg_id | [int](/type/int/) | ID of the suggestion message. |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Custom scheduling date. |
| reject_comment | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Optional comment for rejections (can only be used if reject is set). |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.
