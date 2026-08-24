---
title: "messages.Chats"
original: "https://core.telegram.org/type/messages.Chats"
section: ref
description: "Object contains list of chats with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.Chats","url":"/type/messages.Chats/"}]
layout: layout.njk
---

# messages.Chats

Object contains list of chats with auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;

---functions---

<a href="/method/messages.getChats/">messages.getChats</a>#49e9528f id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;
<a href="/method/messages.getCommonChats/">messages.getCommonChats</a>#e40ca104 user_id:<a href="/type/InputUser/">InputUser</a> max_id:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;

<a href="/method/channels.getChannels/">channels.getChannels</a>#a7f6bbb id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputChannel/">InputChannel</a>&gt; = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;
<a href="/method/channels.getAdminedPublicChannels/">channels.getAdminedPublicChannels</a>#f8b036af flags:<a href="/type/%23/">#</a> by_location:flags.0?true check_limit:flags.1?true for_personal:flags.2?true = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;
<a href="/method/channels.getLeftChannels/">channels.getLeftChannels</a>#8341ecc0 offset:<a href="/type/int/">int</a> = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;
<a href="/method/channels.getGroupsForDiscussion/">channels.getGroupsForDiscussion</a>#f5dad378 = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;
<a href="/method/channels.getChannelRecommendations/">channels.getChannelRecommendations</a>#25a71742 flags:<a href="/type/%23/">#</a> channel:flags.0?<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;

<a href="/method/stories.getChatsToSend/">stories.getChatsToSend</a>#a56a8b60 = <a href="/type/messages.Chats/" class="current_page_link">messages.Chats</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.chats/">messages.chats</a></td><td>List of chats with auxiliary data.</td></tr><tr><td><a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a></td><td>Partial list of chats, more would have to be fetched with <a href="/api/offsets/">pagination</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getChats/">messages.getChats</a></td><td>Returns chat basic info on their IDs.</td></tr><tr><td><a href="/method/messages.getCommonChats/">messages.getCommonChats</a></td><td>Get chats in common with a user</td></tr><tr><td><a href="/method/channels.getChannels/">channels.getChannels</a></td><td>Get info about <a href="/api/channel/">channels/supergroups</a></td></tr><tr><td><a href="/method/channels.getAdminedPublicChannels/">channels.getAdminedPublicChannels</a></td><td>Get <a href="/api/channel/">channels/supergroups/geogroups</a> we're admin in. Usually called when the user exceeds the <a href="/constructor/config/">limit</a> for owned public <a href="/api/channel/">channels/supergroups/geogroups</a>, and the user is given the choice to remove one of his channels/supergroups/geogroups.</td></tr><tr><td><a href="/method/channels.getLeftChannels/">channels.getLeftChannels</a></td><td>Get a list of <a href="/api/channel/">channels/supergroups</a> we left, requires a <a href="/api/takeout/">takeout session, see here » for more info</a>.</td></tr><tr><td><a href="/method/channels.getGroupsForDiscussion/">channels.getGroupsForDiscussion</a></td><td>Get all groups that can be used as <a href="/api/discussion/">discussion groups</a>.<br><br>Returned <a href="/api/channel/#basic-groups">basic group chats</a> must be first upgraded to <a href="/api/channel/#supergroups">supergroups</a> before they can be set as a discussion group.<br>To set a returned supergroup as a discussion group, access to its old messages must be enabled using <a href="/method/channels.togglePreHistoryHidden/">channels.togglePreHistoryHidden</a>, first.</td></tr><tr><td><a href="/method/channels.getChannelRecommendations/">channels.getChannelRecommendations</a></td><td>Obtain a list of similarly themed public channels, selected based on similarities in their <strong>subscriber bases</strong>.</td></tr><tr><td><a href="/method/stories.getChatsToSend/">stories.getChatsToSend</a></td><td>Obtain a list of channels where the user can post <a href="/api/stories/">stories</a></td></tr></tbody></table>
