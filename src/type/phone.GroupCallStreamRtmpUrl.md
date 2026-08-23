---
title: "phone.GroupCallStreamRtmpUrl (тип)"
original: "https://core.telegram.org/type/phone.GroupCallStreamRtmpUrl"
section: ref
kind: type
layout: layout.njk
---

# phone.GroupCallStreamRtmpUrl

*Тип из схемы TL.*

> RTMP URL and stream key to be used in streaming software

## Определение TL

```
phone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;

---functions---

phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.groupCallStreamRtmpUrl](/constructor/phone.groupCallStreamRtmpUrl/) | Contains the RTMP publishing URL and secret stream key, see [creating and publishing an RTMP livestream »](https://core.telegram.org/api/group-calls#creating-and-publishing-an-rtmp-livestream). |

## Методы

| Method | Описание |
|---|---|
| [phone.getGroupCallStreamRtmpUrl](/method/phone.getGroupCallStreamRtmpUrl/) | Get the RTMP URL and stream key used by the single external streamer that publishes all audio and video for an RTMP-mode video chat, livestream or live story. See [here »](https://core.telegram.org/api/group-calls#creating-and-publishing-an-rtmp-livestream) for the full flow. |
