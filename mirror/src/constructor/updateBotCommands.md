---
title: "updateBotCommands"
original: "https://core.telegram.org/constructor/updateBotCommands"
section: ref
description: "The command set of a certain bot in a certain chat has changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotCommands","url":"/constructor/updateBotCommands/"}]
layout: layout.njk
---

# updateBotCommands

The [command set](/api/bots/commands/) of a certain bot in a certain chat has changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotCommands/" class="current_page_link">updateBotCommands</a>#4d712f2e peer:<a href="/type/Peer/">Peer</a> bot_id:<a href="/type/long/">long</a> commands:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotCommand/">BotCommand</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The affected chat</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the bot that changed its command set</td></tr><tr><td><strong>commands</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotCommand/">BotCommand</a>&gt;</td><td>New bot commands</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Bot commands](/api/bots/commands/)

Bots offer a set of commands that can be used by users in private, or in a chat.
