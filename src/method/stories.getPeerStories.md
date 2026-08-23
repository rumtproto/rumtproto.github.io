---
title: "stories.getPeerStories (метод)"
original: "https://core.telegram.org/method/stories.getPeerStories"
section: ref
kind: method
layout: layout.njk
---

# stories.getPeerStories

*Метод из схемы TL.*

> Fetch the full active [story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer.

## Определение TL

```
stories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;
---functions---
stories.getPeerStories#2c4ada50 peer:InputPeer = stories.PeerStories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer whose stories should be fetched |

## Результат

[stories.PeerStories](/type/stories.PeerStories/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
