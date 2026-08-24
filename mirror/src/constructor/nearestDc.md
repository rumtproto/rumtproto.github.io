---
title: "nearestDc"
original: "https://core.telegram.org/constructor/nearestDc"
section: ref
description: "Nearest data center, according to geo-ip."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"nearestDc","url":"/constructor/nearestDc/"}]
layout: layout.njk
---

# nearestDc

Nearest data center, according to geo-ip.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/nearestDc/" class="current_page_link">nearestDc</a>#8e1a1775 country:<a href="/type/string/">string</a> this_dc:<a href="/type/int/">int</a> nearest_dc:<a href="/type/int/">int</a> = <a href="/type/NearestDc/">NearestDc</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>country</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Country code determined by geo-ip</td></tr><tr><td><strong>this_dc</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of current data center</td></tr><tr><td><strong>nearest_dc</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of nearest data center</td></tr></tbody></table>

### Type

[NearestDc](/type/NearestDc/)
