---
title: "inputPeerPhotoFileLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputPeerPhotoFileLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputPeerPhotoFileLocation

*Конструктор из схемы TL.*

> Location of profile photo of channel/group/supergroup/user

## Определение TL

```
inputPeerPhotoFileLocation#37257e99 flags:# big:flags.0?true peer:InputPeer photo_id:long = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| big | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to download the high-quality version of the picture |
| peer | [InputPeer](/type/InputPeer/) | The peer whose profile picture should be downloaded |
| photo_id | [long](/type/long/) | Photo ID |

## Тип

[InputFileLocation](/type/InputFileLocation/)
