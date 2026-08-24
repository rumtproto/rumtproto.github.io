---
title: "InputChannel"
original: "https://core.telegram.org/type/InputChannel"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputChannel","url":"/type/InputChannel/"}]
layout: layout.njk
---

# InputChannel

Represents a channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputChannelEmpty/">inputChannelEmpty</a>#ee8c1e86 = <a href="/type/InputChannel/" class="current_page_link">InputChannel</a>;
<a href="/constructor/inputChannel/">inputChannel</a>#f35aec28 channel_id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputChannel/" class="current_page_link">InputChannel</a>;
<a href="/constructor/inputChannelFromMessage/">inputChannelFromMessage</a>#5b934f9d peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> channel_id:<a href="/type/long/">long</a> = <a href="/type/InputChannel/" class="current_page_link">InputChannel</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputChannelEmpty/">inputChannelEmpty</a></td><td>Represents the absence of a channel</td></tr><tr><td><a href="/constructor/inputChannel/">inputChannel</a></td><td>Represents a channel</td></tr><tr><td><a href="/constructor/inputChannelFromMessage/">inputChannelFromMessage</a></td><td>Defines a <a href="/api/min/">min</a> channel that was seen in a certain message of a certain chat.</td></tr></tbody></table>
