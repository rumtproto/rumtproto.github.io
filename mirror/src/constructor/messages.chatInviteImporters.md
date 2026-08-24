---
title: "messages.chatInviteImporters"
original: "https://core.telegram.org/constructor/messages.chatInviteImporters"
section: ref
description: "Info about the users that joined the chat using a specific chat invite"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.chatInviteImporters","url":"/constructor/messages.chatInviteImporters/"}]
layout: layout.njk
---

# messages.chatInviteImporters

Info about the users that joined the chat using a specific chat invite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chatInviteImporters/" class="current_page_link">messages.chatInviteImporters</a>#81b6b00a count:<a href="/type/int/">int</a> importers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatInviteImporter/">ChatInviteImporter</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ChatInviteImporters/">messages.ChatInviteImporters</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of users that joined</td></tr><tr><td><strong>importers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatInviteImporter/">ChatInviteImporter</a>&gt;</td><td>The users that joined</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>The users that joined</td></tr></tbody></table>

### Type

[messages.ChatInviteImporters](/type/messages.ChatInviteImporters/)
