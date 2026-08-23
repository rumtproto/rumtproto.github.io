---
title: "keyboardButtonRequestPeer (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonRequestPeer"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonRequestPeer

*Конструктор из схемы TL.*

> Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)
> Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).
> See [peer requests](https://core.telegram.org/api/bots/buttons#peer-requests) for the full flow.

## Определение TL

```
keyboardButtonRequestPeer#5b0f15f5 flags:# style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button text |
| button_id | [int](/type/int/) | Button ID, to be passed to [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/). |
| peer_type | [RequestPeerType](/type/RequestPeerType/) | Filtering criteria to use for the peer selection list shown to the user. The list should display all existing peers of the specified type, and should also offer an option for the user to create and immediately use one or more (up to max_quantity) peers of the specified type, if needed. |
| max_quantity | [int](/type/int/) | Maximum number of peers that can be chosen. |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

#### [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/)

Represents a reply keyboard
