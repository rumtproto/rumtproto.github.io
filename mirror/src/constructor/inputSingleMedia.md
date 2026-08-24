---
title: "inputSingleMedia"
original: "https://core.telegram.org/constructor/inputSingleMedia"
section: ref
description: "A single media in an album or grouped media sent with messages.sendMultiMedia."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputSingleMedia","url":"/constructor/inputSingleMedia/"}]
layout: layout.njk
---

# inputSingleMedia

A single media in an [album or grouped media](/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputSingleMedia/" class="current_page_link">inputSingleMedia</a>#1cc6e91f flags:<a href="/type/%23/">#</a> media:<a href="/type/InputMedia/">InputMedia</a> random_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/InputSingleMedia/">InputSingleMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia/">InputMedia</a></td><td>The media</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique client media ID required to prevent message resending. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>A caption for the media</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td>Message <a href="/api/entities/">entities</a> for styled text</td></tr></tbody></table>

### Type

[InputSingleMedia](/type/InputSingleMedia/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Send an [album or grouped media](/api/files/#albums-grouped-media)
