---
title: "updateBotChatBoost"
original: "https://core.telegram.org/constructor/updateBotChatBoost"
section: ref
description: "A channel/supergroup boost has changed (bots only)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotChatBoost","url":"/constructor/updateBotChatBoost/"}]
layout: layout.njk
---

# updateBotChatBoost

A [channel/supergroup boost](/api/boost/) has changed (bots only)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotChatBoost/" class="current_page_link">updateBotChatBoost</a>#904dd49c peer:<a href="/type/Peer/">Peer</a> boost:<a href="/type/Boost/">Boost</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Channel</td></tr><tr><td><strong>boost</strong></td><td style="text-align: center;"><a href="/type/Boost/">Boost</a></td><td>New boost information</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">QTS</a> event sequence identifier</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
