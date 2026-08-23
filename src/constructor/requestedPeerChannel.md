---
title: "requestedPeerChannel (конструктор)"
original: "https://core.telegram.org/constructor/requestedPeerChannel"
section: ref
kind: constructor
layout: layout.njk
---

# requestedPeerChannel

*Конструктор из схемы TL.*

> Info about a [channel/supergroup](https://core.telegram.org/api/channel), shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).
> All fields except the ID are optional, and will be populated if present on the chosen channel/supergroup, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/).

## Определение TL

```
requestedPeerChannel#8ba403e4 flags:# channel_id:long title:flags.0?string username:flags.1?string photo:flags.2?Photo = RequestedPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel_id | [long](/type/long/) | Channel/supergroup ID. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Channel/supergroup title. |
| username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Channel/supergroup username. |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Photo](/type/Photo/) | Channel/supergroup photo. |

## Тип

[RequestedPeer](/type/RequestedPeer/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

#### [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Use this constructor to send a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button in a [reply keyboard](https://core.telegram.org/bots/features#keyboards) in a private chat.

See [peer requests](https://core.telegram.org/api/bots/buttons#peer-requests) for the full flow.
