---
title: "updateGroupCallConnection (конструктор)"
original: "https://core.telegram.org/constructor/updateGroupCallConnection"
section: ref
kind: constructor
layout: layout.njk
---

# updateGroupCallConnection

*Конструктор из схемы TL.*

> Connection parameters returned after joining a group call, see [presentations »](https://core.telegram.org/api/group-calls#presentations) and [stream mode »](https://core.telegram.org/api/group-calls#stream-mode).
> If `presentation` is set, the parameters belong to the separate [presentation connection](https://core.telegram.org/api/group-calls#presentations); otherwise they belong to the main connection.
> For a normal WebRTC connection, pass `params` to the local tgcalls group-call engine as its join response payload.
> For [stream-mode calls](https://core.telegram.org/api/group-calls#detecting-stream-mode), where the client plays the call by [downloading media chunks »](https://core.telegram.org/api/group-calls#downloading-media-chunks) instead of using WebRTC, `params` instead has one of the following shapes:
> ```
> {
>   "stream": true
> }
> ```
> for a call that entered [stream mode](https://core.telegram.org/api/group-calls#stream-mode), or
> ```
> {
>   "stream": true,
>   "rtmp": true
> }
> ```
> for an [RTMP-mode call](https://core.telegram.org/api/group-calls#creating-and-publishing-an-rtmp-livestream).

## Определение TL

```
updateGroupCallConnection#b783982 flags:# presentation:flags.0?true params:DataJSON = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| presentation | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether these parameters belong to the separate presentation connection instead of the main connection |
| params | [DataJSON](/type/DataJSON/) | RTC join response parameters or broadcast-stream metadata, as described above |

## Тип

[Update](/type/Update/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
