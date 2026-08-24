---
title: "ExportedContactToken"
original: "https://core.telegram.org/type/ExportedContactToken"
section: ref
description: "Describes a temporary profile link."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedContactToken","url":"/type/ExportedContactToken/"}]
layout: layout.njk
---

# ExportedContactToken

Describes a [temporary profile link](/api/links/#temporary-profile-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedContactToken/">exportedContactToken</a>#41bf109b url:<a href="/type/string/">string</a> expires:<a href="/type/int/">int</a> = <a href="/type/ExportedContactToken/" class="current_page_link">ExportedContactToken</a>;

---functions---

<a href="/method/contacts.exportContactToken/">contacts.exportContactToken</a>#f8654027 = <a href="/type/ExportedContactToken/" class="current_page_link">ExportedContactToken</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/exportedContactToken/">exportedContactToken</a></td><td>Describes a <a href="/api/links/#temporary-profile-links">temporary profile link</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.exportContactToken/">contacts.exportContactToken</a></td><td>Generates a <a href="/api/links/#temporary-profile-links">temporary profile link</a> for the currently logged-in user.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
