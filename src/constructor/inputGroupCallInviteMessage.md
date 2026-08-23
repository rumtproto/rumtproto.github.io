---
title: "inputGroupCallInviteMessage (конструктор)"
original: "https://core.telegram.org/constructor/inputGroupCallInviteMessage"
section: ref
kind: constructor
layout: layout.njk
---

# inputGroupCallInviteMessage

*Конструктор из схемы TL.*

> Identifies a [conference call »](https://core.telegram.org/api/group-calls#conference-calls) using its [messageActionConferenceCall](/constructor/messageActionConferenceCall/) invitation service message.

## Определение TL

```
inputGroupCallInviteMessage#8c10603f msg_id:int = InputGroupCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| msg_id | [int](/type/int/) | ID of the [messageActionConferenceCall](/constructor/messageActionConferenceCall/). |

## Тип

[InputGroupCall](/type/InputGroupCall/)

## Related pages

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Represents a [conference call »](https://core.telegram.org/api/group-calls#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.

If [call\_requests\_disabled](https://core.telegram.org/api/config#call-requests-disabled) is not set or false, an incoming [messageActionConferenceCall](/constructor/messageActionConferenceCall/) with the `missed` and `active` flags **not** set should trigger ringing and an incoming call screen, just like for one-on-one calls.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
