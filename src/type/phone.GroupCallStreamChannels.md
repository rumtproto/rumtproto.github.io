---
title: "phone.GroupCallStreamChannels (тип)"
original: "https://core.telegram.org/type/phone.GroupCallStreamChannels"
section: ref
kind: type
layout: layout.njk
---

# phone.GroupCallStreamChannels

*Тип из схемы TL.*

> Info about RTMP streams in a group call or livestream

## Определение TL

```
phone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;

---functions---

phone.getGroupCallStreamChannels#1ab21940 call:InputGroupCall = phone.GroupCallStreamChannels;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.groupCallStreamChannels](/constructor/phone.groupCallStreamChannels/) | Contains the available channels of an RTMP-mode group call, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#rtmp-mode). |

## Методы

| Method | Описание |
|---|---|
| [phone.getGroupCallStreamChannels](/method/phone.getGroupCallStreamChannels/) | Get the available stream channels and current playback timestamp of an RTMP-mode video chat, livestream or live story, see [here »](https://core.telegram.org/api/group-calls#rtmp-mode) for the full flow. The group call must be joined before invoking this method. Send the request to the media DC specified by [groupCall](/constructor/groupCall/).stream_dc_id. |
