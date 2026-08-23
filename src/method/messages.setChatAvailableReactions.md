---
title: "messages.setChatAvailableReactions (метод)"
original: "https://core.telegram.org/method/messages.setChatAvailableReactions"
section: ref
kind: method
layout: layout.njk
---

# messages.setChatAvailableReactions

*Метод из схемы TL.*

> Change the set of [message reactions »](https://core.telegram.org/api/reactions) that can be used in a certain group, supergroup or channel

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
messages.setChatAvailableReactions#864b2581 flags:# peer:InputPeer available_reactions:ChatReactions reactions_limit:flags.0?int paid_enabled:flags.1?Bool = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Group where to apply changes |
| available_reactions | [ChatReactions](/type/ChatReactions/) | Allowed reaction emojis |
| reactions_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | This flag may be used to impose a custom limit of unique reactions (i.e. a customizable version of [appConfig.reactions_uniq_max](https://core.telegram.org/api/config#reactions-uniq-max)); this field and the other info set by the method will then be available to users in [channelFull](/constructor/channelFull/) and [chatFull](/constructor/chatFull/). If this flag is not set, the previously configured reactions_limit will not be altered. |
| paid_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Bool](/type/Bool/) | If this flag is set and a [Bool](/type/Bool/) is passed, the method will enable or disable [paid message reactions »](https://core.telegram.org/api/reactions#paid-reactions). If this flag is not set, the previously stored setting will not be changed. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 400 | LIMIT_PER_POST_INVALID | The specified reactions_limit value is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | REACTION_INVALID | The specified reaction is invalid. |

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [chatFull](/constructor/chatFull/)

Full info about a [basic group](https://core.telegram.org/api/channel#basic-groups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Bool](/type/Bool/)

Boolean type.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
