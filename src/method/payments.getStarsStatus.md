---
title: "payments.getStarsStatus (метод)"
original: "https://core.telegram.org/method/payments.getStarsStatus"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsStatus

*Метод из схемы TL.*

> Get the current [Telegram Stars balance](https://core.telegram.org/api/stars) of the current account (with peer=[inputPeerSelf](/constructor/inputPeerSelf/)), or the stars balance of the bot or channel specified in `peer`.

## Определение TL

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
---functions---
payments.getStarsStatus#4ea9b3bf flags:# ton:flags.0?true peer:InputPeer = payments.StarsStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| ton | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, returns the channel/ad revenue balance in nanograms. |
| peer | [InputPeer](/type/InputPeer/) | Peer of which to get the balance. |

## Результат

[payments.StarsStatus](/type/payments.StarsStatus/)

## Only users can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | BOT_ACCESS_FORBIDDEN | The specified method can be used over a [business connection](https://core.telegram.org/api/bots/connected-business-bots) for some operations, but the specified query attempted an operation that is not allowed over a business connection. |
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
