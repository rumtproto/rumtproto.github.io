---
title: "contacts.getSaved"
original: "https://core.telegram.org/method/contacts.getSaved"
section: ref
description: "Get all contacts, requires a takeout session, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getSaved","url":"/method/contacts.getSaved/"}]
layout: layout.njk
---

# contacts.getSaved

Get all contacts, requires a [takeout session, see here » for more info](/api/takeout/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/contacts.getSaved/" class="current_page_link">contacts.getSaved</a>#82f1e39f = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedContact/">SavedContact</a>&gt;;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[Vector](/type/Vector%20t/)&lt;[SavedContact](/type/SavedContact/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TAKEOUT_INVALID</td><td>The specified takeout ID is invalid.</td></tr><tr><td>403</td><td>TAKEOUT_REQUIRED</td><td>A <a href="/api/takeout/">takeout</a> session needs to be initialized first, <a href="/api/takeout/">see here » for more info</a>.</td></tr></tbody></table>

### Related pages

#### [Takeout API](/api/takeout/)

Telegram's API allows users to export all of their information through the takeout API.
