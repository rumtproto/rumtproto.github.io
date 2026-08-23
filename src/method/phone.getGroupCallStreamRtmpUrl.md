---
title: "phone.getGroupCallStreamRtmpUrl (метод)"
original: "https://core.telegram.org/method/phone.getGroupCallStreamRtmpUrl"
section: ref
kind: method
layout: layout.njk
---

# phone.getGroupCallStreamRtmpUrl

*Метод из схемы TL.*

> Get the RTMP URL and stream key used by the single external streamer that publishes all audio and video for an RTMP-mode video chat, livestream or live story.
> See [here »](https://core.telegram.org/api/group-calls#creating-and-publishing-an-rtmp-livestream) for the full flow.

## Определение TL

```
phone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;
---functions---
phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| live_story | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Obtain credentials for an RTMP live story instead of a video chat/livestream |
| peer | [InputPeer](/type/InputPeer/) | Peer that will host the RTMP video chat, livestream or live story |
| revoke | [Bool](/type/Bool/) | Whether to invalidate the previous stream key and generate a new one, instead of returning the existing key |

## Результат

[phone.GroupCallStreamRtmpUrl](/type/phone.GroupCallStreamRtmpUrl/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
