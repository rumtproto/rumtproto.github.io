---
title: "globalPrivacySettings (конструктор)"
original: "https://core.telegram.org/constructor/globalPrivacySettings"
section: ref
kind: constructor
layout: layout.njk
---

# globalPrivacySettings

*Конструктор из схемы TL.*

> Global privacy settings

## Определение TL

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| archive_and_mute_new_noncontact_peers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to archive and mute new chats from non-contacts |
| keep_archived_unmuted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether unmuted chats will be kept in the Archive chat list when they get a new message. |
| keep_archived_folders | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether unmuted chats that are always included or pinned in a [folder](https://core.telegram.org/api/folders), will be kept in the Archive chat list when they get a new message. Ignored if keep_archived_unmuted is set. |
| hide_read_marks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If this flag is set, the [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/) key will also apply to the ability to use [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/) on messages sent to us. Meaning, users that cannot see our exact last online date due to the current value of the [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/) key will receive a 403 USER_PRIVACY_RESTRICTED error when invoking [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/) to fetch the exact read date of a message they sent to us. The [userFull](/constructor/userFull/).read_dates_private flag will be set for users that have this flag enabled. |
| new_noncontact_peers_require_premium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | See [here for more info on this flag »](https://core.telegram.org/api/privacy#require-premium-for-new-non-contact-users). |
| display_gifts_button | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Enables or disables our [userFull](/constructor/userFull/).display_gifts_button flag: if the [userFull](/constructor/userFull/).display_gifts_button flag of both us and another user is set, a gift button should always be displayed in the text field in private chats with the other user: once clicked, the gift UI should be displayed, offering the user options to gift [Telegram Premium »](https://core.telegram.org/api/premium#gifting-telegram-premium) subscriptions or [Telegram Gifts »](https://core.telegram.org/api/gifts). |
| noncontact_peers_paid_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[long](/type/long/) | If configured, specifies the number of [stars](https://core.telegram.org/api/stars) users must pay us to send us a message, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages. |
| disallowed_gifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[DisallowedGiftsSettings](/type/DisallowedGiftsSettings/) | Disallows the reception of specific gift types. |

## Тип

[GlobalPrivacySettings](/type/GlobalPrivacySettings/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/)

Whether people will be able to see our exact last online timestamp.

Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](https://core.telegram.org/api/premium) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us.

If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set.

#### [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/)

Get the exact read date of one of our messages, sent to a private chat with another user.

Can be only done for private outgoing messages not older than [appConfig.pm\_read\_date\_expire\_period »](https://core.telegram.org/api/config#pm-read-date-expire-period).

If the `peer`'s [userFull](/constructor/userFull/).`read_dates_private` flag is set, we will not be able to fetch the exact read date of messages we send to them, and a `USER_PRIVACY_RESTRICTED` RPC error will be emitted.  
The exact read date of messages might still be unavailable for other reasons, see [here »](/constructor/globalPrivacySettings/) for more info.  
To set [userFull](/constructor/userFull/).`read_dates_private` for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the `settings.hide_read_marks` flag.

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
