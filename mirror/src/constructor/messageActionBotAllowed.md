---
title: "messageActionBotAllowed"
original: "https://core.telegram.org/constructor/messageActionBotAllowed"
section: ref
description: "We have given the bot permission to send us direct messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionBotAllowed","url":"/constructor/messageActionBotAllowed/"}]
layout: layout.njk
---

# messageActionBotAllowed

We have given the bot permission to send us direct messages.

The optional fields specify how did we authorize the bot to send us messages.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionBotAllowed/" class="current_page_link">messageActionBotAllowed</a>#c516d679 flags:<a href="/type/%23/">#</a> attach_menu:flags.1?true from_request:flags.3?true domain:flags.0?<a href="/type/string/">string</a> app:flags.2?<a href="/type/BotApp/">BotApp</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>attach_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>We have authorized the bot to send us messages by installing the bot's <a href="/api/bots/attach/">attachment menu</a>.</td></tr><tr><td><strong>from_request</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>We have allowed the bot to send us messages using <a href="/method/bots.allowSendMessage/">bots.allowSendMessage »</a>.</td></tr><tr><td><strong>domain</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>We have authorized the bot to send us messages by logging into a website via <a href="https://core.telegram.org/widgets/login">Telegram Login »</a>; this field contains the domain name of the website on which the user has logged in.</td></tr><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/BotApp/">BotApp</a></td><td>We have authorized the bot to send us messages by opening the specified <a href="/api/bots/webapps/">bot mini app</a>.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.

#### [bots.allowSendMessage](/method/bots.allowSendMessage/)

Allow the specified bot to send us messages

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
