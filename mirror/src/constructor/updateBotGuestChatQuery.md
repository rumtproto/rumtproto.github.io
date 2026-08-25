---
title: "updateBotGuestChatQuery"
original: "https://core.telegram.org/constructor/updateBotGuestChatQuery"
section: ref
description: "Sent to guest bots » when a user invokes the bot as a guest in a chat. The bot should reply by invoking messages.setBotGuestChatResult, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotGuestChatQuery","url":"/constructor/updateBotGuestChatQuery/"}]
layout: layout.njk
---

# updateBotGuestChatQuery

Sent to [guest bots »](/api/bots/guest-mode/) when a user invokes the bot as a guest in a chat. The bot should reply by invoking [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), see [here »](/api/bots/guest-mode/#handling-guest-queries-bot-side) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="/constructor/updateBotGuestChatQuery/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query identifier, to be passed to <a href="/method/messages.setBotGuestChatResult/">messages.setBotGuestChatResult</a> when replying</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message/">Message</a></td><td>The message that triggered the query</td></tr><tr><td><strong>reference_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>Additional context messages referenced by the triggering message (for example replied-to messages)</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Persistent timestamp</a> (<code>qts</code>) of the update, used by bots to receive updates of this type</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/)

Bots may use this method to answer a [guest mode »](/api/bots/guest-mode/) query received via an [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/) update, providing the message to post into the chat as a guest, see [here »](/api/bots/guest-mode/#handling-guest-queries-bot-side) for more info.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Guest mode for bots](/api/bots/guest-mode/)

Guest bots can be queried by username from **any** non-secret private chat, group and supergroup (except for groups/supergroups with [content protection »](/api/content-protection/#for-groups-and-channels) enabled), posting their results directly into the chat, even if they're not a member.
