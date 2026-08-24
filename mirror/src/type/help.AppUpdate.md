---
title: "help.AppUpdate"
original: "https://core.telegram.org/type/help.AppUpdate"
section: ref
description: "Contains info on app update availability."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.AppUpdate","url":"/type/help.AppUpdate/"}]
layout: layout.njk
---

# help.AppUpdate

Contains info on app update availability.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.appUpdate/">help.appUpdate</a>#ccbbce30 flags:<a href="/type/%23/">#</a> can_not_skip:flags.0?true id:<a href="/type/int/">int</a> version:<a href="/type/string/">string</a> text:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; document:flags.1?<a href="/type/Document/">Document</a> url:flags.2?<a href="/type/string/">string</a> sticker:flags.3?<a href="/type/Document/">Document</a> = <a href="/type/help.AppUpdate/" class="current_page_link">help.AppUpdate</a>;
<a href="/constructor/help.noAppUpdate/">help.noAppUpdate</a>#c45a6536 = <a href="/type/help.AppUpdate/" class="current_page_link">help.AppUpdate</a>;

---functions---

<a href="/method/help.getAppUpdate/">help.getAppUpdate</a>#522d5a7d source:<a href="/type/string/">string</a> = <a href="/type/help.AppUpdate/" class="current_page_link">help.AppUpdate</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.appUpdate/">help.appUpdate</a></td><td>An update is available for the application.</td></tr><tr><td><a href="/constructor/help.noAppUpdate/">help.noAppUpdate</a></td><td>No updates are available for the application.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getAppUpdate/">help.getAppUpdate</a></td><td>Returns information on update availability for the current application.</td></tr></tbody></table>
