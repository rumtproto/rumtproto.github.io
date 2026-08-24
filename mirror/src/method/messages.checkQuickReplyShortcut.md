---
title: "messages.checkQuickReplyShortcut"
original: "https://core.telegram.org/method/messages.checkQuickReplyShortcut"
section: ref
description: "Before offering the user the choice to add a message to a quick reply shortcut, to make sure that none of the limits specified here » were reached."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.checkQuickReplyShortcut","url":"/method/messages.checkQuickReplyShortcut/"}]
layout: layout.njk
---

# messages.checkQuickReplyShortcut

Before offering the user the choice to add a message to a [quick reply shortcut](/api/business/#quick-reply-shortcuts), to make sure that none of the limits specified [here »](/api/business/#quick-reply-shortcuts) were reached.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.checkQuickReplyShortcut/" class="current_page_link">messages.checkQuickReplyShortcut</a>#f1d0fbd3 shortcut:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shortcut</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Shorcut name (not ID!).</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
