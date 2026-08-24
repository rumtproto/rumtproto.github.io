---
title: "channels.getGroupsForDiscussion"
original: "https://core.telegram.org/method/channels.getGroupsForDiscussion"
section: ref
description: "Get all groups that can be used as discussion groups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getGroupsForDiscussion","url":"/method/channels.getGroupsForDiscussion/"}]
layout: layout.njk
---

# channels.getGroupsForDiscussion

Get all groups that can be used as [discussion groups](/api/discussion/).

Returned [basic group chats](/api/channel/#basic-groups) must be first upgraded to [supergroups](/api/channel/#supergroups) before they can be set as a discussion group.  
To set a returned supergroup as a discussion group, access to its old messages must be enabled using [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/), first.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
---functions---
<a href="/method/channels.getGroupsForDiscussion/" class="current_page_link">channels.getGroupsForDiscussion</a>#f5dad378 = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Related pages

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.togglePreHistoryHidden](/method/channels.togglePreHistoryHidden/)

Hide/unhide message history for new channel/supergroup users
