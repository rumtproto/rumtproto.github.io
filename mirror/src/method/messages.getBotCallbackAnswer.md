---
title: "messages.getBotCallbackAnswer"
original: "https://core.telegram.org/method/messages.getBotCallbackAnswer"
section: ref
description: "Press an inline callback button and get a callback answer from the bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getBotCallbackAnswer","url":"/method/messages.getBotCallbackAnswer/"}]
layout: layout.njk
---

# messages.getBotCallbackAnswer

Press an inline callback button and get a callback answer from the bot

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botCallbackAnswer/">messages.botCallbackAnswer</a>#36585ea4 flags:<a href="/type/%23/">#</a> alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?<a href="/type/string/">string</a> url:flags.2?<a href="/type/string/">string</a> cache_time:<a href="/type/int/">int</a> = <a href="/type/messages.BotCallbackAnswer/">messages.BotCallbackAnswer</a>;
---functions---
<a href="/method/messages.getBotCallbackAnswer/" class="current_page_link">messages.getBotCallbackAnswer</a>#9342ca07 flags:<a href="/type/%23/">#</a> game:flags.1?true peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> data:flags.0?<a href="/type/bytes/">bytes</a> password:flags.2?<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/messages.BotCallbackAnswer/">messages.BotCallbackAnswer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>game</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this is a "play game" button</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Where was the inline keyboard sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the Message with the inline keyboard</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/bytes/">bytes</a></td><td>Callback data</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a></td><td>For buttons <a href="/constructor/keyboardButtonCallback/">requiring you to verify your identity with your 2FA password</a>, the SRP payload generated using <a href="/api/srp/">SRP</a>.</td></tr></tbody></table>

### Result

[messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_RESPONSE_TIMEOUT</td><td>A timeout occurred while fetching data from the bot.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>DATA_INVALID</td><td>Encrypted data invalid.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PASSWORD_MISSING</td><td>You must <a href="/api/srp/">enable 2FA</a> before executing this operation.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>-503</td><td>Timeout</td><td>Timeout while fetching data.</td></tr></tbody></table>

### Related pages

#### [keyboardButtonCallback](/constructor/keyboardButtonCallback/)

Callback button

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients send `data` to the bot, optionally providing the user's [2FA SRP parameters](/api/srp/) for identity verification, as described in [callback queries](/api/bots/buttons/#callback-queries).

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
