---
title: "bots.PopularAppBots"
original: "https://core.telegram.org/type/bots.PopularAppBots"
section: ref
description: "Popular Main Mini Apps, to be used in the apps tab of global search »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.PopularAppBots","url":"/type/bots.PopularAppBots/"}]
layout: layout.njk
---

# bots.PopularAppBots

Popular [Main Mini Apps](/api/bots/webapps/#main-mini-apps), to be used in the [apps tab of global search »](/api/search/#apps-tab).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.popularAppBots/">bots.popularAppBots</a>#1991b13b flags:<a href="/type/%23/">#</a> next_offset:flags.0?<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/bots.PopularAppBots/" class="current_page_link">bots.PopularAppBots</a>;

---functions---

<a href="/method/bots.getPopularAppBots/">bots.getPopularAppBots</a>#c2510192 offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/bots.PopularAppBots/" class="current_page_link">bots.PopularAppBots</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/bots.popularAppBots/">bots.popularAppBots</a></td><td>Popular <a href="/api/bots/webapps/#main-mini-apps">Main Mini Apps</a>, to be used in the <a href="/api/search/#apps-tab">apps tab of global search »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.getPopularAppBots/">bots.getPopularAppBots</a></td><td>Fetch popular <a href="/api/bots/webapps/#main-mini-apps">Main Mini Apps</a>, to be used in the <a href="/api/search/#apps-tab">apps tab of global search »</a>.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.
