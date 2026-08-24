---
title: "Theme"
original: "https://core.telegram.org/type/Theme"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Theme","url":"/type/Theme/"}]
layout: layout.njk
---

# Theme

Cloud theme

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/theme/">theme</a>#a00e67d6 flags:<a href="/type/%23/">#</a> creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> slug:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> document:flags.2?<a href="/type/Document/">Document</a> settings:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ThemeSettings/">ThemeSettings</a>&gt; emoticon:flags.6?<a href="/type/string/">string</a> installs_count:flags.4?<a href="/type/int/">int</a> = <a href="/type/Theme/" class="current_page_link">Theme</a>;

---functions---

<a href="/method/account.createTheme/">account.createTheme</a>#652e4400 flags:<a href="/type/%23/">#</a> slug:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> document:flags.2?<a href="/type/InputDocument/">InputDocument</a> settings:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputThemeSettings/">InputThemeSettings</a>&gt; = <a href="/type/Theme/" class="current_page_link">Theme</a>;
<a href="/method/account.updateTheme/">account.updateTheme</a>#2bf40ccc flags:<a href="/type/%23/">#</a> format:<a href="/type/string/">string</a> theme:<a href="/type/InputTheme/">InputTheme</a> slug:flags.0?<a href="/type/string/">string</a> title:flags.1?<a href="/type/string/">string</a> document:flags.2?<a href="/type/InputDocument/">InputDocument</a> settings:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputThemeSettings/">InputThemeSettings</a>&gt; = <a href="/type/Theme/" class="current_page_link">Theme</a>;
<a href="/method/account.getTheme/">account.getTheme</a>#3a5869ec format:<a href="/type/string/">string</a> theme:<a href="/type/InputTheme/">InputTheme</a> = <a href="/type/Theme/" class="current_page_link">Theme</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/theme/">theme</a></td><td>Theme</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.createTheme/">account.createTheme</a></td><td>Create a theme</td></tr><tr><td><a href="/method/account.updateTheme/">account.updateTheme</a></td><td>Update theme</td></tr><tr><td><a href="/method/account.getTheme/">account.getTheme</a></td><td>Get theme information</td></tr></tbody></table>
