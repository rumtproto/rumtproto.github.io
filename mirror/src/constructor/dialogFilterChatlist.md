---
title: "dialogFilterChatlist"
original: "https://core.telegram.org/constructor/dialogFilterChatlist"
section: ref
description: "A folder imported using a chat folder deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"dialogFilterChatlist","url":"/constructor/dialogFilterChatlist/"}]
layout: layout.njk
---

# dialogFilterChatlist

A folder imported using a [chat folder deep link »](/api/links/#chat-folder-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dialogFilterChatlist/" class="current_page_link">dialogFilterChatlist</a>#96537bd7 flags:<a href="/type/%23/">#</a> has_my_invites:flags.26?true title_noanimate:flags.28?true id:<a href="/type/int/">int</a> title:<a href="/type/TextWithEntities/">TextWithEntities</a> emoticon:flags.25?<a href="/type/string/">string</a> color:flags.27?<a href="/type/int/">int</a> pinned_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; include_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/DialogFilter/">DialogFilter</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_my_invites</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.26?<a href="/constructor/true/">true</a></td><td>Whether the current user has created some <a href="/api/links/#chat-folder-links">chat folder deep links »</a> to share the folder as well.</td></tr><tr><td><strong>title_noanimate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/constructor/true/">true</a></td><td>If set, any animated emojis present in <code>title</code> should not be animated and should be instead frozen on the first frame.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the folder</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Name of the folder (max 12 UTF-8 chars)</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/type/string/">string</a></td><td>Emoji to use as icon for the folder.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.27?<a href="/type/int/">int</a></td><td>A color ID for the <a href="/api/folders/#folder-tags">folder tag associated to this folder, see here »</a> for more info.</td></tr><tr><td><strong>pinned_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>Pinned chats, <a href="/api/folders/">folders</a> can have unlimited pinned chats</td></tr><tr><td><strong>include_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>Chats to include in the folder</td></tr></tbody></table>

### Type

[DialogFilter](/type/DialogFilter/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
