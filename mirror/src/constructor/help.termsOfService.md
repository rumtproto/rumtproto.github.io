---
title: "help.termsOfService"
original: "https://core.telegram.org/constructor/help.termsOfService"
section: ref
description: "Info about the latest telegram Terms Of Service"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.termsOfService","url":"/constructor/help.termsOfService/"}]
layout: layout.njk
---

# help.termsOfService

Info about the latest telegram Terms Of Service

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.termsOfService/" class="current_page_link">help.termsOfService</a>#780a0310 flags:<a href="/type/%23/">#</a> popup:flags.0?true id:<a href="/type/DataJSON/">DataJSON</a> text:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; min_age_confirm:flags.1?<a href="/type/int/">int</a> = <a href="/type/help.TermsOfService/">help.TermsOfService</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>popup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether a prompt must be showed to the user, in order to accept the new terms.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>ID of the new terms</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Text of the new terms</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr><tr><td><strong>min_age_confirm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Minimum age required to sign up to telegram, the user must confirm that they is older than the minimum age.</td></tr></tbody></table>

### Type

[help.TermsOfService](/type/help.TermsOfService/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
