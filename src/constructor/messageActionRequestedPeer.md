---
title: "messageActionRequestedPeer (конструктор)"
original: "https://core.telegram.org/constructor/messageActionRequestedPeer"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionRequestedPeer

*Конструктор из схемы TL.*

> Contains info about one or more peers that the we (the user) shared with the bot after clicking on a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button (service message sent by the user).

## Определение TL

```
messageActionRequestedPeer#31518e9b button_id:int peers:Vector<Peer> = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| button_id | [int](/type/int/) | button_id contained in the [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) |
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | The shared peers |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

See [peer requests](https://core.telegram.org/api/bots/buttons#peer-requests) for the full flow.
