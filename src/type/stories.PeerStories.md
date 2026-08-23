---
title: "stories.PeerStories (тип)"
original: "https://core.telegram.org/type/stories.PeerStories"
section: ref
kind: type
layout: layout.njk
---

# stories.PeerStories

*Тип из схемы TL.*

> [Active story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer.

## Определение TL

```
stories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;

---functions---

stories.getPeerStories#2c4ada50 peer:InputPeer = stories.PeerStories;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.peerStories](/constructor/stories.peerStories/) | [Active story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer. |

## Методы

| Method | Описание |
|---|---|
| [stories.getPeerStories](/method/stories.getPeerStories/) | Fetch the full active [story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
