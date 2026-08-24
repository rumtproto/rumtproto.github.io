---
title: "timezone"
original: "https://core.telegram.org/constructor/timezone"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"timezone","url":"/constructor/timezone/"}]
layout: layout.njk
---

# timezone

Timezone information.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/timezone/" class="current_page_link">timezone</a>#ff9289f5 id:<a href="/type/string/">string</a> name:<a href="/type/string/">string</a> utc_offset:<a href="/type/int/">int</a> = <a href="/type/Timezone/">Timezone</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Unique timezone ID.</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Human-readable and localized timezone name.</td></tr><tr><td><strong>utc_offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>UTC offset in seconds, which may be displayed in hh:mm format by the client together with the human-readable name (i.e. <code>$name UTC -01:00</code>).</td></tr></tbody></table>

### Type

[Timezone](/type/Timezone/)
