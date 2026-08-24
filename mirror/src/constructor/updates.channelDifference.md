---
title: "updates.channelDifference"
original: "https://core.telegram.org/constructor/updates.channelDifference"
section: ref
description: "updates.ChannelDifference"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.channelDifference","url":"/constructor/updates.channelDifference/"}]
layout: layout.njk
---

# updates.channelDifference

The new updates

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.channelDifference/" class="current_page_link">updates.channelDifference</a>#2064674e flags:<a href="/type/%23/">#</a> final:flags.0?true pts:<a href="/type/int/">int</a> timeout:flags.1?<a href="/type/int/">int</a> new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/updates.ChannelDifference/">updates.ChannelDifference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>final</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether there are more updates to be fetched using getDifference, starting from the provided <code>pts</code></td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The <a href="/api/updates/">PTS</a> from which to start getting updates the next time</td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Clients are supposed to refetch the channel difference after timeout seconds have elapsed, if the user is <a href="/api/updates/#subscribing-to-updates-of-channels-supergroups">currently viewing the chat, see here »</a> for more info.</td></tr><tr><td><strong>new_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>New messages</td></tr><tr><td><strong>other_updates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt;</td><td>Other updates</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users</td></tr></tbody></table>

### Type

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
