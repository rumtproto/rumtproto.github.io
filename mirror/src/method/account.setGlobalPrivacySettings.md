---
title: "account.setGlobalPrivacySettings"
original: "https://core.telegram.org/method/account.setGlobalPrivacySettings"
section: ref
description: "Set global privacy settings"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setGlobalPrivacySettings","url":"/method/account.setGlobalPrivacySettings/"}]
layout: layout.njk
---

# account.setGlobalPrivacySettings

Set global privacy settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/globalPrivacySettings/">globalPrivacySettings</a>#fe41b34f flags:<a href="/type/%23/">#</a> archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?<a href="/type/long/">long</a> disallowed_gifts:flags.6?<a href="/type/DisallowedGiftsSettings/">DisallowedGiftsSettings</a> = <a href="/type/GlobalPrivacySettings/">GlobalPrivacySettings</a>;
---functions---
<a href="/method/account.setGlobalPrivacySettings/" class="current_page_link">account.setGlobalPrivacySettings</a>#1edaaac2 settings:<a href="/type/GlobalPrivacySettings/">GlobalPrivacySettings</a> = <a href="/type/GlobalPrivacySettings/">GlobalPrivacySettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/GlobalPrivacySettings/">GlobalPrivacySettings</a></td><td>Global privacy settings</td></tr></tbody></table>

### Result

[GlobalPrivacySettings](/type/GlobalPrivacySettings/)

### Only users can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AUTOARCHIVE_NOT_AVAILABLE</td><td>The autoarchive setting is not available at this time: please check the value of the <a href="/api/config/#client-configuration">autoarchive_setting_available field in client config&nbsp;»</a> before calling this method.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>The specified method <em>can</em> be used over a <a href="/api/bots/connected-business-bots/">business connection</a> for some operations, but the specified query attempted an operation that is not allowed over a business connection.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
