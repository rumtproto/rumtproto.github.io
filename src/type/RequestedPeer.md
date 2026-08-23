---
title: "RequestedPeer (тип)"
original: "https://core.telegram.org/type/RequestedPeer"
section: ref
kind: type
layout: layout.njk
---

# RequestedPeer

*Тип из схемы TL.*

> Info about a peer, shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

## Определение TL

```
requestedPeerUser#d62ff46a flags:# user_id:long first_name:flags.0?string last_name:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
requestedPeerChat#7307544f flags:# chat_id:long title:flags.0?string photo:flags.2?Photo = RequestedPeer;
requestedPeerChannel#8ba403e4 flags:# channel_id:long title:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [requestedPeerUser](/constructor/requestedPeerUser/) | Info about a user, shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). All fields except the ID are optional, and will be populated if present on the chosen user, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/). |
| [requestedPeerChat](/constructor/requestedPeerChat/) | Info about a [chat](https://core.telegram.org/api/channel), shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). All fields except the ID are optional, and will be populated if present on the chosen chat, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/). |
| [requestedPeerChannel](/constructor/requestedPeerChannel/) | Info about a [channel/supergroup](https://core.telegram.org/api/channel), shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). All fields except the ID are optional, and will be populated if present on the chosen channel/supergroup, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/). |

## Related pages

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.
