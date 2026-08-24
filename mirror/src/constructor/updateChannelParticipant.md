---
title: "updateChannelParticipant"
original: "https://core.telegram.org/constructor/updateChannelParticipant"
section: ref
description: "A participant has left, joined, was banned or admined in a channel or supergroup."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelParticipant","url":"/constructor/updateChannelParticipant/"}]
layout: layout.njk
---

# updateChannelParticipant

A participant has left, joined, was banned or admined in a [channel or supergroup](/api/channel/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelParticipant/" class="current_page_link">updateChannelParticipant</a>#985d3abb flags:<a href="/type/%23/">#</a> via_chatlist:flags.3?true channel_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> actor_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> prev_participant:flags.0?<a href="/type/ChannelParticipant/">ChannelParticipant</a> new_participant:flags.1?<a href="/type/ChannelParticipant/">ChannelParticipant</a> invite:flags.2?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>via_chatlist</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the participant joined using a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of the event</td></tr><tr><td><strong>actor_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User that triggered the change (inviter, admin that kicked the user, or the even the <strong>user_id</strong> itself)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User that was affected by the change</td></tr><tr><td><strong>prev_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/ChannelParticipant/">ChannelParticipant</a></td><td>Previous participant status</td></tr><tr><td><strong>new_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/ChannelParticipant/">ChannelParticipant</a></td><td>New participant status</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a></td><td>Chat invite used to join the <a href="/api/channel/">channel/supergroup</a></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
