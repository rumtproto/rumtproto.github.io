---
title: "keyboardButtonWebView"
original: "https://core.telegram.org/constructor/keyboardButtonWebView"
section: ref
description: "Button to open a bot mini app using messages.requestWebView, sending over user information after user confirmation."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonWebView","url":"/constructor/keyboardButtonWebView/"}]
layout: layout.njk
---

# keyboardButtonWebView

Button to open a [bot mini app](/api/bots/webapps/) using [messages.requestWebView](/method/messages.requestWebView/), sending over user information after user confirmation.

Can only be sent or received as part of an inline keyboard, use [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/) for reply keyboards.

When pressed, clients must open an [Inline Button Mini App](/api/bots/webapps/#inline-button-mini-apps) using [messages.requestWebView](/method/messages.requestWebView/), passing `url` to [messages.requestWebView](/method/messages.requestWebView/).`url`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonWebView/" class="current_page_link">keyboardButtonWebView</a>#e846b1a0 flags:<a href="/type/%23/">#</a> style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/bots/webapps/">Web app url</a></td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [messages.requestWebView](/method/messages.requestWebView/)

Open a [bot mini app](/bots/webapps/), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

Button to open a [bot mini app](/api/bots/webapps/) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), without sending user information to the web app.

Can only be sent or received as part of a reply keyboard, use [keyboardButtonWebView](/constructor/keyboardButtonWebView/) for inline keyboards.

When pressed, clients must open a [Keyboard Button Mini App](/api/bots/webapps/#keyboard-button-mini-apps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), passing `url` to [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.
