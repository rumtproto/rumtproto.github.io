---
title: "messages.viewSponsoredMessage"
original: "https://core.telegram.org/method/messages.viewSponsoredMessage"
section: ref
description: "Mark a specific sponsored message » as read"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.viewSponsoredMessage","url":"/method/messages.viewSponsoredMessage/"}]
layout: layout.njk
---

# messages.viewSponsoredMessage

Mark a specific [sponsored message »](/api/sponsored-messages/) as read

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.viewSponsoredMessage/" class="current_page_link">messages.viewSponsoredMessage</a>#269e3643 random_id:<a href="/type/bytes/">bytes</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>The ad's unique ID. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
