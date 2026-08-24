---
title: "channels.getChannelRecommendations"
original: "https://core.telegram.org/method/channels.getChannelRecommendations"
section: ref
description: "Obtain a list of similarly themed public channels, selected based on similarities in their subscriber bases."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getChannelRecommendations","url":"/method/channels.getChannelRecommendations/"}]
layout: layout.njk
---

# channels.getChannelRecommendations

Obtain a list of similarly themed public channels, selected based on similarities in their **subscriber bases**.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
---functions---
<a href="/method/channels.getChannelRecommendations/" class="current_page_link">channels.getChannelRecommendations</a>#25a71742 flags:<a href="/type/%23/">#</a> channel:flags.0?<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputChannel/">InputChannel</a></td><td>The method will return channels related to the passed <code>channel</code>. If not set, the method will returns channels related to channels the user has joined.</td></tr></tbody></table>

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr></tbody></table>
