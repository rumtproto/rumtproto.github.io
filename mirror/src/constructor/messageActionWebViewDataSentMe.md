---
title: "messageActionWebViewDataSentMe"
original: "https://core.telegram.org/constructor/messageActionWebViewDataSentMe"
section: ref
description: "Data from an opened reply keyboard bot mini app was relayed to the bot that owns it (bot side service message)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionWebViewDataSentMe","url":"/constructor/messageActionWebViewDataSentMe/"}]
layout: layout.njk
---

# messageActionWebViewDataSentMe

Data from an opened [reply keyboard bot mini app](/api/bots/webapps/) was relayed to the bot that owns it (bot side service message).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionWebViewDataSentMe/" class="current_page_link">messageActionWebViewDataSentMe</a>#47dd8079 text:<a href="/type/string/">string</a> data:<a href="/type/string/">string</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Text of the <a href="/constructor/keyboardButtonSimpleWebView/">keyboardButtonSimpleWebView</a> that was pressed to open the web app.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Relayed data.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

Button to open a [bot mini app](/api/bots/webapps/) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), without sending user information to the web app.

Can only be sent or received as part of a reply keyboard, use [keyboardButtonWebView](/constructor/keyboardButtonWebView/) for inline keyboards.

When pressed, clients must open a [Keyboard Button Mini App](/api/bots/webapps/#keyboard-button-mini-apps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), passing `url` to [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
