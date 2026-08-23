---
title: "phoneCallWaiting (конструктор)"
original: "https://core.telegram.org/constructor/phoneCallWaiting"
section: ref
kind: constructor
layout: layout.njk
---

# phoneCallWaiting

*Конструктор из схемы TL.*

> Incoming phone call, see [here »](https://core.telegram.org/api/calls) for more info on the full flow.

## Определение TL

```
phoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Is this a video call |
| id | [long](/type/long/) | Call ID |
| access_hash | [long](/type/long/) | Access hash |
| date | [int](/type/int/) | Date |
| admin_id | [long](/type/long/) | Admin ID |
| participant_id | [long](/type/long/) | Participant ID |
| protocol | [PhoneCallProtocol](/type/PhoneCallProtocol/) | Phone call protocol info |
| receive_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | When was the phone call received |

## Тип

[PhoneCall](/type/PhoneCall/)

## Related pages

#### [Phone calls](https://core.telegram.org/api/calls)

Telegram supports end-to-end-encrypted one-to-one voice and video calls.
