---
title: "theme"
original: "https://core.telegram.org/constructor/theme"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"theme","url":"/constructor/theme/"}]
layout: layout.njk
---

# theme

Theme

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/theme/" class="current_page_link">theme</a>#a00e67d6 flags:<a href="/type/%23/">#</a> creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> slug:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> document:flags.2?<a href="/type/Document/">Document</a> settings:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ThemeSettings/">ThemeSettings</a>&gt; emoticon:flags.6?<a href="/type/string/">string</a> installs_count:flags.4?<a href="/type/int/">int</a> = <a href="/type/Theme/">Theme</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the current user is the creator of this theme</td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this is the default theme</td></tr><tr><td><strong>for_chat</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this theme is meant to be used as a <a href="https://telegram.org/blog/chat-themes-interactive-emoji-read-receipts">chat theme</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Theme ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Theme access hash</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Unique theme ID</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Theme name</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Document/">Document</a></td><td>Theme</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ThemeSettings/">ThemeSettings</a>&gt;</td><td>Theme settings</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/string/">string</a></td><td>Theme emoji</td></tr><tr><td><strong>installs_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Installation count</td></tr></tbody></table>

### Type

[Theme](/type/Theme/)
