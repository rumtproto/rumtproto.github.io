---
title: "account.toggleNoPaidMessagesException (метод)"
original: "https://core.telegram.org/method/account.toggleNoPaidMessagesException"
section: ref
kind: method
layout: layout.njk
---

# account.toggleNoPaidMessagesException

*Метод из схемы TL.*

> Allow a user to send us messages without paying if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleNoPaidMessagesException#fe2eda76 flags:# refund_charged:flags.0?true require_payment:flags.2?true parent_peer:flags.1?InputPeer user_id:InputUser = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| refund_charged | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set and require_payment is not set, refunds the amounts the user has already paid us to send us messages (directly or via a monoforum). |
| require_payment | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, requires the user to pay in order to send us messages. Can only be set by monoforums, not users, i.e. parent_peer must be set if this flag is set; users must instead use the [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) privacy setting to remove a previously added exemption. If not set, allows the user to send us messages without paying (can be unset by both monoforums and users). |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | If set, applies the setting within the [monoforum aka direct messages »](https://core.telegram.org/api/monoforum) (pass the ID of the monoforum, not the ID of the associated channel). |
| user_id | [InputUser](/type/InputUser/) | The user to exempt or unexempt. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PARENT_PEER_INVALID | The specified parent_peer is invalid. |
| 400 | UNSUPPORTED | require_payment cannot be set by users, only by monoforums: users must instead use the [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) privacy setting to remove a previously added exemption. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/)

Who can send you messages without paying, if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
