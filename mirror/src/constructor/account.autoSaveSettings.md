---
title: "account.autoSaveSettings"
original: "https://core.telegram.org/constructor/account.autoSaveSettings"
section: ref
description: "Contains media autosave settings"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.autoSaveSettings","url":"/constructor/account.autoSaveSettings/"}]
layout: layout.njk
---

# account.autoSaveSettings

Contains media autosave settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.autoSaveSettings/" class="current_page_link">account.autoSaveSettings</a>#4c3e069d users_settings:<a href="/type/AutoSaveSettings/">AutoSaveSettings</a> chats_settings:<a href="/type/AutoSaveSettings/">AutoSaveSettings</a> broadcasts_settings:<a href="/type/AutoSaveSettings/">AutoSaveSettings</a> exceptions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AutoSaveException/">AutoSaveException</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.AutoSaveSettings/">account.AutoSaveSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>users_settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings/">AutoSaveSettings</a></td><td>Default media autosave settings for private chats</td></tr><tr><td><strong>chats_settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings/">AutoSaveSettings</a></td><td>Default media autosave settings for <a href="/api/channel/">groups and supergroups</a></td></tr><tr><td><strong>broadcasts_settings</strong></td><td style="text-align: center;"><a href="/type/AutoSaveSettings/">AutoSaveSettings</a></td><td>Default media autosave settings for <a href="/api/channel/">channels</a></td></tr><tr><td><strong>exceptions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AutoSaveException/">AutoSaveException</a>&gt;</td><td>Peer-specific granular autosave settings</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in the peer-specific granular autosave settings</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the peer-specific granular autosave settings</td></tr></tbody></table>

### Type

[account.AutoSaveSettings](/type/account.AutoSaveSettings/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
