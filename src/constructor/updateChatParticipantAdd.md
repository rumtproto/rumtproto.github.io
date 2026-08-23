---
title: "updateChatParticipantAdd (конструктор)"
original: "https://core.telegram.org/constructor/updateChatParticipantAdd"
section: ref
kind: constructor
layout: layout.njk
---

# updateChatParticipantAdd

*Конструктор из схемы TL.*

> New group member.

## Определение TL

```
updateChatParticipantAdd#3dda5451 chat_id:long user_id:long inviter_id:long date:int version:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | Group ID |
| user_id | [long](/type/long/) | ID of the new member |
| inviter_id | [long](/type/long/) | ID of the user, who added member to the group |
| date | [int](/type/int/) | When was the participant added |
| version | [int](/type/int/) | Used similarly to pts values to deduplicate/update outdated chat information as specified [here »](https://core.telegram.org/api/peers#basic-group-updates). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
