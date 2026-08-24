---
title: "contacts.getTopPeers"
original: "https://core.telegram.org/method/contacts.getTopPeers"
section: ref
description: "Bots can offer users interactive HTML5 web apps to completely replace any website."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getTopPeers","url":"/method/contacts.getTopPeers/"}]
layout: layout.njk
---

# contacts.getTopPeers

Get most used peers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.topPeersNotModified/">contacts.topPeersNotModified</a>#de266ef5 = <a href="/type/contacts.TopPeers/">contacts.TopPeers</a>;
<a href="/constructor/contacts.topPeers/">contacts.topPeers</a>#70b772a8 categories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TopPeerCategoryPeers/">TopPeerCategoryPeers</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.TopPeers/">contacts.TopPeers</a>;
<a href="/constructor/contacts.topPeersDisabled/">contacts.topPeersDisabled</a>#b52c939d = <a href="/type/contacts.TopPeers/">contacts.TopPeers</a>;
---functions---
<a href="/method/contacts.getTopPeers/" class="current_page_link">contacts.getTopPeers</a>#973478b6 flags:<a href="/type/%23/">#</a> correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/contacts.TopPeers/">contacts.TopPeers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>correspondents</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Users we've chatted most frequently with</td></tr><tr><td><strong>bots_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Most used bots</td></tr><tr><td><strong>bots_inline</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Most used inline bots</td></tr><tr><td><strong>phone_calls</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Most frequently called users</td></tr><tr><td><strong>forward_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Users to which the users often forwards messages to</td></tr><tr><td><strong>forward_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Chats to which the users often forwards messages to</td></tr><tr><td><strong>groups</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>Often-opened groups and supergroups</td></tr><tr><td><strong>channels</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/constructor/true/">true</a></td><td>Most frequently visited channels</td></tr><tr><td><strong>bots_app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>Most frequently used <a href="/api/bots/webapps/#main-mini-apps">Main Mini Bot Apps</a>.</td></tr><tr><td><strong>bots_guestchat</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/constructor/true/">true</a></td><td>Most frequently used <a href="/api/bots/guest-mode/">guest bots »</a></td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset for <a href="/api/offsets/">pagination</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[contacts.TopPeers](/type/contacts.TopPeers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TYPES_EMPTY</td><td>No top peer type was provided.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Guest mode for bots](/api/bots/guest-mode/)

Guest bots can be queried by username from **any** non-secret private chat, group and supergroup (except for groups/supergroups with [content protection »](/api/content-protection/#for-groups-and-channels) enabled), posting their results directly into the chat, even if they're not a member.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
