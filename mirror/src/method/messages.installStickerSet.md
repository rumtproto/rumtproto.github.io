---
title: "messages.installStickerSet"
original: "https://core.telegram.org/method/messages.installStickerSet"
section: ref
description: "messages.StickerSetInstallResult"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.installStickerSet","url":"/method/messages.installStickerSet/"}]
layout: layout.njk
---

# messages.installStickerSet

Install a stickerset

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSetInstallResultSuccess/">messages.stickerSetInstallResultSuccess</a>#38641628 = <a href="/type/messages.StickerSetInstallResult/">messages.StickerSetInstallResult</a>;
<a href="/constructor/messages.stickerSetInstallResultArchive/">messages.stickerSetInstallResultArchive</a>#35e410a8 sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; = <a href="/type/messages.StickerSetInstallResult/">messages.StickerSetInstallResult</a>;
---functions---
<a href="/method/messages.installStickerSet/" class="current_page_link">messages.installStickerSet</a>#c78fe460 stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> archived:<a href="/type/Bool/">Bool</a> = <a href="/type/messages.StickerSetInstallResult/">messages.StickerSetInstallResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>Stickerset to install</td></tr><tr><td><strong>archived</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to archive stickerset</td></tr></tbody></table>

### Result

[messages.StickerSetInstallResult](/type/messages.StickerSetInstallResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>STICKERSET_INVALID</td><td>The provided sticker set is invalid.</td></tr></tbody></table>
