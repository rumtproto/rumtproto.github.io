---
title: "messages.MessageViews"
original: "https://core.telegram.org/type/messages.MessageViews"
section: ref
description: "View, forward counter + info about replies"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.MessageViews","url":"/type/messages.MessageViews/"}]
layout: layout.njk
---

# messages.MessageViews

View, forward counter + info about replies

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messageViews/">messages.messageViews</a>#b6c4f543 views:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageViews/">MessageViews</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.MessageViews/" class="current_page_link">messages.MessageViews</a>;

---functions---

<a href="/method/messages.getMessagesViews/">messages.getMessagesViews</a>#5784d3e1 peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; increment:<a href="/type/Bool/">Bool</a> = <a href="/type/messages.MessageViews/" class="current_page_link">messages.MessageViews</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messageViews/">messages.messageViews</a></td><td>View, forward counter + info about replies</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessagesViews/">messages.getMessagesViews</a></td><td>Get and increase the view counter of a message sent or forwarded from a <a href="/api/channel/">channel</a></td></tr></tbody></table>
