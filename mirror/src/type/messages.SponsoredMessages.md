---
title: "messages.SponsoredMessages"
original: "https://core.telegram.org/type/messages.SponsoredMessages"
section: ref
description: "A set of sponsored messages associated with a channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SponsoredMessages","url":"/type/messages.SponsoredMessages/"}]
layout: layout.njk
---

# messages.SponsoredMessages

A set of [sponsored messages](/api/sponsored-messages/) associated with a channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.sponsoredMessages/">messages.sponsoredMessages</a>#ffda656d flags:<a href="/type/%23/">#</a> posts_between:flags.0?<a href="/type/int/">int</a> start_delay:flags.1?<a href="/type/int/">int</a> between_delay:flags.2?<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredMessage/">SponsoredMessage</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SponsoredMessages/" class="current_page_link">messages.SponsoredMessages</a>;
<a href="/constructor/messages.sponsoredMessagesEmpty/">messages.sponsoredMessagesEmpty</a>#1839490f = <a href="/type/messages.SponsoredMessages/" class="current_page_link">messages.SponsoredMessages</a>;

---functions---

<a href="/method/messages.getSponsoredMessages/">messages.getSponsoredMessages</a>#3d6ce850 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.SponsoredMessages/" class="current_page_link">messages.SponsoredMessages</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.sponsoredMessages/">messages.sponsoredMessages</a></td><td>A set of sponsored messages associated to a channel</td></tr><tr><td><a href="/constructor/messages.sponsoredMessagesEmpty/">messages.sponsoredMessagesEmpty</a></td><td>No sponsored messages are available.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSponsoredMessages/">messages.getSponsoredMessages</a></td><td>Get a list of <a href="/api/sponsored-messages/">sponsored messages for a peer, see here »</a> for more info.</td></tr></tbody></table>
