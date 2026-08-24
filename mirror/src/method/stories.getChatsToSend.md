---
title: "stories.getChatsToSend"
original: "https://core.telegram.org/method/stories.getChatsToSend"
section: ref
description: "Obtain a list of channels where the user can post stories"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getChatsToSend","url":"/method/stories.getChatsToSend/"}]
layout: layout.njk
---

# stories.getChatsToSend

Obtain a list of channels where the user can post [stories](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
---functions---
<a href="/method/stories.getChatsToSend/" class="current_page_link">stories.getChatsToSend</a>#a56a8b60 = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
