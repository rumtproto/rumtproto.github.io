---
title: "requestedPeerUser (конструктор)"
original: "https://core.telegram.org/constructor/requestedPeerUser"
section: ref
kind: constructor
layout: layout.njk
---

# requestedPeerUser

*Конструктор из схемы TL.*

> Info about a user, shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).
> All fields except the ID are optional, and will be populated if present on the chosen user, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/).

## Определение TL

```
requestedPeerUser#d62ff46a flags:# user_id:long first_name:flags.0?string last_name:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [long](/type/long/) | User ID. |
| first_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | First name. |
| last_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Last name. |
| username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Username. |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Photo](/type/Photo/) | Profile photo. |

## Тип

[RequestedPeer](/type/RequestedPeer/)

## Related pages

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

#### [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Use this constructor to send a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button in a [reply keyboard](https://core.telegram.org/bots/features#keyboards) in a private chat.

See [peer requests](https://core.telegram.org/api/bots/buttons#peer-requests) for the full flow.
