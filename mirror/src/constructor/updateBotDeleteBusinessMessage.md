---
title: "updateBotDeleteBusinessMessage"
original: "https://core.telegram.org/constructor/updateBotDeleteBusinessMessage"
section: ref
description: "A message was deleted in a connected business chat »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotDeleteBusinessMessage","url":"/constructor/updateBotDeleteBusinessMessage/"}]
layout: layout.njk
---

# updateBotDeleteBusinessMessage

A message was deleted in a [connected business chat »](/api/bots/connected-business-bots/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotDeleteBusinessMessage/" class="current_page_link">updateBotDeleteBusinessMessage</a>#a02a982e connection_id:<a href="/type/string/">string</a> peer:<a href="/type/Peer/">Peer</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Business connection ID.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td><a href="/api/peers/">Peer</a> where the messages were deleted.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of the messages that were deleted.</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Peer database](/api/peers/)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
