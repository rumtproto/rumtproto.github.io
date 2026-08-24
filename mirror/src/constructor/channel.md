---
title: "channel"
original: "https://core.telegram.org/constructor/channel"
section: ref
description: "When updating the local peer database, all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channel","url":"/constructor/channel/"}]
layout: layout.njk
---

# channel

Channel/supergroup info

When updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

The only exception to the above rule is when the `min` flag is set, in which case **only** the following fields must be applied over any locally stored version:

-   `title`
-   `megagroup`
-   `color`
-   `photo`
-   `username`
-   `usernames`
-   `has_geo`
-   `noforwards`
-   `emoji_status`
-   `has_link`
-   `slow_mode_enabled`
-   `scam`
-   `fake`
-   `gigagroup`
-   `forum`
-   `level`
-   `restricted`
-   `restriction_reason`
-   `join_to_send`
-   `join_request`
-   `is_verified`
-   `default_banned_rights`
-   `signature_profiles`
-   `autotranslation`
-   `broadcast_messages_allowed`
-   `monoforum`
-   `forum_tabs`
-   `linked_monoforum_id`
-   `send_paid_messages_stars`
-   `bot_verification_icon`

See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L9176) for an implementation of the logic to use when updating the [local channel peer database](/api/peers/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channel/" class="current_page_link">channel</a>#1c32b11c flags:<a href="/type/%23/">#</a> creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:<a href="/type/%23/">#</a> stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:<a href="/type/long/">long</a> access_hash:flags.13?<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> username:flags.6?<a href="/type/string/">string</a> photo:<a href="/type/ChatPhoto/">ChatPhoto</a> date:<a href="/type/int/">int</a> restriction_reason:flags.9?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt; admin_rights:flags.14?<a href="/type/ChatAdminRights/">ChatAdminRights</a> banned_rights:flags.15?<a href="/type/ChatBannedRights/">ChatBannedRights</a> default_banned_rights:flags.18?<a href="/type/ChatBannedRights/">ChatBannedRights</a> participants_count:flags.17?<a href="/type/int/">int</a> usernames:flags2.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Username/">Username</a>&gt; stories_max_id:flags2.4?<a href="/type/RecentStory/">RecentStory</a> color:flags2.7?<a href="/type/PeerColor/">PeerColor</a> profile_color:flags2.8?<a href="/type/PeerColor/">PeerColor</a> emoji_status:flags2.9?<a href="/type/EmojiStatus/">EmojiStatus</a> level:flags2.10?<a href="/type/int/">int</a> subscription_until_date:flags2.11?<a href="/type/int/">int</a> bot_verification_icon:flags2.13?<a href="/type/long/">long</a> send_paid_messages_stars:flags2.14?<a href="/type/long/">long</a> linked_monoforum_id:flags2.18?<a href="/type/long/">long</a> = <a href="/type/Chat/">Chat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the current user is the creator of this channel</td></tr><tr><td><strong>left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the current user has left or is not a member of this channel</td></tr><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Is this a channel?</td></tr><tr><td><strong>verified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Is this channel verified by telegram?</td></tr><tr><td><strong>megagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Is this a supergroup?<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>restricted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether viewing/writing in this channel for a reason (see <code>restriction_reason</code>)</td></tr><tr><td><strong>signatures</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>Whether signatures are enabled (channels)</td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td>See <a href="/api/min/">min</a></td></tr><tr><td><strong>scam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>This channel/supergroup is probably a scam<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>has_link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/constructor/true/">true</a></td><td>Whether this channel has a linked <a href="/api/discussion/">discussion group »</a> (or this supergroup is a channel's discussion group). The actual ID of the linked channel/supergroup is contained in <a href="/constructor/channelFull/">channelFull</a>.<code>linked_chat_id</code>.<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>has_geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/constructor/true/">true</a></td><td>Whether this chanel has a geoposition</td></tr><tr><td><strong>slowmode_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.22?<a href="/constructor/true/">true</a></td><td>Whether slow mode is enabled for groups to prevent flood in chat.<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>call_active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.23?<a href="/constructor/true/">true</a></td><td>Whether a group call or livestream is currently active</td></tr><tr><td><strong>call_not_empty</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.24?<a href="/constructor/true/">true</a></td><td>Whether there's anyone in the group call or livestream</td></tr><tr><td><strong>fake</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/constructor/true/">true</a></td><td>If set, this <a href="/api/channel/">supergroup/channel</a> was reported by many users as a fake or scam: be careful when interacting with it.<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>gigagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.26?<a href="/constructor/true/">true</a></td><td>Whether this <a href="/api/channel/">supergroup</a> is a gigagroup<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.27?<a href="/constructor/true/">true</a></td><td>Whether this channel or group is <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">protected</a>, thus does not allow forwarding messages from it</td></tr><tr><td><strong>join_to_send</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/constructor/true/">true</a></td><td>Whether a user needs to join the supergroup before they can send messages: can be false only for <a href="/api/discussion/">discussion groups »</a>, toggle using <a href="/method/channels.toggleJoinToSend/">channels.toggleJoinToSend</a><br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>join_request</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.29?<a href="/constructor/true/">true</a></td><td>Whether a user's join request will have to be <a href="/api/invites/#join-requests">approved by administrators</a>, toggle using <a href="/method/channels.toggleJoinRequest/">channels.toggleJoinToSend</a><br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>forum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.30?<a href="/constructor/true/">true</a></td><td>Whether this supergroup is a <a href="/api/forum/">forum</a>.<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>stories_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.1?<a href="/constructor/true/">true</a></td><td>Whether we have <a href="/api/stories/#hiding-stories-of-other-users">hidden all stories posted by this channel »</a>.</td></tr><tr><td><strong>stories_hidden_min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.2?<a href="/constructor/true/">true</a></td><td>If set, indicates that the <code>stories_hidden</code> flag was not populated, and its value must cannot be relied on; use the previously cached value, or re-fetch the constructor using <a href="/method/channels.getChannels/">channels.getChannels</a> to obtain the latest value of the <code>stories_hidden</code> flag.</td></tr><tr><td><strong>stories_unavailable</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.3?<a href="/constructor/true/">true</a></td><td>No stories from the channel are visible.</td></tr><tr><td><strong>signature_profiles</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.12?<a href="/constructor/true/">true</a></td><td>If set, messages sent by admins to this channel will link to the admin's profile (just like with groups).</td></tr><tr><td><strong>autotranslation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.15?<a href="/constructor/true/">true</a></td><td>If set, <a href="/api/translation/#autotranslation-for-channels">autotranslation</a> was enabled for all users by the admin of the channel, as specified <a href="/api/translation/#autotranslation-for-channels">here »</a>.</td></tr><tr><td><strong>broadcast_messages_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.16?<a href="/constructor/true/">true</a></td><td>If set, this channel has an associated <a href="/api/monoforum/">monoforum »</a>, and its ID is specified in the <code>linked_monoforum_id</code> flag.</td></tr><tr><td><strong>monoforum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.17?<a href="/constructor/true/">true</a></td><td>If set, this is a <a href="/api/monoforum/">monoforum »</a>, and the ID of the associated channel is specified in the <code>linked_monoforum_id</code>.</td></tr><tr><td><strong>forum_tabs</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.19?<a href="/constructor/true/">true</a></td><td><a href="/api/forum/#tabbed-or-list-based-forum-ui">If set, enables the tabbed forum UI »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the channel, see <a href="/api/peers/#peer-id">here »</a> for more info and the available ID range.</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/long/">long</a></td><td>Access hash, see <a href="/api/peers/#access-hash">here »</a> for more info</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/string/">string</a></td><td>Main active username.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/ChatPhoto/">ChatPhoto</a></td><td>Profile photo</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date when the user joined the supergroup/channel, or if the user isn't a member, its creation date</td></tr><tr><td><strong>restriction_reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt;</td><td>Contains the reason why access to this channel must be restricted.<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>Admin rights of the user in this channel (see <a href="/api/rights/">rights</a>)</td></tr><tr><td><strong>banned_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/ChatBannedRights/">ChatBannedRights</a></td><td>Banned rights of the user in this channel (see <a href="/api/rights/">rights</a>)</td></tr><tr><td><strong>default_banned_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/ChatBannedRights/">ChatBannedRights</a></td><td>Default chat rights (see <a href="/api/rights/">rights</a>)</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/int/">int</a></td><td>Participant count</td></tr><tr><td><strong>usernames</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Username/">Username</a>&gt;</td><td>Additional usernames</td></tr><tr><td><strong>stories_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.4?<a href="/type/RecentStory/">RecentStory</a></td><td>Summary of the channel or supergroup's <a href="/api/stories/#recent-story-summaries">active stories »</a>.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.7?<a href="/type/PeerColor/">PeerColor</a></td><td>The channel's <a href="/api/colors/">accent color</a>.</td></tr><tr><td><strong>profile_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.8?<a href="/type/PeerColor/">PeerColor</a></td><td>The channel's <a href="/api/colors/">profile color</a>.</td></tr><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.9?<a href="/type/EmojiStatus/">EmojiStatus</a></td><td><a href="/api/emoji-status/">Emoji status</a></td></tr><tr><td><strong>level</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.10?<a href="/type/int/">int</a></td><td><a href="/api/boost/">Boost level</a>.<br>Changes to this flag should invalidate the local <a href="/constructor/channelFull/">channelFull</a> cache for this channel/supergroup ID, see <a href="/api/peers/#full-info-database">here »</a> for more info.</td></tr><tr><td><strong>subscription_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.11?<a href="/type/int/">int</a></td><td>Expiration date of the <a href="/api/stars/#star-subscriptions">Telegram Star subscription »</a> the current user has bought to gain access to this channel.</td></tr><tr><td><strong>bot_verification_icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.13?<a href="/type/long/">long</a></td><td>Describes a <a href="/api/bots/verification/">bot verification icon »</a>.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.14?<a href="/type/long/">long</a></td><td>If set, this supergroup or <a href="/api/monoforum/">monoforum</a> has enabled <a href="/api/paid-messages/">paid messages »</a>, we <em>might</em> need to pay the specified amount of <a href="/api/stars/">Stars</a> to send messages to it, depending on the configured exceptions: check <a href="/constructor/channelFull/">channelFull</a>.<code>send_paid_messages_stars</code> to see if the currently logged in user actually has to pay or not, see <a href="/api/paid-messages/">here »</a> for the full flow (only set for the monoforum, not the associated channel).</td></tr><tr><td><strong>linked_monoforum_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.18?<a href="/type/long/">long</a></td><td>For channels with associated <a href="/api/monoforum/">monoforums</a>, the <a href="/api/monoforum/">monoforum</a> ID. For <a href="/api/monoforum/">Monoforums</a>, the ID of the associated channel.</td></tr></tbody></table>

### Type

[Chat](/type/Chat/)

### Related pages

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups) or [gigagroup](/api/channel/#gigagroups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Min constructors](/api/min/)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.toggleJoinToSend](/method/channels.toggleJoinToSend/)

Set whether all users [should join a discussion group in order to comment on a post »](/api/discussion/#requiring-users-to-join-the-group)

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [channels.toggleJoinRequest](/method/channels.toggleJoinRequest/)

Set whether all users should [request admin approval to join the group »](/api/invites/#join-requests).

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [channels.getChannels](/method/channels.getChannels/)

Get info about [channels/supergroups](/api/channel/)

#### [Message translation](/api/translation/)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
