---
title: "groupCallParticipantVideo (конструктор)"
original: "https://core.telegram.org/constructor/groupCallParticipantVideo"
section: ref
kind: constructor
layout: layout.njk
---

# groupCallParticipantVideo

*Конструктор из схемы TL.*

> Info about a video stream

## Определение TL

```
groupCallParticipantVideo#67753ac8 flags:# paused:flags.0?true endpoint:string source_groups:Vector<GroupCallParticipantVideoSourceGroup> audio_source:flags.1?int = GroupCallParticipantVideo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| paused | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the stream is currently paused |
| endpoint | [string](/type/string/) | Endpoint |
| source_groups | [Vector](https://core.telegram.org/type/Vector%20t)<[GroupCallParticipantVideoSourceGroup](/type/GroupCallParticipantVideoSourceGroup/)> | Source groups |
| audio_source | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Audio source ID |

## Тип

[GroupCallParticipantVideo](/type/GroupCallParticipantVideo/)
