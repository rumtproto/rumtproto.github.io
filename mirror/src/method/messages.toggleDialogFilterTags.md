---
title: "messages.toggleDialogFilterTags"
original: "https://core.telegram.org/method/messages.toggleDialogFilterTags"
section: ref
description: "Enable or disable folder tags »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.toggleDialogFilterTags","url":"/method/messages.toggleDialogFilterTags/"}]
layout: layout.njk
---

# messages.toggleDialogFilterTags

Enable or disable [folder tags »](/api/folders/#folder-tags).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.toggleDialogFilterTags/" class="current_page_link">messages.toggleDialogFilterTags</a>#fd2dda49 enabled:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Enable or disable folder tags.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
