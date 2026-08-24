---
title: "messageReplies"
original: "https://core.telegram.org/constructor/messageReplies"
section: ref
description: "Info about the comment section of a channel post, a simple message thread, a forum topic, or a direct messages topic (all features ultimately based on message threads)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageReplies","url":"/constructor/messageReplies/"}]
layout: layout.njk
---

# messageReplies

Info about [the comment section of a channel post, a simple message thread, a forum topic, or a direct messages topic](/api/threads/) (all features ultimately based on message threads).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReplies/" class="current_page_link">messageReplies</a>#83d60fc2 flags:<a href="/type/%23/">#</a> comments:flags.0?true replies:<a href="/type/int/">int</a> replies_pts:<a href="/type/int/">int</a> recent_repliers:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; channel_id:flags.0?<a href="/type/long/">long</a> max_id:flags.2?<a href="/type/int/">int</a> read_max_id:flags.3?<a href="/type/int/">int</a> = <a href="/type/MessageReplies/">MessageReplies</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>comments</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this constructor contains information about the <a href="/api/threads/">comment section of a channel post, or a simple message thread</a></td></tr><tr><td><strong>replies</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Contains the total number of replies in this thread or comment section.</td></tr><tr><td><strong>replies_pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">PTS</a> of the message that started this thread.</td></tr><tr><td><strong>recent_repliers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>For channel post comments, contains information about the last few comment posters for a specific thread, to show a small list of commenter profile pictures in client previews.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>For channel post comments, contains the ID of the associated <a href="/api/discussion/">discussion supergroup</a></td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>ID of the latest message in this thread or comment section.</td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Contains the ID of the latest read message in this thread or comment section.</td></tr></tbody></table>

### Type

[MessageReplies](/type/MessageReplies/)

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.
