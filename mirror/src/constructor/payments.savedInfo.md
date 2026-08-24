---
title: "payments.savedInfo"
original: "https://core.telegram.org/constructor/payments.savedInfo"
section: ref
description: "Saved server-side order information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.savedInfo","url":"/constructor/payments.savedInfo/"}]
layout: layout.njk
---

# payments.savedInfo

Saved server-side order information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.savedInfo/" class="current_page_link">payments.savedInfo</a>#fb8fe43c flags:<a href="/type/%23/">#</a> has_saved_credentials:flags.1?true saved_info:flags.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a> = <a href="/type/payments.SavedInfo/">payments.SavedInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_saved_credentials</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the user has some saved payment credentials</td></tr><tr><td><strong>saved_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/PaymentRequestedInfo/">PaymentRequestedInfo</a></td><td>Saved server-side order information</td></tr></tbody></table>

### Type

[payments.SavedInfo](/type/payments.SavedInfo/)
