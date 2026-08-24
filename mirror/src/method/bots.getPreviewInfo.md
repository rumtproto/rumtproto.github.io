---
title: "bots.getPreviewInfo"
original: "https://core.telegram.org/method/bots.getPreviewInfo"
section: ref
description: "Bot owners only, fetch main mini app preview information, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getPreviewInfo","url":"/method/bots.getPreviewInfo/"}]
layout: layout.njk
---

# bots.getPreviewInfo

Bot owners only, fetch [main mini app preview information, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

Note: technically non-owners may also invoke this method, but it will always behave exactly as [bots.getPreviewMedias](/method/bots.getPreviewMedias/), returning only previews for the current language and an empty `lang_codes` array, regardless of the passed `lang_code`, so please only use [bots.getPreviewMedias](/method/bots.getPreviewMedias/) if you're not the owner of the `bot`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.previewInfo/">bots.previewInfo</a>#ca71d64 media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotPreviewMedia/">BotPreviewMedia</a>&gt; lang_codes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/bots.PreviewInfo/">bots.PreviewInfo</a>;
---functions---
<a href="/method/bots.getPreviewInfo/" class="current_page_link">bots.getPreviewInfo</a>#423ab3ad bot:<a href="/type/InputUser/">InputUser</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/bots.PreviewInfo/">bots.PreviewInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot that owns the Main Mini App.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Fetch previews for the specified ISO 639-1 language code.</td></tr></tbody></table>

### Result

[bots.PreviewInfo](/type/bots.PreviewInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [bots.getPreviewMedias](/method/bots.getPreviewMedias/)

Fetch [main mini app previews, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.
