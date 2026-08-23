---
title: "channels.getSendAs (метод)"
original: "https://core.telegram.org/method/channels.getSendAs"
section: ref
kind: method
layout: layout.njk
---

# channels.getSendAs

*Метод из схемы TL.*

> Obtains a list of peers that can be displayed as the sender in a specific context. With `for_live_stories`, returns peers that may author [live story in-call messages »](https://core.telegram.org/api/group-calls#in-call-messages).

## Определение TL

```
channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;
---functions---
channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| for_paid_reactions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, fetches the list of peers that can be used to send [paid reactions](https://core.telegram.org/api/reactions#paid-reactions) to messages of a specific peer. |
| for_live_stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Fetch the peers that may be passed to [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/).send_as to comment or react in a [live story »](https://core.telegram.org/api/group-calls#in-call-messages). |
| peer | [InputPeer](/type/InputPeer/) | The target peer; when for_live_stories is set, the peer that owns the live story. |

## Результат

[channels.SendAsPeers](/type/channels.SendAsPeers/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/)

Send an in-call message to all participants of a video chat/livestream or live story, including in RTMP mode, see [here »](https://core.telegram.org/api/group-calls#in-call-messages) for more info.

The `send_as` field can only be populated for live stories, where it optionally selects the displayed author. If omitted, the server automatically selects the appropriate author. Do not populate it for video chats/livestreams.

Video chats/livestreams and live stories support [animated emoji reactions »](https://core.telegram.org/api/group-calls#in-call-reactions), encoded as messages containing only a standard available reaction emoji or a single custom emoji entity.

For a paid live story comment, pass the user-confirmed donation amount in `allow_paid_stars`. For commenters other than the live story owner, this amount must be at least the current [groupCall](/constructor/groupCall/).`send_paid_messages_stars` minimum. A higher amount may be donated to highlight the comment. The live story owner may comment without populating `allow_paid_stars`. To send a standalone paid live story donation, pass a positive `allow_paid_stars` value and an empty `message`, see [here »](https://core.telegram.org/api/group-calls#paid-live-story-donations) for the full flow.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
