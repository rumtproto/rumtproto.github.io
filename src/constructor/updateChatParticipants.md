---
title: "updateChatParticipants (конструктор)"
original: "https://core.telegram.org/constructor/updateChatParticipants"
section: ref
kind: constructor
layout: layout.njk
---

# updateChatParticipants

*Конструктор из схемы TL.*

> The participants of a [basic group »](https://core.telegram.org/api/channel#basic-groups) changed.

## Определение TL

```
updateChatParticipants#7761198 participants:ChatParticipants = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| participants | [ChatParticipants](/type/ChatParticipants/) | Updated chat participants (also contains the version used to deduplicate/update outdated chat information as specified [here »](https://core.telegram.org/api/peers#basic-group-updates)). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
