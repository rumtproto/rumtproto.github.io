---
title: "bots.resetBotCommands"
original: "https://core.telegram.org/method/bots.resetBotCommands"
section: ref
description: "Clear bot commands for the specified bot scope and language code"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.resetBotCommands","url":"/method/bots.resetBotCommands/"}]
layout: layout.njk
---

# bots.resetBotCommands

Clear bot commands for the specified bot scope and language code

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.resetBotCommands/" class="current_page_link">bots.resetBotCommands</a>#3d8de0f9 scope:<a href="/type/BotCommandScope/">BotCommandScope</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/BotCommandScope/">BotCommandScope</a></td><td>Command scope</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>LANG_CODE_INVALID</td><td>The specified language code is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
