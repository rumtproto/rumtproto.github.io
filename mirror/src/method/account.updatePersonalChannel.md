---
title: "account.updatePersonalChannel"
original: "https://core.telegram.org/method/account.updatePersonalChannel"
section: ref
description: "Associate (or remove) a personal channel », that will be listed on our personal profile page »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updatePersonalChannel","url":"/method/account.updatePersonalChannel/"}]
layout: layout.njk
---

# account.updatePersonalChannel

Associate (or remove) a personal [channel »](/api/channel/), that will be listed on our personal [profile page »](/api/profile/#personal-channel).

Changing it will emit an [updateUser](/constructor/updateUser/) update.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.updatePersonalChannel/" class="current_page_link">account.updatePersonalChannel</a>#d94305e0 channel:<a href="/type/InputChannel/">InputChannel</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>The channel, pass <a href="/constructor/inputChannelEmpty/">inputChannelEmpty</a> to remove it.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PUBLIC_BROADCAST_EXPECTED</td><td><code>channel</code> only accepts a channel, but a supergroup was passed.</td></tr></tbody></table>

### Related pages

#### [inputChannelEmpty](/constructor/inputChannelEmpty/)

Represents the absence of a channel

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!

#### [updateUser](/constructor/updateUser/)

User ([user](/constructor/user/) and/or [userFull](/constructor/userFull/)) information was updated.

This update can only be received through getDifference or in [updates](/constructor/updates/)/[updatesCombined](/constructor/updatesCombined/) constructors, so it will **always** come bundled with the updated [user](/constructor/user/), that should be applied [as usual »](/api/peers/), **without** re-fetching the info manually.

However, full peer information will not come bundled in updates, so the full peer cache ([userFull](/constructor/userFull/)) must be invalidated for `user_id` when receiving this update.
