---
title: "chatlists.exportChatlistInvite"
original: "https://core.telegram.org/method/chatlists.exportChatlistInvite"
section: ref
description: "Export a folder », creating a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.exportChatlistInvite","url":"/method/chatlists.exportChatlistInvite/"}]
layout: layout.njk
---

# chatlists.exportChatlistInvite

Export a [folder »](/api/folders/), creating a [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.exportedChatlistInvite/">chatlists.exportedChatlistInvite</a>#10e6e3a6 filter:<a href="/type/DialogFilter/">DialogFilter</a> invite:<a href="/type/ExportedChatlistInvite/">ExportedChatlistInvite</a> = <a href="/type/chatlists.ExportedChatlistInvite/">chatlists.ExportedChatlistInvite</a>;
---functions---
<a href="/method/chatlists.exportChatlistInvite/" class="current_page_link">chatlists.exportChatlistInvite</a>#8472478e chatlist:<a href="/type/InputChatlist/">InputChatlist</a> title:<a href="/type/string/">string</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/chatlists.ExportedChatlistInvite/">chatlists.ExportedChatlistInvite</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist/">InputChatlist</a></td><td>The folder to export</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>An optional name for the link</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>The list of channels, group and supergroups to share with the link. Basic groups will automatically be <a href="/api/channel/#migration">converted to supergroups</a> when invoking the method.</td></tr></tbody></table>

### Result

[chatlists.ExportedChatlistInvite](/type/chatlists.ExportedChatlistInvite/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHATLISTS_TOO_MUCH</td><td>You have created too many folder links, hitting the <code>chatlist_invites_limit_default</code>/<code>chatlist_invites_limit_premium</code> <a href="/api/config/#chatlist-invites-limit-default">limits&nbsp;»</a>.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>The specified filter cannot be used in this context.</td></tr><tr><td>400</td><td>INVITES_TOO_MUCH</td><td>The maximum number of per-folder invites specified by the <code>chatlist_invites_limit_default</code>/<code>chatlist_invites_limit_premium</code> <a href="/api/config/#chatlist-invites-limit-default">client configuration parameters&nbsp;»</a> was reached.</td></tr><tr><td>400</td><td>PEERS_LIST_EMPTY</td><td>The specified list of peers is empty.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
