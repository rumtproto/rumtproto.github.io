---
title: "help.appUpdate"
original: "https://core.telegram.org/constructor/help.appUpdate"
section: ref
description: "An update is available for the application."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.appUpdate","url":"/constructor/help.appUpdate/"}]
layout: layout.njk
---

# help.appUpdate

An update is available for the application.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.appUpdate/" class="current_page_link">help.appUpdate</a>#ccbbce30 flags:<a href="/type/%23/">#</a> can_not_skip:flags.0?true id:<a href="/type/int/">int</a> version:<a href="/type/string/">string</a> text:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; document:flags.1?<a href="/type/Document/">Document</a> url:flags.2?<a href="/type/string/">string</a> sticker:flags.3?<a href="/type/Document/">Document</a> = <a href="/type/help.AppUpdate/">help.AppUpdate</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_not_skip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Unskippable, the new info must be shown to the user (with a popup or something else)</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Update ID</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>New version name</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Text description of the update</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Document/">Document</a></td><td>Application binary</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Application download URL</td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Document/">Document</a></td><td>Associated sticker</td></tr></tbody></table>

### Type

[help.AppUpdate](/type/help.AppUpdate/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
