---
title: "channelParticipantSelf"
original: "https://core.telegram.org/constructor/channelParticipantSelf"
section: ref
description: "Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelParticipantSelf","url":"/constructor/channelParticipantSelf/"}]
layout: layout.njk
---

# channelParticipantSelf

Myself

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelParticipantSelf/" class="current_page_link">channelParticipantSelf</a>#a9478a1a flags:<a href="/type/%23/">#</a> via_request:flags.0?true user_id:<a href="/type/long/">long</a> inviter_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> subscription_until_date:flags.1?<a href="/type/int/">int</a> rank:flags.2?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/">ChannelParticipant</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>via_request</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether I joined upon specific approval of an admin</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User that invited me to the channel/supergroup</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did I join the channel/supergroup</td></tr><tr><td><strong>subscription_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>If set, contains the expiration date of the current <a href="/api/stars/#star-subscriptions">Telegram Star subscription period »</a> for the specified participant.</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>The participant's <a href="/api/rank/">tag »</a>.</td></tr></tbody></table>

### Type

[ChannelParticipant](/type/ChannelParticipant/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
