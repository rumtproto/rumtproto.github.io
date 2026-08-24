---
title: "Messages.BotCallbackAnswer"
original: "https://core.telegram.org/type/messages.BotCallbackAnswer"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.BotCallbackAnswer","url":"/type/messages.BotCallbackAnswer/"}]
layout: layout.njk
---

# Messages.BotCallbackAnswer

Callback answer of bot

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botCallbackAnswer/">messages.botCallbackAnswer</a>#36585ea4 flags:<a href="/type/%23/">#</a> alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?<a href="/type/string/">string</a> url:flags.2?<a href="/type/string/">string</a> cache_time:<a href="/type/int/">int</a> = <a href="/type/messages.BotCallbackAnswer/" class="current_page_link">messages.BotCallbackAnswer</a>;

---functions---

<a href="/method/messages.getBotCallbackAnswer/">messages.getBotCallbackAnswer</a>#9342ca07 flags:<a href="/type/%23/">#</a> game:flags.1?true peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> data:flags.0?<a href="/type/bytes/">bytes</a> password:flags.2?<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/messages.BotCallbackAnswer/" class="current_page_link">messages.BotCallbackAnswer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botCallbackAnswer/">messages.botCallbackAnswer</a></td><td>Callback answer sent by the bot in response to a button press</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getBotCallbackAnswer/">messages.getBotCallbackAnswer</a></td><td>Press an inline callback button and get a callback answer from the bot</td></tr></tbody></table>
