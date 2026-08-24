---
title: "account.updateBusinessAwayMessage"
original: "https://core.telegram.org/method/account.updateBusinessAwayMessage"
section: ref
description: "Set a list of Telegram Business away messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateBusinessAwayMessage","url":"/method/account.updateBusinessAwayMessage/"}]
layout: layout.njk
---

# account.updateBusinessAwayMessage

Set a list of [Telegram Business away messages](/api/business/#away-messages).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.updateBusinessAwayMessage/" class="current_page_link">account.updateBusinessAwayMessage</a>#a26a7fa5 flags:<a href="/type/%23/">#</a> message:flags.0?<a href="/type/InputBusinessAwayMessage/">InputBusinessAwayMessage</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputBusinessAwayMessage/">InputBusinessAwayMessage</a></td><td>Away message configuration and contents.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
