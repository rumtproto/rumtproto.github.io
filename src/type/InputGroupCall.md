---
title: "InputGroupCall (тип)"
original: "https://core.telegram.org/type/InputGroupCall"
section: ref
kind: type
layout: layout.njk
---

# InputGroupCall

*Тип из схемы TL.*

> Indicates a group call

## Определение TL

```
inputGroupCall#d8aa840f id:long access_hash:long = InputGroupCall;
inputGroupCallSlug#fe06823f slug:string = InputGroupCall;
inputGroupCallInviteMessage#8c10603f msg_id:int = InputGroupCall;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputGroupCall](/constructor/inputGroupCall/) | Points to a specific [group call](https://core.telegram.org/api/group-calls). |
| [inputGroupCallSlug](/constructor/inputGroupCallSlug/) | Identify a [conference call »](https://core.telegram.org/api/group-calls#conference-calls) using the slug from its invitation link. This constructor can only be used for conference calls. It cannot be used for video chats/livestreams, live stories or any other group call type. |
| [inputGroupCallInviteMessage](/constructor/inputGroupCallInviteMessage/) | Identifies a [conference call »](https://core.telegram.org/api/group-calls#conference-calls) using its [messageActionConferenceCall](/constructor/messageActionConferenceCall/) invitation service message. |
