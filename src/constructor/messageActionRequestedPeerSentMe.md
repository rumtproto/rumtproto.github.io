---
title: "messageActionRequestedPeerSentMe (конструктор)"
original: "https://core.telegram.org/constructor/messageActionRequestedPeerSentMe"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionRequestedPeerSentMe

*Конструктор из схемы TL.*

> Contains info about one or more peers that the a user shared with the me (the bot) after clicking on a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button (service message received by the bot).

## Определение TL

```
messageActionRequestedPeerSentMe#93b31848 button_id:int peers:Vector<RequestedPeer> = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| button_id | [int](/type/int/) | button_id contained in the [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) |
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[RequestedPeer](/type/RequestedPeer/)> | Info about the shared peers. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

See [peer requests](https://core.telegram.org/api/bots/buttons#peer-requests) for the full flow.
