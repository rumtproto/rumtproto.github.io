---
title: "chatInvite (конструктор)"
original: "https://core.telegram.org/constructor/chatInvite"
section: ref
kind: constructor
layout: layout.njk
---

# chatInvite

*Конструктор из схемы TL.*

> Chat invite info

## Определение TL

```
chatInvite#5c9d3702 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true can_refulfill_subscription:flags.11?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int subscription_pricing:flags.10?StarsSubscriptionPricing subscription_form_id:flags.12?long bot_verification:flags.13?BotVerification = ChatInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a [channel/supergroup](https://core.telegram.org/api/channel) or a [normal group](https://core.telegram.org/api/channel) |
| broadcast | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is a [channel](https://core.telegram.org/api/channel) |
| public | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this is a public [channel/supergroup](https://core.telegram.org/api/channel) |
| megagroup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this is a [supergroup](https://core.telegram.org/api/channel) |
| request_needed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether the [join request »](https://core.telegram.org/api/invites#join-requests) must be first approved by an administrator |
| verified | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Is this chat or channel verified by Telegram? |
| scam | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | This chat is probably a scam |
| fake | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | If set, this chat was reported by many users as a fake or scam: be careful when interacting with it. |
| can_refulfill_subscription | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | If set, indicates that the user has already paid for the associated [Telegram Star subscriptions »](https://core.telegram.org/api/stars#star-subscriptions) and it hasn't expired yet, so they may re-join the channel using [messages.importChatInvite](/method/messages.importChatInvite/) without repeating the payment. |
| title | [string](/type/string/) | Chat/supergroup/channel title |
| about | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | Description of the group of channel |
| photo | [Photo](/type/Photo/) | Chat/supergroup/channel photo |
| participants_count | [int](/type/int/) | Participant count |
| participants | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | A few of the participants that are in the group |
| color | [int](/type/int/) | [Profile color palette ID](https://core.telegram.org/api/colors) |
| subscription_pricing | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[StarsSubscriptionPricing](/type/StarsSubscriptionPricing/) | For [Telegram Star subscriptions »](https://core.telegram.org/api/stars#star-subscriptions), contains the pricing of the subscription the user must activate to join the private channel. |
| subscription_form_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[long](/type/long/) | For [Telegram Star subscriptions »](https://core.telegram.org/api/stars#star-subscriptions), the ID of the payment form for the subscription. |
| bot_verification | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[BotVerification](/type/BotVerification/) | Describes a [bot verification icon »](https://core.telegram.org/api/bots/verification). |

## Тип

[ChatInvite](/type/ChatInvite/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [messages.importChatInvite](/method/messages.importChatInvite/)

Import a chat invite and join a private chat/supergroup/channel

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
