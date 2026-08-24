---
title: "bots.PreviewInfo"
original: "https://core.telegram.org/type/bots.PreviewInfo"
section: ref
description: "Contains info about Main Mini App previews, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.PreviewInfo","url":"/type/bots.PreviewInfo/"}]
layout: layout.njk
---

# bots.PreviewInfo

Contains info about [Main Mini App previews, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.previewInfo/">bots.previewInfo</a>#ca71d64 media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotPreviewMedia/">BotPreviewMedia</a>&gt; lang_codes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/bots.PreviewInfo/" class="current_page_link">bots.PreviewInfo</a>;

---functions---

<a href="/method/bots.getPreviewInfo/">bots.getPreviewInfo</a>#423ab3ad bot:<a href="/type/InputUser/">InputUser</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/bots.PreviewInfo/" class="current_page_link">bots.PreviewInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/bots.previewInfo/">bots.previewInfo</a></td><td>Contains info about <a href="/api/bots/webapps/#main-mini-app-previews">Main Mini App previews, see here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.getPreviewInfo/">bots.getPreviewInfo</a></td><td>Bot owners only, fetch <a href="/api/bots/webapps/#main-mini-app-previews">main mini app preview information, see here »</a> for more info.<br><br>Note: technically non-owners may also invoke this method, but it will always behave exactly as <a href="/method/bots.getPreviewMedias/">bots.getPreviewMedias</a>, returning only previews for the current language and an empty <code>lang_codes</code> array, regardless of the passed <code>lang_code</code>, so please only use <a href="/method/bots.getPreviewMedias/">bots.getPreviewMedias</a> if you're not the owner of the <code>bot</code>.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
