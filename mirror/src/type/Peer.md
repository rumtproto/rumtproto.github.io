---
title: "Peer"
original: "https://core.telegram.org/type/Peer"
section: ref
description: "Identifier of a private chat, basic group, group or channel (see here » for more info)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Peer","url":"/type/Peer/"}]
layout: layout.njk
---

# Peer

Identifier of a private chat, basic group, group or channel (see [here »](/api/peers/) for more info).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerUser/">peerUser</a>#59511722 user_id:<a href="/type/long/">long</a> = <a href="/type/Peer/" class="current_page_link">Peer</a>;
<a href="/constructor/peerChat/">peerChat</a>#36c6019a chat_id:<a href="/type/long/">long</a> = <a href="/type/Peer/" class="current_page_link">Peer</a>;
<a href="/constructor/peerChannel/">peerChannel</a>#a2a5371e channel_id:<a href="/type/long/">long</a> = <a href="/type/Peer/" class="current_page_link">Peer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerUser/">peerUser</a></td><td>Chat partner</td></tr><tr><td><a href="/constructor/peerChat/">peerChat</a></td><td>Group.</td></tr><tr><td><a href="/constructor/peerChannel/">peerChannel</a></td><td>Channel/supergroup</td></tr></tbody></table>

### Related pages

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
