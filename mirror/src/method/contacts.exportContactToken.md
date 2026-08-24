---
title: "contacts.exportContactToken"
original: "https://core.telegram.org/method/contacts.exportContactToken"
section: ref
description: "Generates a temporary profile link for the currently logged-in user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.exportContactToken","url":"/method/contacts.exportContactToken/"}]
layout: layout.njk
---

# contacts.exportContactToken

Generates a [temporary profile link](/api/links/#temporary-profile-links) for the currently logged-in user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedContactToken/">exportedContactToken</a>#41bf109b url:<a href="/type/string/">string</a> expires:<a href="/type/int/">int</a> = <a href="/type/ExportedContactToken/">ExportedContactToken</a>;
---functions---
<a href="/method/contacts.exportContactToken/" class="current_page_link">contacts.exportContactToken</a>#f8654027 = <a href="/type/ExportedContactToken/">ExportedContactToken</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[ExportedContactToken](/type/ExportedContactToken/)

### Only users can use this method

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
