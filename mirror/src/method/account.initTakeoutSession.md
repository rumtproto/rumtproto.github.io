---
title: "account.initTakeoutSession"
original: "https://core.telegram.org/method/account.initTakeoutSession"
section: ref
description: "Initialize a takeout session, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.initTakeoutSession","url":"/method/account.initTakeoutSession/"}]
layout: layout.njk
---

# account.initTakeoutSession

Initialize a [takeout session, see here » for more info](/api/takeout/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.takeout/">account.takeout</a>#4dba4501 id:<a href="/type/long/">long</a> = <a href="/type/account.Takeout/">account.Takeout</a>;
---functions---
<a href="/method/account.initTakeoutSession/" class="current_page_link">account.initTakeoutSession</a>#8ef3eab0 flags:<a href="/type/%23/">#</a> contacts:flags.0?true message_users:flags.1?true message_chats:flags.2?true message_megagroups:flags.3?true message_channels:flags.4?true files:flags.5?true file_max_size:flags.5?<a href="/type/long/">long</a> = <a href="/type/account.Takeout/">account.Takeout</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to export contacts</td></tr><tr><td><strong>message_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether to export messages in private chats</td></tr><tr><td><strong>message_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether to export messages in <a href="/api/channel/#basic-groups">basic groups</a></td></tr><tr><td><strong>message_megagroups</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether to export messages in <a href="/api/channel/#supergroups">supergroups</a></td></tr><tr><td><strong>message_channels</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether to export messages in <a href="/api/channel/#channels">channels</a></td></tr><tr><td><strong>files</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether to export files</td></tr><tr><td><strong>file_max_size</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/long/">long</a></td><td>Maximum size of files to export</td></tr></tbody></table>

### Result

[account.Takeout](/type/account.Takeout/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>420</td><td>TAKEOUT_INIT_DELAY_%d</td><td>Sorry, for security reasons, you will be able to begin downloading your data in %d seconds. We have notified all your devices about the export request to make sure it's authorized and to give you time to react if it's not.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Takeout API](/api/takeout/)

Telegram's API allows users to export all of their information through the takeout API.
