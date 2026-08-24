---
title: "updateBotEditBusinessMessage"
original: "https://core.telegram.org/constructor/updateBotEditBusinessMessage"
section: ref
description: "A message was edited in a connected business chat »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotEditBusinessMessage","url":"/constructor/updateBotEditBusinessMessage/"}]
layout: layout.njk
---

# updateBotEditBusinessMessage

A message was edited in a [connected business chat »](/api/bots/connected-business-bots/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotEditBusinessMessage/" class="current_page_link">updateBotEditBusinessMessage</a>#7df587c flags:<a href="/type/%23/">#</a> connection_id:<a href="/type/string/">string</a> message:<a href="/type/Message/">Message</a> reply_to_message:flags.0?<a href="/type/Message/">Message</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Business connection ID</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message/">Message</a></td><td>New message.</td></tr><tr><td><strong>reply_to_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Message/">Message</a></td><td>The message that <code>message</code> is replying to.</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
