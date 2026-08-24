---
title: "chatlists.chatlistInvite"
original: "https://core.telegram.org/constructor/chatlists.chatlistInvite"
section: ref
description: "Info about a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatlists.chatlistInvite","url":"/constructor/chatlists.chatlistInvite/"}]
layout: layout.njk
---

# chatlists.chatlistInvite

Info about a [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.chatlistInvite/" class="current_page_link">chatlists.chatlistInvite</a>#f10ece2f flags:<a href="/type/%23/">#</a> title_noanimate:flags.1?true title:<a href="/type/TextWithEntities/">TextWithEntities</a> emoticon:flags.0?<a href="/type/string/">string</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/chatlists.ChatlistInvite/">chatlists.ChatlistInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title_noanimate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, any animated emojis present in <code>title</code> should not be animated and should be instead frozen on the first frame.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Name of the link</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Emoji to use as icon for the folder.</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>Supergroups and channels to join</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Related chat information</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Related user information</td></tr></tbody></table>

### Type

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
