---
title: "inputStickerSetShortName"
original: "https://core.telegram.org/constructor/inputStickerSetShortName"
section: ref
description: "Stickerset by short name, from a stickerset deep link »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStickerSetShortName","url":"/constructor/inputStickerSetShortName/"}]
layout: layout.njk
---

# inputStickerSetShortName

Stickerset by short name, from a [stickerset deep link »](/api/links/#stickerset-links)

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStickerSetShortName/" class="current_page_link">inputStickerSetShortName</a>#861cc8a0 short_name:<a href="/type/string/">string</a> = <a href="/type/InputStickerSet/">InputStickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name from a <a href="/api/links/#stickerset-links">stickerset deep link »</a></td></tr></tbody></table>

### Type

[InputStickerSet](/type/InputStickerSet/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
