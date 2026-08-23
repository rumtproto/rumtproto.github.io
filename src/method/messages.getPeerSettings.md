---
title: "messages.getPeerSettings (метод)"
original: "https://core.telegram.org/method/messages.getPeerSettings"
section: ref
kind: method
layout: layout.njk
---

# messages.getPeerSettings

*Метод из схемы TL.*

> Get peer settings

## Определение TL

```
messages.peerSettings#6880b94d settings:PeerSettings chats:Vector<Chat> users:Vector<User> = messages.PeerSettings;
---functions---
messages.getPeerSettings#efd9a6a2 peer:InputPeer = messages.PeerSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer |

## Результат

[messages.PeerSettings](/type/messages.PeerSettings/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_MONOFORUM_UNSUPPORTED | [Monoforums](https://core.telegram.org/api/channel#monoforums) do not support this feature. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
