---
title: "topPeerCategoryBotsGuestChat"
original: "https://core.telegram.org/constructor/topPeerCategoryBotsGuestChat"
section: ref
description: "Top guest bots », i.e. bots most frequently invoked as guests in chats."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"topPeerCategoryBotsGuestChat","url":"/constructor/topPeerCategoryBotsGuestChat/"}]
layout: layout.njk
---

# topPeerCategoryBotsGuestChat

Top [guest bots »](/api/bots/guest-mode/), i.e. bots most frequently invoked as guests in chats.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 225. <a href="/constructor/topPeerCategoryBotsGuestChat/">Switch »</a></code></pre>

### Parameters

This constructor does not require any parameters.

### Type

[TopPeerCategory](/type/TopPeerCategory/)

### Related pages

#### [Guest mode for bots](/api/bots/guest-mode/)

Guest bots can be queried by username from **any** non-secret private chat, group and supergroup (except for groups/supergroups with [content protection »](/api/content-protection/#for-groups-and-channels) enabled), posting their results directly into the chat, even if they're not a member.
