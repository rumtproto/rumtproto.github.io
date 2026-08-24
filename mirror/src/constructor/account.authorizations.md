---
title: "account.authorizations"
original: "https://core.telegram.org/constructor/account.authorizations"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.authorizations","url":"/constructor/account.authorizations/"}]
layout: layout.njk
---

# account.authorizations

Logged-in sessions

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.authorizations/" class="current_page_link">account.authorizations</a>#4bff8ea0 authorization_ttl_days:<a href="/type/int/">int</a> authorizations:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Authorization/">Authorization</a>&gt; = <a href="/type/account.Authorizations/">account.Authorizations</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>authorization_ttl_days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Time-to-live of session</td></tr><tr><td><strong>authorizations</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Authorization/">Authorization</a>&gt;</td><td>Logged-in sessions</td></tr></tbody></table>

### Type

[account.Authorizations](/type/account.Authorizations/)
