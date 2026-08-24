---
title: "globalPrivacySettings"
original: "https://core.telegram.org/constructor/globalPrivacySettings"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"globalPrivacySettings","url":"/constructor/globalPrivacySettings/"}]
layout: layout.njk
---

# globalPrivacySettings

Global privacy settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/globalPrivacySettings/" class="current_page_link">globalPrivacySettings</a>#fe41b34f flags:<a href="/type/%23/">#</a> archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?<a href="/type/long/">long</a> disallowed_gifts:flags.6?<a href="/type/DisallowedGiftsSettings/">DisallowedGiftsSettings</a> = <a href="/type/GlobalPrivacySettings/">GlobalPrivacySettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>archive_and_mute_new_noncontact_peers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to archive and mute new chats from non-contacts</td></tr><tr><td><strong>keep_archived_unmuted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether unmuted chats will be kept in the Archive chat list when they get a new message.</td></tr><tr><td><strong>keep_archived_folders</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether unmuted chats that are always included or pinned in a <a href="/api/folders/">folder</a>, will be kept in the Archive chat list when they get a new message. Ignored if <code>keep_archived_unmuted</code> is set.</td></tr><tr><td><strong>hide_read_marks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If this flag is set, the <a href="/constructor/inputPrivacyKeyStatusTimestamp/">inputPrivacyKeyStatusTimestamp</a> key will also apply to the ability to use <a href="/method/messages.getOutboxReadDate/">messages.getOutboxReadDate</a> on messages sent to us.<br>Meaning, users that cannot see <em>our</em> exact last online date due to the current value of the <a href="/constructor/inputPrivacyKeyStatusTimestamp/">inputPrivacyKeyStatusTimestamp</a> key will receive a <code>403 USER_PRIVACY_RESTRICTED</code> error when invoking <a href="/method/messages.getOutboxReadDate/">messages.getOutboxReadDate</a> to fetch the exact read date of a message they sent to us.<br>The <a href="/constructor/userFull/">userFull</a>.<code>read_dates_private</code> flag will be set for users that have this flag enabled.</td></tr><tr><td><strong>new_noncontact_peers_require_premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>See <a href="/api/privacy/#require-premium-for-new-non-contact-users">here for more info on this flag »</a>.</td></tr><tr><td><strong>display_gifts_button</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Enables or disables our <a href="/constructor/userFull/">userFull</a>.<code>display_gifts_button</code> flag: if the <a href="/constructor/userFull/">userFull</a>.<code>display_gifts_button</code> flag of both us and another user is set, a gift button should always be displayed in the text field in private chats with the other user: once clicked, the gift UI should be displayed, offering the user options to gift <a href="/api/premium/#gifting-telegram-premium">Telegram Premium »</a> subscriptions or <a href="/api/gifts/">Telegram Gifts »</a>.</td></tr><tr><td><strong>noncontact_peers_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/long/">long</a></td><td>If configured, specifies the number of <a href="/api/stars/">stars</a> users must pay us to send us a message, see <a href="/api/paid-messages/">here »</a> for more info on paid messages.</td></tr><tr><td><strong>disallowed_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/DisallowedGiftsSettings/">DisallowedGiftsSettings</a></td><td>Disallows the reception of specific gift types.</td></tr></tbody></table>

### Type

[GlobalPrivacySettings](/type/GlobalPrivacySettings/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/)

Whether people will be able to see our exact last online timestamp.

Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](/api/premium/) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us.

If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set.

#### [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/)

Get the exact read date of one of our messages, sent to a private chat with another user.

Can be only done for private outgoing messages not older than [appConfig.pm\_read\_date\_expire\_period »](/api/config/#pm-read-date-expire-period).

If the `peer`'s [userFull](/constructor/userFull/).`read_dates_private` flag is set, we will not be able to fetch the exact read date of messages we send to them, and a `USER_PRIVACY_RESTRICTED` RPC error will be emitted.  
The exact read date of messages might still be unavailable for other reasons, see [here »](/constructor/globalPrivacySettings/) for more info.  
To set [userFull](/constructor/userFull/).`read_dates_private` for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the `settings.hide_read_marks` flag.

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
