---
title: "bots.getBotCommands"
original: "https://core.telegram.org/method/bots.getBotCommands"
section: ref
description: "Obtain a list of bot commands for the specified bot scope and language code"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getBotCommands","url":"/method/bots.getBotCommands/"}]
layout: layout.njk
---

# bots.getBotCommands

Obtain a list of bot commands for the specified bot scope and language code

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/bots.getBotCommands/" class="current_page_link">bots.getBotCommands</a>#e34c0dd6 scope:<a href="/type/BotCommandScope/">BotCommandScope</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotCommand/">BotCommand</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/BotCommandScope/">BotCommandScope</a></td><td>Command scope</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[BotCommand](/type/BotCommand/)\>

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
