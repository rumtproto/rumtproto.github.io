---
title: "bots.deletePreviewMedia"
original: "https://core.telegram.org/method/bots.deletePreviewMedia"
section: ref
description: "Delete a main mini app preview, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.deletePreviewMedia","url":"/method/bots.deletePreviewMedia/"}]
layout: layout.njk
---

# bots.deletePreviewMedia

Delete a [main mini app preview, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

Only owners of bots with a configured Main Mini App can use this method, see [see here »](/api/bots/webapps/#main-mini-app-previews) for more info on how to check if you can invoke this method.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.deletePreviewMedia/" class="current_page_link">bots.deletePreviewMedia</a>#2d0135b3 bot:<a href="/type/InputUser/">InputUser</a> lang_code:<a href="/type/string/">string</a> media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputMedia/">InputMedia</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot that owns the Main Mini App.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>ISO 639-1 language code, indicating the localization of the preview to delete.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputMedia/">InputMedia</a>&gt;</td><td>The photo/video preview to delete, previously fetched as specified <a href="/api/bots/webapps/#main-mini-app-previews">here »</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
