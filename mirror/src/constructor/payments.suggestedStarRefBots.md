---
title: "payments.suggestedStarRefBots"
original: "https://core.telegram.org/constructor/payments.suggestedStarRefBots"
section: ref
description: "A list of suggested mini apps with available affiliate programs"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.suggestedStarRefBots","url":"/constructor/payments.suggestedStarRefBots/"}]
layout: layout.njk
---

# payments.suggestedStarRefBots

A list of suggested [mini apps](/api/bots/webapps/) with available [affiliate programs](/api/bots/referrals/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.suggestedStarRefBots/" class="current_page_link">payments.suggestedStarRefBots</a>#b4d5d859 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> suggested_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarRefProgram/">StarRefProgram</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/payments.SuggestedStarRefBots/">payments.SuggestedStarRefBots</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results (for pagination)</td></tr><tr><td><strong>suggested_bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarRefProgram/">StarRefProgram</a>&gt;</td><td>Suggested affiliate programs (full or partial list to be fetched using pagination)</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Peers mentioned in <code>suggested_bots</code></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Next offset for <a href="/api/offsets/">pagination</a></td></tr></tbody></table>

### Type

[payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
