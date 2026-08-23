---
title: "account.toggleConnectedBotPaused (метод)"
original: "https://core.telegram.org/method/account.toggleConnectedBotPaused"
section: ref
kind: method
layout: layout.njk
---

# account.toggleConnectedBotPaused

*Метод из схемы TL.*

> Pause or unpause a specific chat, temporarily disconnecting it from all [business bots »](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleConnectedBotPaused#646e1097 peer:InputPeer paused:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat to pause |
| paused | [Bool](/type/Bool/) | Whether to pause or unpause the chat |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
