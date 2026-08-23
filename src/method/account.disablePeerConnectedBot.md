---
title: "account.disablePeerConnectedBot (метод)"
original: "https://core.telegram.org/method/account.disablePeerConnectedBot"
section: ref
kind: method
layout: layout.njk
---

# account.disablePeerConnectedBot

*Метод из схемы TL.*

> Permanently disconnect a specific chat from all [business bots »](https://core.telegram.org/api/bots/connected-business-bots) (equivalent to specifying it in `recipients.exclude_users` during initial configuration with [account.updateConnectedBot »](/method/account.updateConnectedBot/)); to reconnect of a chat disconnected using this method the user must reconnect the entire bot by invoking [account.updateConnectedBot »](/method/account.updateConnectedBot/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.disablePeerConnectedBot#5e437ed9 peer:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat to disconnect |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_ALREADY_DISABLED | The connected business bot was already disabled for the specified peer. |
| 400 | BOT_NOT_CONNECTED_YET | No [business bot](https://core.telegram.org/api/business#connected-bots) is connected to the currently logged in user. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [account.updateConnectedBot](/method/account.updateConnectedBot/)

Connect a [business bot »](https://core.telegram.org/api/bots/connected-business-bots) to the current account, or to change the current connection settings.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
