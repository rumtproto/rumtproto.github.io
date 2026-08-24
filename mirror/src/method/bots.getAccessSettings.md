---
title: "bots.getAccessSettings"
original: "https://core.telegram.org/method/bots.getAccessSettings"
section: ref
description: "Get the access restriction settings » of a managed bot; can only be called by the manager bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getAccessSettings","url":"/method/bots.getAccessSettings/"}]
layout: layout.njk
---

# bots.getAccessSettings

Get the [access restriction settings »](/api/bots/managed-bots/#managing-a-managed-bot) of a managed bot; can only be called by the manager bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="https://core.telegram.org/method/bots.getAccessSettings?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The managed bot whose access settings to retrieve</td></tr></tbody></table>

### Result

[bots.AccessSettings](/type/bots.AccessSettings/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).
