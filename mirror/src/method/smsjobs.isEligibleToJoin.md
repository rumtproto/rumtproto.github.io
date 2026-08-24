---
title: "smsjobs.isEligibleToJoin"
original: "https://core.telegram.org/method/smsjobs.isEligibleToJoin"
section: ref
description: "Check if we can process SMS jobs (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.isEligibleToJoin","url":"/method/smsjobs.isEligibleToJoin/"}]
layout: layout.njk
---

# smsjobs.isEligibleToJoin

Check if we can process SMS jobs (official clients only).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/smsjobs.eligibleToJoin/">smsjobs.eligibleToJoin</a>#dc8b44cf terms_url:<a href="/type/string/">string</a> monthly_sent_sms:<a href="/type/int/">int</a> = <a href="/type/smsjobs.EligibilityToJoin/">smsjobs.EligibilityToJoin</a>;
---functions---
<a href="/method/smsjobs.isEligibleToJoin/" class="current_page_link">smsjobs.isEligibleToJoin</a>#edc39d0 = <a href="/type/smsjobs.EligibilityToJoin/">smsjobs.EligibilityToJoin</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[smsjobs.EligibilityToJoin](/type/smsjobs.EligibilityToJoin/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>NOT_ELIGIBLE</td><td>The current user is not eligible to join the Peer-to-Peer Login Program.</td></tr></tbody></table>
