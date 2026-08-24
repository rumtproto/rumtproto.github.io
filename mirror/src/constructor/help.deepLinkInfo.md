---
title: "help.deepLinkInfo"
original: "https://core.telegram.org/constructor/help.deepLinkInfo"
section: ref
description: "Deep link info, see the here for more details"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.deepLinkInfo","url":"/constructor/help.deepLinkInfo/"}]
layout: layout.njk
---

# help.deepLinkInfo

Deep link info, see [the here for more details](/api/links/#unsupported-links)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.deepLinkInfo/" class="current_page_link">help.deepLinkInfo</a>#6a4ee832 flags:<a href="/type/%23/">#</a> update_app:flags.0?true message:<a href="/type/string/">string</a> entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/help.DeepLinkInfo/">help.DeepLinkInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>update_app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>An update of the app is required to parse this link</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Message to show to the user</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr></tbody></table>

### Type

[help.DeepLinkInfo](/type/help.DeepLinkInfo/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
