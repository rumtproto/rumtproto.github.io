---
title: "botVerification"
original: "https://core.telegram.org/constructor/botVerification"
section: ref
description: "Describes a bot verification icon »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botVerification","url":"/constructor/botVerification/"}]
layout: layout.njk
---

# botVerification

Describes a [bot verification icon »](/api/bots/verification/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botVerification/" class="current_page_link">botVerification</a>#f93cd45c bot_id:<a href="/type/long/">long</a> icon:<a href="/type/long/">long</a> description:<a href="/type/string/">string</a> = <a href="/type/BotVerification/">BotVerification</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the bot that verified this peer</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Verification icon</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Verification description</td></tr></tbody></table>

### Type

[BotVerification](/type/BotVerification/)

### Related pages

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
