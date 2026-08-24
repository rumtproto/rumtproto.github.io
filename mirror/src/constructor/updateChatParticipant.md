---
title: "updateChatParticipant"
original: "https://core.telegram.org/constructor/updateChatParticipant"
section: ref
description: "A user has joined or left a specific basic group »: this update can only be received by bots, see here » for the user version of this update."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChatParticipant","url":"/constructor/updateChatParticipant/"}]
layout: layout.njk
---

# updateChatParticipant

A user has joined or left a specific [basic group »](/api/channel/#basic-groups): this update can only be received by bots, see [here »](/api/peers/#basic-group-updates) for the user version of this update.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChatParticipant/" class="current_page_link">updateChatParticipant</a>#d087663a flags:<a href="/type/%23/">#</a> chat_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> actor_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> prev_participant:flags.0?<a href="/type/ChatParticipant/">ChatParticipant</a> new_participant:flags.1?<a href="/type/ChatParticipant/">ChatParticipant</a> invite:flags.2?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/channel/">Chat</a> ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did this event occur</td></tr><tr><td><strong>actor_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User that triggered the change (inviter, admin that kicked the user, or the even the <strong>user_id</strong> itself)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User that was affected by the change</td></tr><tr><td><strong>prev_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/ChatParticipant/">ChatParticipant</a></td><td>Previous participant info (empty if this participant just joined)</td></tr><tr><td><strong>new_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/ChatParticipant/">ChatParticipant</a></td><td>New participant info (empty if this participant just left)</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ExportedChatInvite/">ExportedChatInvite</a></td><td>The invite that was used to join the group</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
