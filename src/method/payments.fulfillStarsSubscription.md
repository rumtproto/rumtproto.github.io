---
title: "payments.fulfillStarsSubscription (метод)"
original: "https://core.telegram.org/method/payments.fulfillStarsSubscription"
section: ref
kind: method
layout: layout.njk
---

# payments.fulfillStarsSubscription

*Метод из схемы TL.*

> Re-join a private channel associated to an active [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.fulfillStarsSubscription#cc5bebb3 peer:InputPeer subscription_id:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Always pass [inputPeerSelf](/constructor/inputPeerSelf/). |
| subscription_id | [string](/type/string/) | ID of the subscription. |

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
