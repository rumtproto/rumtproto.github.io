---
title: "Messages.StickerSetInstallResult"
original: "https://core.telegram.org/type/messages.StickerSetInstallResult"
section: ref
description: "Result of stickerset installation process"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.StickerSetInstallResult","url":"/type/messages.StickerSetInstallResult/"}]
layout: layout.njk
---

# Messages.StickerSetInstallResult

Result of stickerset installation process

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSetInstallResultSuccess/">messages.stickerSetInstallResultSuccess</a>#38641628 = <a href="/type/messages.StickerSetInstallResult/" class="current_page_link">messages.StickerSetInstallResult</a>;
<a href="/constructor/messages.stickerSetInstallResultArchive/">messages.stickerSetInstallResultArchive</a>#35e410a8 sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; = <a href="/type/messages.StickerSetInstallResult/" class="current_page_link">messages.StickerSetInstallResult</a>;

---functions---

<a href="/method/messages.installStickerSet/">messages.installStickerSet</a>#c78fe460 stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> archived:<a href="/type/Bool/">Bool</a> = <a href="/type/messages.StickerSetInstallResult/" class="current_page_link">messages.StickerSetInstallResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickerSetInstallResultSuccess/">messages.stickerSetInstallResultSuccess</a></td><td>The stickerset was installed successfully</td></tr><tr><td><a href="/constructor/messages.stickerSetInstallResultArchive/">messages.stickerSetInstallResultArchive</a></td><td>The stickerset was installed, but since there are too many stickersets some were archived</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.installStickerSet/">messages.installStickerSet</a></td><td>Install a stickerset</td></tr></tbody></table>
