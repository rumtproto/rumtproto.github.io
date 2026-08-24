---
title: "channelMessagesFilter"
original: "https://core.telegram.org/constructor/channelMessagesFilter"
section: ref
description: "Filter for getting only certain types of channel messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelMessagesFilter","url":"/constructor/channelMessagesFilter/"}]
layout: layout.njk
---

# channelMessagesFilter

Filter for getting only certain types of channel messages.

This filter cannot be used to fetch messages older than the channel message box size.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelMessagesFilter/" class="current_page_link">channelMessagesFilter</a>#cd77d957 flags:<a href="/type/%23/">#</a> exclude_new_messages:flags.1?true ranges:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageRange/">MessageRange</a>&gt; = <a href="/type/ChannelMessagesFilter/">ChannelMessagesFilter</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>exclude_new_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether to exclude new messages from the search</td></tr><tr><td><strong>ranges</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageRange/">MessageRange</a>&gt;</td><td>A range of messages to fetch</td></tr></tbody></table>

### Type

[ChannelMessagesFilter](/type/ChannelMessagesFilter/)
