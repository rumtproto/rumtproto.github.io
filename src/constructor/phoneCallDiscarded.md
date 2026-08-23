---
title: "phoneCallDiscarded (конструктор)"
original: "https://core.telegram.org/constructor/phoneCallDiscarded"
section: ref
kind: constructor
layout: layout.njk
---

# phoneCallDiscarded

*Конструктор из схемы TL.*

> Indicates a discarded phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow.

## Определение TL

```
phoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| need_rating | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the server required the user to [rate](/method/phone.setCallRating/) the call |
| need_debug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the server required the client to [send](/method/phone.saveCallDebug/) the libtgvoip call debug data |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether the call was a video call |
| id | [long](/type/long/) | Call ID |
| reason | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PhoneCallDiscardReason](/type/PhoneCallDiscardReason/) | Why was the phone call discarded |
| duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Duration of the phone call in seconds |

## Тип

[PhoneCall](/type/PhoneCall/)

## Related pages

#### [phone.setCallRating](/method/phone.setCallRating/)

Rate a call, returns info about the rating message sent to the official VoIP bot, see [here »](https://core.telegram.org/api/calls#call-rating) for more info on the full flow.

#### [phone.saveCallDebug](/method/phone.saveCallDebug/)

Send [phone call](https://core.telegram.org/api/calls#call-debug) debug data to server.

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
