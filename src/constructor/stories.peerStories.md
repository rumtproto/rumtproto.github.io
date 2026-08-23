---
title: "stories.peerStories (конструктор)"
original: "https://core.telegram.org/constructor/stories.peerStories"
section: ref
kind: constructor
layout: layout.njk
---

# stories.peerStories

*Конструктор из схемы TL.*

> [Active story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer.

## Определение TL

```
stories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stories | [PeerStories](/type/PeerStories/) | Stories |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[stories.PeerStories](/type/stories.PeerStories/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
