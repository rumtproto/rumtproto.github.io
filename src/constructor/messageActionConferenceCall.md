---
title: "messageActionConferenceCall (конструктор)"
original: "https://core.telegram.org/constructor/messageActionConferenceCall"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionConferenceCall

*Конструктор из схемы TL.*

> Represents a [conference call »](https://core.telegram.org/api/group-calls#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.
> If [call\_requests\_disabled](https://core.telegram.org/api/config#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls.

## Определение TL

```
messageActionConferenceCall#2ffe2f7a flags:# missed:flags.0?true active:flags.1?true video:flags.4?true call_id:long duration:flags.2?int other_participants:flags.3?Vector<Peer> = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| missed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the conference call has ended and the user hasn't joined. |
| active | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the user is currently in the conference call. |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether this is a video conference call. |
| call_id | [long](/type/long/) | Call ID. |
| duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Call duration, for left calls only. |
| other_participants | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | Identifiers of some other call participants. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Represents a [conference call »](https://core.telegram.org/api/group-calls#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.

If [call\_requests\_disabled](https://core.telegram.org/api/config#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls.
