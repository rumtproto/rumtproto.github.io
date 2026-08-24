---
title: "help.country"
original: "https://core.telegram.org/constructor/help.country"
section: ref
description: "Name, ISO code, localized name and phone codes/patterns of a specific country"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.country","url":"/constructor/help.country/"}]
layout: layout.njk
---

# help.country

Name, ISO code, localized name and phone codes/patterns of a specific country

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.country/" class="current_page_link">help.country</a>#c3878e23 flags:<a href="/type/%23/">#</a> hidden:flags.0?true iso2:<a href="/type/string/">string</a> default_name:<a href="/type/string/">string</a> name:flags.1?<a href="/type/string/">string</a> country_codes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/help.CountryCode/">help.CountryCode</a>&gt; = <a href="/type/help.Country/">help.Country</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this country should not be shown in the list</td></tr><tr><td><strong>iso2</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>ISO code of country</td></tr><tr><td><strong>default_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of the country in the country's language</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Name of the country in the user's language, if different from the original name</td></tr><tr><td><strong>country_codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/help.CountryCode/">help.CountryCode</a>&gt;</td><td>Phone codes/patterns</td></tr></tbody></table>

### Type

[help.Country](/type/help.Country/)
