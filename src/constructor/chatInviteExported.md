---
title: "chatInviteExported (конструктор)"
original: "https://core.telegram.org/constructor/chatInviteExported"
section: ref
kind: constructor
layout: layout.njk
---

# chatInviteExported

*Конструктор из схемы TL.*

> Exported chat invite

## Определение TL

```
chatInviteExported#a22cbd96 flags:# revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:string admin_id:long date:int start_date:flags.4?int expire_date:flags.1?int usage_limit:flags.2?int usage:flags.3?int requested:flags.7?int subscription_expired:flags.10?int title:flags.8?string subscription_pricing:flags.9?StarsSubscriptionPricing = ExportedChatInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| revoked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this chat invite was revoked |
| permanent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this chat invite has no expiration |
| request_needed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether users importing this invite link will have to be approved to join the channel or group |
| link | [string](/type/string/) | Chat invitation link |
| admin_id | [long](/type/long/) | ID of the admin that created this chat invite |
| date | [int](/type/int/) | When was this chat invite created |
| start_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | When was this chat invite last modified |
| expire_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | When does this chat invite expire |
| usage_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Maximum number of users that can join using this link |
| usage | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | How many users joined using this link |
| requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[int](/type/int/) | Number of users that have already used this link to join |
| subscription_expired | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | For [Telegram Star subscriptions »](https://core.telegram.org/api/stars#star-subscriptions), contains the number of chat members which have already joined the chat using the link, but have already left due to expiration of their subscription. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[string](/type/string/) | Custom description for the invite link, visible only to admins |
| subscription_pricing | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[StarsSubscriptionPricing](/type/StarsSubscriptionPricing/) | For [Telegram Star subscriptions »](https://core.telegram.org/api/stars#star-subscriptions), contains the pricing of the subscription the user must activate to join the private channel. |

## Тип

[ExportedChatInvite](/type/ExportedChatInvite/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
