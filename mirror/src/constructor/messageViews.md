---
title: "messageViews"
original: "https://core.telegram.org/constructor/messageViews"
section: ref
description: "View, forward counter + info about replies of a specific message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageViews","url":"/constructor/messageViews/"}]
layout: layout.njk
---

# messageViews

View, forward counter + info about replies of a specific message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageViews/" class="current_page_link">messageViews</a>#455b853d flags:<a href="/type/%23/">#</a> views:flags.0?<a href="/type/int/">int</a> forwards:flags.1?<a href="/type/int/">int</a> replies:flags.2?<a href="/type/MessageReplies/">MessageReplies</a> = <a href="/type/MessageViews/">MessageViews</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>View count of message</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Forward count of message</td></tr><tr><td><strong>replies</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/MessageReplies/">MessageReplies</a></td><td>Reply and <a href="/api/threads/">thread</a> information of message</td></tr></tbody></table>

### Type

[MessageViews](/type/MessageViews/)

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
