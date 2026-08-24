---
title: "account.contentSettings"
original: "https://core.telegram.org/constructor/account.contentSettings"
section: ref
description: "Sensitive content settings"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.contentSettings","url":"/constructor/account.contentSettings/"}]
layout: layout.njk
---

# account.contentSettings

Sensitive content settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.contentSettings/" class="current_page_link">account.contentSettings</a>#57e28221 flags:<a href="/type/%23/">#</a> sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = <a href="/type/account.ContentSettings/">account.ContentSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>sensitive_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether viewing of sensitive (NSFW) content is enabled</td></tr><tr><td><strong>sensitive_can_change</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the current client can change the sensitive content settings to view NSFW content</td></tr></tbody></table>

### Type

[account.ContentSettings](/type/account.ContentSettings/)
