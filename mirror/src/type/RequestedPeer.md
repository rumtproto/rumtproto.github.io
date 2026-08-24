---
title: "RequestedPeer"
original: "https://core.telegram.org/type/RequestedPeer"
section: ref
description: "Info about a peer, shared by a user with the currently logged in bot using messages.sendBotRequestedPeer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RequestedPeer","url":"/type/RequestedPeer/"}]
layout: layout.njk
---

# RequestedPeer

Info about a peer, shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/requestedPeerUser/">requestedPeerUser</a>#d62ff46a flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> first_name:flags.0?<a href="/type/string/">string</a> last_name:flags.0?<a href="/type/string/">string</a> username:flags.1?<a href="/type/string/">string</a> photo:flags.2?<a href="/type/Photo/">Photo</a> = <a href="/type/RequestedPeer/" class="current_page_link">RequestedPeer</a>;
<a href="/constructor/requestedPeerChat/">requestedPeerChat</a>#7307544f flags:<a href="/type/%23/">#</a> chat_id:<a href="/type/long/">long</a> title:flags.0?<a href="/type/string/">string</a> photo:flags.2?<a href="/type/Photo/">Photo</a> = <a href="/type/RequestedPeer/" class="current_page_link">RequestedPeer</a>;
<a href="/constructor/requestedPeerChannel/">requestedPeerChannel</a>#8ba403e4 flags:<a href="/type/%23/">#</a> channel_id:<a href="/type/long/">long</a> title:flags.0?<a href="/type/string/">string</a> username:flags.1?<a href="/type/string/">string</a> photo:flags.2?<a href="/type/Photo/">Photo</a> = <a href="/type/RequestedPeer/" class="current_page_link">RequestedPeer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/requestedPeerUser/">requestedPeerUser</a></td><td>Info about a user, shared by a user with the currently logged in bot using <a href="/method/messages.sendBotRequestedPeer/">messages.sendBotRequestedPeer</a>.<br><br>All fields except the ID are optional, and will be populated if present on the chosen user, according to the parameters of the requesting <a href="/constructor/inputKeyboardButtonRequestPeer/">inputKeyboardButtonRequestPeer</a>.</td></tr><tr><td><a href="/constructor/requestedPeerChat/">requestedPeerChat</a></td><td>Info about a <a href="/api/channel/">chat</a>, shared by a user with the currently logged in bot using <a href="/method/messages.sendBotRequestedPeer/">messages.sendBotRequestedPeer</a>.<br><br>All fields except the ID are optional, and will be populated if present on the chosen chat, according to the parameters of the requesting <a href="/constructor/inputKeyboardButtonRequestPeer/">inputKeyboardButtonRequestPeer</a>.</td></tr><tr><td><a href="/constructor/requestedPeerChannel/">requestedPeerChannel</a></td><td>Info about a <a href="/api/channel/">channel/supergroup</a>, shared by a user with the currently logged in bot using <a href="/method/messages.sendBotRequestedPeer/">messages.sendBotRequestedPeer</a>.<br><br>All fields except the ID are optional, and will be populated if present on the chosen channel/supergroup, according to the parameters of the requesting <a href="/constructor/inputKeyboardButtonRequestPeer/">inputKeyboardButtonRequestPeer</a>.</td></tr></tbody></table>

### Related pages

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.
