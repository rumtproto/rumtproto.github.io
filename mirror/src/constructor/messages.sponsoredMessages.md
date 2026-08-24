---
title: "messages.sponsoredMessages"
original: "https://core.telegram.org/constructor/messages.sponsoredMessages"
section: ref
description: "A set of sponsored messages associated to a channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.sponsoredMessages","url":"/constructor/messages.sponsoredMessages/"}]
layout: layout.njk
---

# messages.sponsoredMessages

A set of sponsored messages associated to a channel

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.sponsoredMessages/" class="current_page_link">messages.sponsoredMessages</a>#ffda656d flags:<a href="/type/%23/">#</a> posts_between:flags.0?<a href="/type/int/">int</a> start_delay:flags.1?<a href="/type/int/">int</a> between_delay:flags.2?<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredMessage/">SponsoredMessage</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SponsoredMessages/">messages.SponsoredMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>posts_between</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If set, specifies the minimum number of messages between shown sponsored messages; otherwise, only one sponsored message must be shown after all ordinary messages.</td></tr><tr><td><strong>start_delay</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>For <a href="/api/sponsored-messages/#getting-sponsored-video-advertisements">sponsored messages to show on channel videos »</a>, the number of seconds to wait before showing the first ad.</td></tr><tr><td><strong>between_delay</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>For <a href="/api/sponsored-messages/#getting-sponsored-video-advertisements">sponsored messages to show on channel videos »</a>, the number of seconds to wait after the previous ad is hidden, before showing the next ad.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredMessage/">SponsoredMessage</a>&gt;</td><td>Sponsored messages</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in the sponsored messages</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the sponsored messages</td></tr></tbody></table>

### Type

[messages.SponsoredMessages](/type/messages.SponsoredMessages/)

### Related pages

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
