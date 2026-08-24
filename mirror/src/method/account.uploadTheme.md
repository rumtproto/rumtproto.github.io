---
title: "account.uploadTheme"
original: "https://core.telegram.org/method/account.uploadTheme"
section: ref
description: "Telegram apps support generating, sharing and synchronizing app themes."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.uploadTheme","url":"/method/account.uploadTheme/"}]
layout: layout.njk
---

# account.uploadTheme

Upload theme

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentEmpty/">documentEmpty</a>#36f8c871 id:<a href="/type/long/">long</a> = <a href="/type/Document/">Document</a>;
<a href="/constructor/document/">document</a>#8fd4c4d8 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/long/">long</a> thumbs:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; video_thumbs:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt; dc_id:<a href="/type/int/">int</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/Document/">Document</a>;
---functions---
<a href="/method/account.uploadTheme/" class="current_page_link">account.uploadTheme</a>#1c3db333 flags:<a href="/type/%23/">#</a> file:<a href="/type/InputFile/">InputFile</a> thumb:flags.0?<a href="/type/InputFile/">InputFile</a> file_name:<a href="/type/string/">string</a> mime_type:<a href="/type/string/">string</a> = <a href="/type/Document/">Document</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile/">InputFile</a></td><td><a href="/api/themes/#uploading-theme-files">Previously uploaded</a> theme file with platform-specific colors for UI components, can be left unset when creating themes that only modify the wallpaper or accent colors.</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputFile/">InputFile</a></td><td>Thumbnail</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>File name</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>MIME type, must be <code>application/x-tgtheme-{format}</code>, where <code>format</code> depends on the client</td></tr></tbody></table>

### Result

[Document](/type/Document/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>THEME_FILE_INVALID</td><td>Invalid theme file provided.</td></tr><tr><td>400</td><td>THEME_MIME_INVALID</td><td>The theme's MIME type is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.
