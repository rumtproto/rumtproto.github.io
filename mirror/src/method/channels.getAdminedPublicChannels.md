---
title: "channels.getAdminedPublicChannels"
original: "https://core.telegram.org/method/channels.getAdminedPublicChannels"
section: ref
description: "Get channels/supergroups/geogroups we're admin in. Usually called when the user exceeds the limit for owned public channels/supergroups/geogroups, and the user is given the choice…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getAdminedPublicChannels","url":"/method/channels.getAdminedPublicChannels/"}]
layout: layout.njk
---

# channels.getAdminedPublicChannels

Get [channels/supergroups/geogroups](/api/channel/) we're admin in. Usually called when the user exceeds the [limit](/constructor/config/) for owned public [channels/supergroups/geogroups](/api/channel/), and the user is given the choice to remove one of his channels/supergroups/geogroups.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
---functions---
<a href="/method/channels.getAdminedPublicChannels/" class="current_page_link">channels.getAdminedPublicChannels</a>#f8b036af flags:<a href="/type/%23/">#</a> by_location:flags.0?true check_limit:flags.1?true for_personal:flags.2?true = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>by_location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Get geogroups</td></tr><tr><td><strong>check_limit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set and the user has reached the limit of owned public <a href="/api/channel/">channels/supergroups/geogroups</a>, instead of returning the channel list one of the specified <a href="#possible-errors">errors</a> will be returned.<br>Useful to check if a new public channel can indeed be created, even before asking the user to enter a channel username to use in <a href="/method/channels.checkUsername/">channels.checkUsername</a>/<a href="/method/channels.updateUsername/">channels.updateUsername</a>.</td></tr><tr><td><strong>for_personal</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Set this flag to only fetch the full list of channels that may be passed to <a href="/method/account.updatePersonalChannel/">account.updatePersonalChannel</a> to <a href="/api/profile/#personal-channel">display them on our profile page</a>.</td></tr></tbody></table>

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_ADMIN_LOCATED_TOO_MUCH</td><td>The user has reached the limit of public geogroups.</td></tr><tr><td>400</td><td>CHANNELS_ADMIN_PUBLIC_TOO_MUCH</td><td>You're admin of too many public channels, make some channels private to change the username of this channel.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [channels.checkUsername](/method/channels.checkUsername/)

Check if a username is free and can be assigned to a channel/supergroup

#### [channels.updateUsername](/method/channels.updateUsername/)

Change or remove the username of a supergroup/channel

#### [account.updatePersonalChannel](/method/account.updatePersonalChannel/)

Associate (or remove) a personal [channel »](/api/channel/), that will be listed on our personal [profile page »](/api/profile/#personal-channel).

Changing it will emit an [updateUser](/constructor/updateUser/) update.

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!

#### [config](/constructor/config/)

Current configuration
