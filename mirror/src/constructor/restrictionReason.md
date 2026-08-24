---
title: "restrictionReason"
original: "https://core.telegram.org/constructor/restrictionReason"
section: ref
description: "See here » for the full flow to use for restricted or age-gated content."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"restrictionReason","url":"/constructor/restrictionReason/"}]
layout: layout.njk
---

# restrictionReason

Restriction reason.

See [here »](/api/age-verification/) for the full flow to use for restricted or age-gated content.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/restrictionReason/" class="current_page_link">restrictionReason</a>#d072acb4 platform:<a href="/type/string/">string</a> reason:<a href="/type/string/">string</a> text:<a href="/type/string/">string</a> = <a href="/type/RestrictionReason/">RestrictionReason</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Platform identifier (ios, android, wp, all, etc.), can be concatenated with a dash as separator (<code>android-ios</code>, <code>ios-wp</code>, etc)</td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Restriction reason (<code>porno</code>, <code>terms</code>, etc.). Ignore this restriction reason if it is contained in the <a href="/api/config/#ignore-restriction-reasons">ignore_restriction_reasons »</a> client configuration parameter.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Error message to be shown to the user</td></tr></tbody></table>

### Type

[RestrictionReason](/type/RestrictionReason/)

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Age verification](/api/age-verification/)

Some legislations require age verification to view restricted content: Telegram implements this through the Main Mini App of a special bot.
