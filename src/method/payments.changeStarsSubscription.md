---
title: "payments.changeStarsSubscription (метод)"
original: "https://core.telegram.org/method/payments.changeStarsSubscription"
section: ref
kind: method
layout: layout.njk
---

# payments.changeStarsSubscription

*Метод из схемы TL.*

> Activate or deactivate a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.changeStarsSubscription#c7770878 flags:# peer:InputPeer subscription_id:string canceled:flags.0?Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Always pass [inputPeerSelf](/constructor/inputPeerSelf/). |
| subscription_id | [string](/type/string/) | ID of the subscription. |
| canceled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](/type/Bool/) | Whether to cancel or reactivate the subscription. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
