---
title: "smsjobs.getSmsJob"
original: "https://core.telegram.org/method/smsjobs.getSmsJob"
section: ref
description: "Get info about an SMS job (official clients only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"smsjobs.getSmsJob","url":"/method/smsjobs.getSmsJob/"}]
layout: layout.njk
---

# smsjobs.getSmsJob

Get info about an SMS job (official clients only).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/smsJob/">smsJob</a>#e6a1eeb8 job_id:<a href="/type/string/">string</a> phone_number:<a href="/type/string/">string</a> text:<a href="/type/string/">string</a> = <a href="/type/SmsJob/">SmsJob</a>;
---functions---
<a href="/method/smsjobs.getSmsJob/" class="current_page_link">smsjobs.getSmsJob</a>#778d902f job_id:<a href="/type/string/">string</a> = <a href="/type/SmsJob/">SmsJob</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>job_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Job ID</td></tr></tbody></table>

### Result

[SmsJob](/type/SmsJob/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SMSJOB_ID_INVALID</td><td>The specified job ID is invalid.</td></tr></tbody></table>
