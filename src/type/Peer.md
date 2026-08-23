---
title: "Peer (тип)"
original: "https://core.telegram.org/type/Peer"
section: ref
kind: type
layout: layout.njk
---

# Peer

*Тип из схемы TL.*

> Identifier of a private chat, basic group, group or channel (see [here »](https://core.telegram.org/api/peers) for more info).

## Определение TL

```
peerUser#59511722 user_id:long = Peer;
peerChat#36c6019a chat_id:long = Peer;
peerChannel#a2a5371e channel_id:long = Peer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [peerUser](/constructor/peerUser/) | Chat partner |
| [peerChat](/constructor/peerChat/) | Group. |
| [peerChannel](/constructor/peerChannel/) | Channel/supergroup |

## Related pages

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
