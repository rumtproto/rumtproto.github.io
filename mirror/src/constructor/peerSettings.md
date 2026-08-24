---
title: "peerSettings"
original: "https://core.telegram.org/constructor/peerSettings"
section: ref
description: "List of actions that are possible when interacting with this user, to be shown as suggested actions in the chat action bar », see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"peerSettings","url":"/constructor/peerSettings/"}]
layout: layout.njk
---

# peerSettings

List of actions that are possible when interacting with this user, to be shown as suggested actions in the [chat action bar »](/api/action-bar/), see [here »](/api/action-bar/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerSettings/" class="current_page_link">peerSettings</a>#f47741f7 flags:<a href="/type/%23/">#</a> report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?<a href="/type/int/">int</a> request_chat_title:flags.9?<a href="/type/string/">string</a> request_chat_date:flags.9?<a href="/type/int/">int</a> business_bot_id:flags.13?<a href="/type/long/">long</a> business_bot_manage_url:flags.13?<a href="/type/string/">string</a> charge_paid_message_stars:flags.14?<a href="/type/long/">long</a> registration_month:flags.15?<a href="/type/string/">string</a> phone_country:flags.16?<a href="/type/string/">string</a> name_change_date:flags.17?<a href="/type/int/">int</a> photo_change_date:flags.18?<a href="/type/int/">int</a> = <a href="/type/PeerSettings/">PeerSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>report_spam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether we can still report the user for spam</td></tr><tr><td><strong>add_contact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether we can add the user as contact</td></tr><tr><td><strong>block_contact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether we can block the user</td></tr><tr><td><strong>share_contact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether we can share the user's contact</td></tr><tr><td><strong>need_contacts_exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether a special exception for contacts is needed</td></tr><tr><td><strong>report_geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether we can report a geogroup as irrelevant for this location</td></tr><tr><td><strong>autoarchived</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether this peer was automatically archived according to <a href="/constructor/globalPrivacySettings/">privacy settings</a> and can be unarchived</td></tr><tr><td><strong>invite_members</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>If set, this is a recently created group chat to which new members can be invited</td></tr><tr><td><strong>request_chat_broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>This flag is set if <code>request_chat_title</code> and <code>request_chat_date</code> fields are set and the <a href="/api/invites/#join-requests">join request »</a> is related to a channel (otherwise if only the request fields are set, the <a href="/api/invites/#join-requests">join request »</a> is related to a chat).</td></tr><tr><td><strong>business_bot_paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>This flag is set if both <code>business_bot_id</code> and <code>business_bot_manage_url</code> are set and all <a href="/api/bots/connected-business-bots/">connected business bots »</a> were paused in this chat using <a href="/method/account.toggleConnectedBotPaused/">account.toggleConnectedBotPaused »</a>.</td></tr><tr><td><strong>business_bot_can_reply</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td>This flag is set if both <code>business_bot_id</code> and <code>business_bot_manage_url</code> are set and <a href="/api/bots/connected-business-bots/">connected business bots »</a> can reply to messages in this chat, as specified by the settings during <a href="/api/bots/connected-business-bots/">initial configuration</a>.</td></tr><tr><td><strong>geo_distance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Distance in meters between us and this peer</td></tr><tr><td><strong>request_chat_title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/string/">string</a></td><td>If set, this is a private chat with an administrator of a chat or channel to which the user sent a join request, and this field contains the chat/channel's title.</td></tr><tr><td><strong>request_chat_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/int/">int</a></td><td>If set, this is a private chat with an administrator of a chat or channel to which the user sent a join request, and this field contains the timestamp when the <a href="/api/invites/#join-requests">join request »</a> was sent.</td></tr><tr><td><strong>business_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/long/">long</a></td><td>Contains the ID of the <a href="/api/bots/connected-business-bots/">business bot »</a> managing this chat, used to display info about the bot in the action bar.</td></tr><tr><td><strong>business_bot_manage_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/string/">string</a></td><td>Contains a <a href="/api/links/">deep link »</a>, used to open a management menu in the business bot. This flag is set if and only if <code>business_bot_id</code> is set.</td></tr><tr><td><strong>charge_paid_message_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/long/">long</a></td><td>All users that must <a href="/api/paid-messages/">pay <em>us</em> »</a> to send us private messages will have this flag set <em>only for us</em>, containing the amount of required stars, see <a href="/api/paid-messages/">here »</a> for more info on paid messages.</td></tr><tr><td><strong>registration_month</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/string/">string</a></td><td>Used to display the user's registration year and month, the string is in <code>MM.YYYY</code> format, where <code>MM</code> is the registration month (<code>1-12</code>), and <code>YYYY</code> is the registration year.</td></tr><tr><td><strong>phone_country</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/type/string/">string</a></td><td>The country code of the user's phone number.</td></tr><tr><td><strong>name_change_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/int/">int</a></td><td>When was the user's name last changed.</td></tr><tr><td><strong>photo_change_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/int/">int</a></td><td>When was the user's photo last changed.</td></tr></tbody></table>

### Type

[PeerSettings](/type/PeerSettings/)

### Related pages

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Global privacy settings

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [account.toggleConnectedBotPaused](/method/account.toggleConnectedBotPaused/)

Pause or unpause a specific chat, temporarily disconnecting it from all [business bots »](/api/bots/connected-business-bots/).

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Action bar](/api/action-bar/)

Sometimes, when interacting with Telegram users via private or secret chats, an action bar must be shown on top of the chat, offering convenient action buttons or notices regarding the user.
