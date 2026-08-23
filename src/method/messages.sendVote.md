---
title: "messages.sendVote (метод)"
original: "https://core.telegram.org/method/messages.sendVote"
section: ref
kind: method
layout: layout.njk
---

# messages.sendVote

*Метод из схемы TL.*

> Vote in a [poll](/constructor/poll/)
> Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).
> Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](https://core.telegram.org/api/poll#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](https://core.telegram.org/api/poll#country-restricted-polls) and the user's [`phone_country_iso2` »](https://core.telegram.org/api/config#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](https://core.telegram.org/api/poll#vote-restrictions) for the full list of conditions.

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
messages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat where the poll was sent |
| msg_id | [int](/type/int/) | The message ID of the poll |
| options | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](/type/bytes/)> | The options that were chosen |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MESSAGE_POLL_CLOSED | Poll closed. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | OPTIONS_TOO_MUCH | Too many options provided. |
| 400 | OPTION_INVALID | Invalid option selected. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 406 | POLL_COUNTRY_RESTRICTED | Users from the current user's country cannot vote in this [country-restricted poll »](https://core.telegram.org/api/poll#country-restricted-polls). |
| 406 | POLL_MEMBER_RESTRICTED | Only channel subscribers can vote in this poll. |
| 400 | REVOTE_NOT_ALLOWED | You cannot change your vote. |

## Related pages

#### [poll](/constructor/poll/)

Poll

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Change the default peer that should be used when sending messages, reactions, poll votes to a specific group

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
