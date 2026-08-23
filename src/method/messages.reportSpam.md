---
title: "messages.reportSpam (метод)"
original: "https://core.telegram.org/method/messages.reportSpam"
section: ref
kind: method
layout: layout.njk
---

# messages.reportSpam

*Метод из схемы TL.*

> Report a new incoming chat for spam, if the [peer settings](/constructor/peerSettings/) of the chat allow us to do that

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportSpam#cf1592db peer:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer to report |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [peerSettings](/constructor/peerSettings/)

List of actions that are possible when interacting with this user, to be shown as suggested actions in the [chat action bar »](https://core.telegram.org/api/action-bar), see [here »](https://core.telegram.org/api/action-bar) for more info.
