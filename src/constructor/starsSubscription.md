---
title: "starsSubscription (конструктор)"
original: "https://core.telegram.org/constructor/starsSubscription"
section: ref
kind: constructor
layout: layout.njk
---

# starsSubscription

*Конструктор из схемы TL.*

> Represents a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links).

## Определение TL

```
starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| canceled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this subscription was cancelled. |
| can_refulfill | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether we left the associated private channel, but we can still rejoin it using [payments.fulfillStarsSubscription](/method/payments.fulfillStarsSubscription/) because the current subscription period hasn't expired yet. |
| missing_balance | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this subscription has expired because there are not enough stars on the user's balance to extend it. |
| bot_canceled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Set if this [bot subscription](https://core.telegram.org/api/subscriptions#bot-subscriptions) was cancelled by the bot |
| id | [string](/type/string/) | Subscription ID. |
| peer | [Peer](/type/Peer/) | Identifier of the associated private chat. |
| until_date | [int](/type/int/) | Expiration date of the current subscription period. |
| pricing | [StarsSubscriptionPricing](/type/StarsSubscriptionPricing/) | Pricing of the subscription in Telegram Stars. |
| chat_invite_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Invitation link, used to renew the subscription after cancellation or expiration. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | For bot subscriptions, the title of the subscription invoice |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[WebDocument](/type/WebDocument/) | For bot subscriptions, the photo from the subscription invoice |
| invoice_slug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[string](/type/string/) | For bot subscriptions, the [identifier](https://core.telegram.org/api/links#invoice-links) of the subscription invoice |

## Тип

[StarsSubscription](/type/StarsSubscription/)

## Related pages

#### [payments.fulfillStarsSubscription](/method/payments.fulfillStarsSubscription/)

Re-join a private channel associated to an active [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links).

#### [Star subscriptions](https://core.telegram.org/api/subscriptions)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
