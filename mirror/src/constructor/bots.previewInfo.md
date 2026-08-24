---
title: "bots.previewInfo"
original: "https://core.telegram.org/constructor/bots.previewInfo"
section: ref
description: "Contains info about Main Mini App previews, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.previewInfo","url":"/constructor/bots.previewInfo/"}]
layout: layout.njk
---

# bots.previewInfo

Contains info about [Main Mini App previews, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.previewInfo/" class="current_page_link">bots.previewInfo</a>#ca71d64 media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotPreviewMedia/">BotPreviewMedia</a>&gt; lang_codes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/bots.PreviewInfo/">bots.PreviewInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotPreviewMedia/">BotPreviewMedia</a>&gt;</td><td>All preview medias for the language code passed to <a href="/method/bots.getPreviewInfo/">bots.getPreviewInfo</a>.</td></tr><tr><td><strong>lang_codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>All available language codes for which preview medias were uploaded (regardless of the language code passed to <a href="/method/bots.getPreviewInfo/">bots.getPreviewInfo</a>).</td></tr></tbody></table>

### Type

[bots.PreviewInfo](/type/bots.PreviewInfo/)

### Related pages

#### [bots.getPreviewInfo](/method/bots.getPreviewInfo/)

Bot owners only, fetch [main mini app preview information, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

Note: technically non-owners may also invoke this method, but it will always behave exactly as [bots.getPreviewMedias](/method/bots.getPreviewMedias/), returning only previews for the current language and an empty `lang_codes` array, regardless of the passed `lang_code`, so please only use [bots.getPreviewMedias](/method/bots.getPreviewMedias/) if you're not the owner of the `bot`.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
