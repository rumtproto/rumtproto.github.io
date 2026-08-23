---
title: "phone.getGroupCallChainBlocks (метод)"
original: "https://core.telegram.org/method/phone.getGroupCallChainBlocks"
section: ref
kind: method
layout: layout.njk
---

# phone.getGroupCallChainBlocks

*Метод из схемы TL.*

> Fetch blocks from a conference call [subchain »](https://core.telegram.org/api/end-to-end/group-calls#subchains); handle the returned [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) as [specified here »](https://core.telegram.org/api/end-to-end/group-calls#handling-updates).
> If the number of blocks returned by _any_ call to this method is equal to `limit`, this method must be re-invoked immediately after processing the returned [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/), with the newly committed `offset` (usually equal to the returned `next_offset`).

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
phone.getGroupCallChainBlocks#ee9f88a6 call:InputGroupCall sub_chain_id:int offset:int limit:int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Conference whose subchain blocks should be fetched |
| sub_chain_id | [int](/type/int/) | 0 for the main state blockchain, 1 for the call verification subchain |
| offset | [int](/type/int/) | Fetch blocks starting from this height; pass -1 to fetch the latest block |
| limit | [int](/type/int/) | Maximum number of blocks to return in this call, [see pagination](https://core.telegram.org/api/offsets), max 100. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [E2E Group Calls](https://core.telegram.org/api/end-to-end/group-calls)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.

#### [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/)

Contains conference call blockchain blocks, see [handling E2E group call updates »](https://core.telegram.org/api/end-to-end/group-calls#handling-updates).
