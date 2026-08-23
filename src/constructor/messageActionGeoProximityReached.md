---
title: "messageActionGeoProximityReached (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGeoProximityReached"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGeoProximityReached

*Конструктор из схемы TL.*

> A user of the chat is now in proximity of another user

## Определение TL

```
messageActionGeoProximityReached#98e0d697 from_id:Peer to_id:Peer distance:int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| from_id | [Peer](/type/Peer/) | The user or chat that is now in proximity of to_id |
| to_id | [Peer](/type/Peer/) | The user or chat that subscribed to [live geolocation proximity alerts](https://core.telegram.org/api/live-location#proximity-alert) |
| distance | [int](/type/int/) | Distance, in meters (0-100000) |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Live geolocation](https://core.telegram.org/api/live-location)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.
