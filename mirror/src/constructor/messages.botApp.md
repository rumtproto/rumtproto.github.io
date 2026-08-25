---
title: "messages.botApp"
original: "https://core.telegram.org/constructor/messages.botApp"
section: ref
description: "Contains information about a direct link Mini App"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.botApp","url":"/constructor/messages.botApp/"}]
layout: layout.njk
---

# messages.botApp

Contains information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botApp/" class="current_page_link">messages.botApp</a>#eb50adf5 flags:<a href="/type/%23/">#</a> inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:<a href="/type/BotApp/">BotApp</a> = <a href="/type/messages.BotApp/">messages.BotApp</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>inactive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the web app was never used by the user, and confirmation must be asked from the user before opening it.</td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>The bot is asking permission to send messages to the user: if the user agrees, set the <code>write_allowed</code> flag when invoking <a href="/method/messages.requestAppWebView/">messages.requestAppWebView</a>.</td></tr><tr><td><strong>has_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Deprecated flag, can be ignored.</td></tr><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/type/BotApp/">BotApp</a></td><td>Bot app information</td></tr></tbody></table>

### Type

[messages.BotApp](/type/messages.BotApp/)

### Related pages

#### [messages.requestAppWebView](/method/messages.requestAppWebView/)

Open a [bot mini app](/bots/webapps/) from a [direct Mini App deep link](/api/links/#direct-mini-app-links), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
