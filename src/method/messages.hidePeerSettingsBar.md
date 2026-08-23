---
title: "messages.hidePeerSettingsBar (метод)"
original: "https://core.telegram.org/method/messages.hidePeerSettingsBar"
section: ref
kind: method
layout: layout.njk
---

# messages.hidePeerSettingsBar

*Метод из схемы TL.*

> Should be called after the user hides the [report spam/add as contact bar](https://core.telegram.org/api/action-bar) of a new chat, effectively prevents the user from executing the actions specified in the [action bar »](https://core.telegram.org/api/action-bar).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.hidePeerSettingsBar#4facb138 peer:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Action bar](https://core.telegram.org/api/action-bar)

Sometimes, when interacting with Telegram users via private or secret chats, an action bar must be shown on top of the chat, offering convenient action buttons or notices regarding the user.
