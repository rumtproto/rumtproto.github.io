---
title: "DialogFilter"
original: "https://core.telegram.org/type/DialogFilter"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DialogFilter","url":"/type/DialogFilter/"}]
layout: layout.njk
---

# DialogFilter

Dialog filter ([folder »](/api/folders/))

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dialogFilter/">dialogFilter</a>#aa472651 flags:<a href="/type/%23/">#</a> contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true title_noanimate:flags.28?true id:<a href="/type/int/">int</a> title:<a href="/type/TextWithEntities/">TextWithEntities</a> emoticon:flags.25?<a href="/type/string/">string</a> color:flags.27?<a href="/type/int/">int</a> pinned_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; include_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; exclude_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/DialogFilter/" class="current_page_link">DialogFilter</a>;
<a href="/constructor/dialogFilterDefault/">dialogFilterDefault</a>#363293ae = <a href="/type/DialogFilter/" class="current_page_link">DialogFilter</a>;
<a href="/constructor/dialogFilterChatlist/">dialogFilterChatlist</a>#96537bd7 flags:<a href="/type/%23/">#</a> has_my_invites:flags.26?true title_noanimate:flags.28?true id:<a href="/type/int/">int</a> title:<a href="/type/TextWithEntities/">TextWithEntities</a> emoticon:flags.25?<a href="/type/string/">string</a> color:flags.27?<a href="/type/int/">int</a> pinned_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; include_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/DialogFilter/" class="current_page_link">DialogFilter</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/dialogFilter/">dialogFilter</a></td><td>Dialog filter AKA <a href="/api/folders/">folder</a></td></tr><tr><td><a href="/constructor/dialogFilterDefault/">dialogFilterDefault</a></td><td>Used only when reordering folders to indicate the default (all chats) folder.</td></tr><tr><td><a href="/constructor/dialogFilterChatlist/">dialogFilterChatlist</a></td><td>A folder imported using a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
