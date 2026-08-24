---
title: "ChannelMessagesFilter"
original: "https://core.telegram.org/type/ChannelMessagesFilter"
section: ref
description: "Filter for fetching only certain types of channel messages"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChannelMessagesFilter","url":"/type/ChannelMessagesFilter/"}]
layout: layout.njk
---

# ChannelMessagesFilter

Filter for fetching only certain types of channel messages

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelMessagesFilterEmpty/">channelMessagesFilterEmpty</a>#94d42ee7 = <a href="/type/ChannelMessagesFilter/" class="current_page_link">ChannelMessagesFilter</a>;
<a href="/constructor/channelMessagesFilter/">channelMessagesFilter</a>#cd77d957 flags:<a href="/type/%23/">#</a> exclude_new_messages:flags.1?true ranges:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageRange/">MessageRange</a>&gt; = <a href="/type/ChannelMessagesFilter/" class="current_page_link">ChannelMessagesFilter</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channelMessagesFilterEmpty/">channelMessagesFilterEmpty</a></td><td>No filter</td></tr><tr><td><a href="/constructor/channelMessagesFilter/">channelMessagesFilter</a></td><td>Filter for getting only certain types of channel messages.<br><br>This filter cannot be used to fetch messages older than the channel message box size.</td></tr></tbody></table>
