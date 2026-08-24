---
title: "bots.exportedBotToken"
original: "https://core.telegram.org/constructor/bots.exportedBotToken"
section: ref
description: "The bot token of a managed bot », exported by the manager bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.exportedBotToken","url":"/constructor/bots.exportedBotToken/"}]
layout: layout.njk
---

# bots.exportedBotToken

The bot token of a [managed bot »](/api/bots/managed-bots/#managing-a-managed-bot), exported by the manager bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/bots.exportedBotToken?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The bot token of the managed bot</td></tr></tbody></table>

### Type

[bots.ExportedBotToken](/type/bots.ExportedBotToken/)

### Related pages

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).
