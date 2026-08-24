---
title: "bots.setBotBroadcastDefaultAdminRights"
original: "https://core.telegram.org/method/bots.setBotBroadcastDefaultAdminRights"
section: ref
description: "Set the default suggested admin rights for bots being added as admins to channels, see here for more info on how to handle them »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.setBotBroadcastDefaultAdminRights","url":"/method/bots.setBotBroadcastDefaultAdminRights/"}]
layout: layout.njk
---

# bots.setBotBroadcastDefaultAdminRights

Set the default [suggested admin rights](/api/rights/#suggested-bot-rights) for bots being added as admins to channels, see [here for more info on how to handle them »](/api/rights/#suggested-bot-rights).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.setBotBroadcastDefaultAdminRights/" class="current_page_link">bots.setBotBroadcastDefaultAdminRights</a>#788464e1 admin_rights:<a href="/type/ChatAdminRights/">ChatAdminRights</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights/">ChatAdminRights</a></td><td>Admin rights</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RIGHTS_NOT_MODIFIED</td><td>The new admin rights are equal to the old rights, no change was made.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
