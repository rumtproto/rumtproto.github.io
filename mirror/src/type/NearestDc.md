---
title: "NearestDc"
original: "https://core.telegram.org/type/NearestDc"
section: ref
description: "Object contains info on nearest data center."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"NearestDc","url":"/type/NearestDc/"}]
layout: layout.njk
---

# NearestDc

Object contains info on nearest data center.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/nearestDc/">nearestDc</a>#8e1a1775 country:<a href="/type/string/">string</a> this_dc:<a href="/type/int/">int</a> nearest_dc:<a href="/type/int/">int</a> = <a href="/type/NearestDc/" class="current_page_link">NearestDc</a>;

---functions---

<a href="/method/help.getNearestDc/">help.getNearestDc</a>#1fb33026 = <a href="/type/NearestDc/" class="current_page_link">NearestDc</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/nearestDc/">nearestDc</a></td><td>Nearest data center, according to geo-ip.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getNearestDc/">help.getNearestDc</a></td><td>Returns info on data center nearest to the user.</td></tr></tbody></table>
