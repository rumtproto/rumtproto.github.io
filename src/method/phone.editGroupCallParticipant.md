---
title: "phone.editGroupCallParticipant (метод)"
original: "https://core.telegram.org/method/phone.editGroupCallParticipant"
section: ref
kind: method
layout: layout.njk
---

# phone.editGroupCallParticipant

*Метод из схемы TL.*

> Edit information about a participant of a non-RTMP video chat/livestream or conference. The `raise_hand` field is only supported in video chats/livestreams, see [here »](https://core.telegram.org/api/group-calls#managing-an-active-group-call) for more info.
> Note: [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).N?[Bool](/type/Bool/) parameters can have three possible values:
> -   If the [TL flag](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) is not set, the previous value will not be changed.
> -   If the [TL flag](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) is set and contains a [boolTrue](/constructor/boolTrue/), the previous value will be overwritten to `true`.
> -   If the [TL flag](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) is set and contains a [boolFalse](/constructor/boolFalse/), the previous value will be overwritten to `false`.

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
phone.editGroupCallParticipant#a5273abf flags:# call:InputGroupCall participant:InputPeer muted:flags.0?Bool volume:flags.1?int raise_hand:flags.2?Bool video_stopped:flags.3?Bool video_paused:flags.4?Bool presentation_paused:flags.5?Bool = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| call | [InputGroupCall](/type/InputGroupCall/) | Non-RTMP video chat/livestream or conference |
| participant | [InputPeer](/type/InputPeer/) | The group call participant (can also be the user itself) |
| muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](/type/Bool/) | Change the participant's mute state; allowing a forcibly muted participant to self-unmute does not immediately unmute them |
| volume | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | New volume, between 1 and 20000; 10000 represents 100%. Without moderation rights, changing another participant's volume affects only local playback |
| raise_hand | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Bool](/type/Bool/) | Raise or lower hand; only supported in video chats/livestreams |
| video_stopped | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Bool](/type/Bool/) | Start or stop the current user's video stream |
| video_paused | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Bool](/type/Bool/) | Pause or resume the current user's video stream |
| presentation_paused | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[Bool](/type/Bool/) | Pause or resume the current user's presentation stream |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | GROUPCALL_FORBIDDEN | The specified group call cannot be used in this context. |
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |
| 400 | PARTICIPANT_JOIN_MISSING | Trying to enable a presentation, when the user hasn't joined the Video Chat with [phone.joinGroupCall](/method/phone.joinGroupCall/). |
| 400 | RAISE_HAND_FORBIDDEN | You cannot raise your hand. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
| 400 | USER_VOLUME_INVALID | The specified user volume is invalid. |
| 400 | VIDEO_PAUSE_FORBIDDEN | You cannot pause the video stream. |
| 400 | VIDEO_STOP_FORBIDDEN | You cannot stop the video stream. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Bool](/type/Bool/)

Boolean type.

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [boolFalse](/constructor/boolFalse/)

Constructor may be interpreted as a **boolean**`false` value.

#### [phone.joinGroupCall](/method/phone.joinGroupCall/)

Join any [group call type »](https://core.telegram.org/api/group-calls#group-call-types). Conference calls additionally require the [E2E joining flow »](https://core.telegram.org/api/end-to-end/group-calls#joining-a-call).

The `params` field must contain a join payload generated by the local tgcalls group-call engine. It contains a random non-zero audio `ssrc`, ICE `ufrag` and `pwd`, DTLS `fingerprints`, and, when publishing video, `ssrc-groups`.

For example, a join payload without published video has the following shape:

```
{
  "ssrc": 123456789,
  "ufrag": "...",
  "pwd": "...",
  "fingerprints": [{
    "hash": "sha-256",
    "fingerprint": "...",
    "setup": "passive"
  }]
}
```

When joining an RTMP-mode call, generate the payload without published video source groups.
