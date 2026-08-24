---
title: "account.installTheme"
original: "https://core.telegram.org/method/account.installTheme"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.installTheme","url":"/method/account.installTheme/"}]
layout: layout.njk
---

# account.installTheme

Install a theme

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.installTheme/" class="current_page_link">account.installTheme</a>#c727bb3b flags:<a href="/type/%23/">#</a> dark:flags.0?true theme:flags.1?<a href="/type/InputTheme/">InputTheme</a> format:flags.2?<a href="/type/string/">string</a> base_theme:flags.3?<a href="/type/BaseTheme/">BaseTheme</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to install the dark version</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputTheme/">InputTheme</a></td><td>Theme to install</td></tr><tr><td><strong>format</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Theme format, a string that identifies the theming engines supported by the client</td></tr><tr><td><strong>base_theme</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/BaseTheme/">BaseTheme</a></td><td>Indicates a basic theme provided by all clients</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method
