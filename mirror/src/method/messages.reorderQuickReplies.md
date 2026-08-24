---
title: "messages.reorderQuickReplies"
original: "https://core.telegram.org/method/messages.reorderQuickReplies"
section: ref
description: "Reorder quick reply shortcuts."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reorderQuickReplies","url":"/method/messages.reorderQuickReplies/"}]
layout: layout.njk
---

# messages.reorderQuickReplies

Reorder [quick reply shortcuts](/api/business/#quick-reply-shortcuts).

This will emit an [updateQuickReplies](/constructor/updateQuickReplies/) update to other logged-in sessions.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.reorderQuickReplies/" class="current_page_link">messages.reorderQuickReplies</a>#60331907 order:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of all created <a href="/api/business/#quick-reply-shortcuts">quick reply shortcuts</a>, in the desired order.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateQuickReplies](/constructor/updateQuickReplies/)

Info about or the order of [quick reply shortcuts »](/api/business/#quick-reply-shortcuts) was changed.
