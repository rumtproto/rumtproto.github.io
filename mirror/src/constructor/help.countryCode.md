---
title: "help.countryCode"
original: "https://core.telegram.org/constructor/help.countryCode"
section: ref
description: "Country code and phone number pattern of a specific country"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.countryCode","url":"/constructor/help.countryCode/"}]
layout: layout.njk
---

# help.countryCode

Country code and phone number pattern of a specific country

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.countryCode/" class="current_page_link">help.countryCode</a>#4203c5ef flags:<a href="/type/%23/">#</a> country_code:<a href="/type/string/">string</a> prefixes:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; patterns:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/help.CountryCode/">help.CountryCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>country_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>ISO country code</td></tr><tr><td><strong>prefixes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>Possible phone prefixes</td></tr><tr><td><strong>patterns</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>Phone patterns: for example, <code>XXX XXX XXX</code></td></tr></tbody></table>

### Type

[help.CountryCode](/type/help.CountryCode/)
