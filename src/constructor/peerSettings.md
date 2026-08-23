---
title: "peerSettings (конструктор)"
original: "https://core.telegram.org/constructor/peerSettings"
section: ref
kind: constructor
layout: layout.njk
---

# peerSettings

*Конструктор из схемы TL.*

> List of actions that are possible when interacting with this user, to be shown as suggested actions in the [chat action bar »](https://core.telegram.org/api/action-bar), see [here »](https://core.telegram.org/api/action-bar) for more info.

## Определение TL

```
peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| report_spam | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether we can still report the user for spam |
| add_contact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether we can add the user as contact |
| block_contact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether we can block the user |
| share_contact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether we can share the user's contact |
| need_contacts_exception | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether a special exception for contacts is needed |
| report_geo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether we can report a geogroup as irrelevant for this location |
| autoarchived | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether this peer was automatically archived according to [privacy settings](/constructor/globalPrivacySettings/) and can be unarchived |
| invite_members | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If set, this is a recently created group chat to which new members can be invited |
| request_chat_broadcast | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | This flag is set if request_chat_title and request_chat_date fields are set and the [join request »](https://core.telegram.org/api/invites#join-requests) is related to a channel (otherwise if only the request fields are set, the [join request »](https://core.telegram.org/api/invites#join-requests) is related to a chat). |
| business_bot_paused | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | This flag is set if both business_bot_id and business_bot_manage_url are set and all [connected business bots »](https://core.telegram.org/api/bots/connected-business-bots) were paused in this chat using [account.toggleConnectedBotPaused »](/method/account.toggleConnectedBotPaused/). |
| business_bot_can_reply | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | This flag is set if both business_bot_id and business_bot_manage_url are set and [connected business bots »](https://core.telegram.org/api/bots/connected-business-bots) can reply to messages in this chat, as specified by the settings during [initial configuration](https://core.telegram.org/api/bots/connected-business-bots). |
| geo_distance | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Distance in meters between us and this peer |
| request_chat_title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[string](/type/string/) | If set, this is a private chat with an administrator of a chat or channel to which the user sent a join request, and this field contains the chat/channel's title. |
| request_chat_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[int](/type/int/) | If set, this is a private chat with an administrator of a chat or channel to which the user sent a join request, and this field contains the timestamp when the [join request »](https://core.telegram.org/api/invites#join-requests) was sent. |
| business_bot_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[long](/type/long/) | Contains the ID of the [business bot »](https://core.telegram.org/api/bots/connected-business-bots) managing this chat, used to display info about the bot in the action bar. |
| business_bot_manage_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[string](/type/string/) | Contains a [deep link »](https://core.telegram.org/api/links), used to open a management menu in the business bot. This flag is set if and only if business_bot_id is set. |
| charge_paid_message_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[long](/type/long/) | All users that must [pay us »](https://core.telegram.org/api/paid-messages) to send us private messages will have this flag set only for us, containing the amount of required stars, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages. |
| registration_month | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[string](/type/string/) | Used to display the user's registration year and month, the string is in MM.YYYY format, where MM is the registration month (1-12), and YYYY is the registration year. |
| phone_country | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[string](/type/string/) | The country code of the user's phone number. |
| name_change_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[int](/type/int/) | When was the user's name last changed. |
| photo_change_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[int](/type/int/) | When was the user's photo last changed. |

## Тип

[PeerSettings](/type/PeerSettings/)

## Related pages

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Global privacy settings

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [account.toggleConnectedBotPaused](/method/account.toggleConnectedBotPaused/)

Pause or unpause a specific chat, temporarily disconnecting it from all [business bots »](https://core.telegram.org/api/bots/connected-business-bots).

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Action bar](https://core.telegram.org/api/action-bar)

Sometimes, when interacting with Telegram users via private or secret chats, an action bar must be shown on top of the chat, offering convenient action buttons or notices regarding the user.
