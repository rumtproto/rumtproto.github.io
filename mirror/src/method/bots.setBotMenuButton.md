---
title: "bots.setBotMenuButton"
original: "https://core.telegram.org/method/bots.setBotMenuButton"
section: ref
description: "Sets the menu button action » for a given user or for all users"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.setBotMenuButton","url":"/method/bots.setBotMenuButton/"}]
layout: layout.njk
---

# bots.setBotMenuButton

Sets the [menu button action »](/api/bots/menu/) for a given user or for all users

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.setBotMenuButton/" class="current_page_link">bots.setBotMenuButton</a>#4504d54f user_id:<a href="/type/InputUser/">InputUser</a> button:<a href="/type/BotMenuButton/">BotMenuButton</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>User ID</td></tr><tr><td><strong>button</strong></td><td style="text-align: center;"><a href="/type/BotMenuButton/">BotMenuButton</a></td><td>Bot menu button action</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUTTON_INVALID</td><td>The specified button is invalid.</td></tr><tr><td>400</td><td>BUTTON_TEXT_INVALID</td><td>The specified button text is invalid.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Button URL invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [Bot menu button](/api/bots/menu/)

Bots can choose the behavior of the menu button shown next to the text input field.
