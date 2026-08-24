---
title: "messages.getWebPagePreview"
original: "https://core.telegram.org/method/messages.getWebPagePreview"
section: ref
description: "How to create styled text with message entities"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getWebPagePreview","url":"/method/messages.getWebPagePreview/"}]
layout: layout.njk
---

# messages.getWebPagePreview

Get preview of webpage

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.webPagePreview/">messages.webPagePreview</a>#8c9a88ac media:<a href="/type/MessageMedia/">MessageMedia</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.WebPagePreview/">messages.WebPagePreview</a>;
---functions---
<a href="/method/messages.getWebPagePreview/" class="current_page_link">messages.getWebPagePreview</a>#570d6f6f flags:<a href="/type/%23/">#</a> message:<a href="/type/string/">string</a> entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/messages.WebPagePreview/">messages.WebPagePreview</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Message from which to extract the preview</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr></tbody></table>

### Result

[messages.WebPagePreview](/type/messages.WebPagePreview/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>A specified <a href="/api/entities/#entity-length">entity offset or length</a> is invalid, see <a href="/api/entities/#entity-length">here&nbsp;»</a> for info on how to properly compute the entity offset/length.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>The provided message is empty.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
