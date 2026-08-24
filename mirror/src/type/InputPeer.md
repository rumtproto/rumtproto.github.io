---
title: "InputPeer"
original: "https://core.telegram.org/type/InputPeer"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPeer","url":"/type/InputPeer/"}]
layout: layout.njk
---

# InputPeer

Peer

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPeerEmpty/">inputPeerEmpty</a>#7f3b18ea = <a href="/type/InputPeer/" class="current_page_link">InputPeer</a>;
<a href="/constructor/inputPeerSelf/">inputPeerSelf</a>#7da07ec9 = <a href="/type/InputPeer/" class="current_page_link">InputPeer</a>;
<a href="/constructor/inputPeerChat/">inputPeerChat</a>#35a95cb9 chat_id:<a href="/type/long/">long</a> = <a href="/type/InputPeer/" class="current_page_link">InputPeer</a>;
<a href="/constructor/inputPeerUser/">inputPeerUser</a>#dde8a54c user_id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputPeer/" class="current_page_link">InputPeer</a>;
<a href="/constructor/inputPeerChannel/">inputPeerChannel</a>#27bcbbfc channel_id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputPeer/" class="current_page_link">InputPeer</a>;
<a href="/constructor/inputPeerUserFromMessage/">inputPeerUserFromMessage</a>#a87b0a1c peer:<a href="/type/InputPeer/" class="current_page_link">InputPeer</a> msg_id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> = <a href="/type/InputPeer/" class="current_page_link">InputPeer</a>;
<a href="/constructor/inputPeerChannelFromMessage/">inputPeerChannelFromMessage</a>#bd2a0840 peer:<a href="/type/InputPeer/" class="current_page_link">InputPeer</a> msg_id:<a href="/type/int/">int</a> channel_id:<a href="/type/long/">long</a> = <a href="/type/InputPeer/" class="current_page_link">InputPeer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPeerEmpty/">inputPeerEmpty</a></td><td>An empty constructor, no user or chat is defined.</td></tr><tr><td><a href="/constructor/inputPeerSelf/">inputPeerSelf</a></td><td>Defines the current user.</td></tr><tr><td><a href="/constructor/inputPeerChat/">inputPeerChat</a></td><td>Defines a chat for further interaction.</td></tr><tr><td><a href="/constructor/inputPeerUser/">inputPeerUser</a></td><td>Defines a user for further interaction.</td></tr><tr><td><a href="/constructor/inputPeerChannel/">inputPeerChannel</a></td><td>Defines a channel for further interaction.</td></tr><tr><td><a href="/constructor/inputPeerUserFromMessage/">inputPeerUserFromMessage</a></td><td>Defines a <a href="/api/min/">min</a> user that was seen in a certain message of a certain chat.</td></tr><tr><td><a href="/constructor/inputPeerChannelFromMessage/">inputPeerChannelFromMessage</a></td><td>Defines a <a href="/api/min/">min</a> channel that was seen in a certain message of a certain chat.</td></tr></tbody></table>
