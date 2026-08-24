---
title: "messages.savedDialogsSlice"
original: "https://core.telegram.org/constructor/messages.savedDialogsSlice"
section: ref
description: "Incomplete list of saved message dialogs » with messages and auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.savedDialogsSlice","url":"/constructor/messages.savedDialogsSlice/"}]
layout: layout.njk
---

# messages.savedDialogsSlice

Incomplete list of [saved message dialogs »](/api/saved-messages/) with messages and auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedDialogsSlice/" class="current_page_link">messages.savedDialogsSlice</a>#44ba9dd9 count:<a href="/type/int/">int</a> dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of saved message dialogs</td></tr><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt;</td><td>List of saved message dialogs</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>List of last messages from dialogs</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
