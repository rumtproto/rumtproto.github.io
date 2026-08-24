---
title: "bots.exportBotToken"
original: "https://core.telegram.org/method/bots.exportBotToken"
section: ref
description: "Export the bot token of a managed bot »; can only be called by the manager bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.exportBotToken","url":"/method/bots.exportBotToken/"}]
layout: layout.njk
---

# bots.exportBotToken

Export the bot token of a [managed bot »](/api/bots/managed-bots/#managing-a-managed-bot); can only be called by the manager bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="https://core.telegram.org/method/bots.exportBotToken?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The managed bot to export the token for</td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>If <a href="/constructor/boolTrue/">boolTrue</a>, revoke the current token and generate a new one</td></tr></tbody></table>

### Result

[bots.ExportedBotToken](/type/bots.ExportedBotToken/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).
