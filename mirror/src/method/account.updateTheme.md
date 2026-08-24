---
title: "account.updateTheme"
original: "https://core.telegram.org/method/account.updateTheme"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateTheme","url":"/method/account.updateTheme/"}]
layout: layout.njk
---

# account.updateTheme

Update theme

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/theme/">theme</a>#a00e67d6 flags:<a href="/type/%23/">#</a> creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> slug:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> document:flags.2?<a href="/type/Document/">Document</a> settings:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ThemeSettings/">ThemeSettings</a>&gt; emoticon:flags.6?<a href="/type/string/">string</a> installs_count:flags.4?<a href="/type/int/">int</a> = <a href="/type/Theme/">Theme</a>;
---functions---
<a href="/method/account.updateTheme/" class="current_page_link">account.updateTheme</a>#2bf40ccc flags:<a href="/type/%23/">#</a> format:<a href="/type/string/">string</a> theme:<a href="/type/InputTheme/">InputTheme</a> slug:flags.0?<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> document:flags.2?<a href="/type/InputDocument/">InputDocument</a> settings:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputThemeSettings/">InputThemeSettings</a>&gt; = <a href="/type/Theme/">Theme</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>format</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Theme format, a string that identifies the theming engines supported by the client</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/type/InputTheme/">InputTheme</a></td><td>Theme to update</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Unique theme ID</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Theme name</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputDocument/">InputDocument</a></td><td>Theme file</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputThemeSettings/">InputThemeSettings</a>&gt;</td><td>Theme settings</td></tr></tbody></table>

### Result

[Theme](/type/Theme/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>THEME_INVALID</td><td>Invalid theme provided.</td></tr></tbody></table>
