---
title: "bots.popularAppBots"
original: "https://core.telegram.org/constructor/bots.popularAppBots"
section: ref
description: "Popular Main Mini Apps, to be used in the apps tab of global search »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.popularAppBots","url":"/constructor/bots.popularAppBots/"}]
layout: layout.njk
---

# bots.popularAppBots

Popular [Main Mini Apps](/api/bots/webapps/#main-mini-apps), to be used in the [apps tab of global search »](/api/search/#apps-tab).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.popularAppBots/" class="current_page_link">bots.popularAppBots</a>#1991b13b flags:<a href="/type/%23/">#</a> next_offset:flags.0?<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/bots.PopularAppBots/">bots.PopularAppBots</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset for <a href="/api/offsets/">pagination</a>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>The bots associated to each <a href="/api/bots/webapps/#main-mini-apps">Main Mini App, see here »</a> for more info.</td></tr></tbody></table>

### Type

[bots.PopularAppBots](/type/bots.PopularAppBots/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.
