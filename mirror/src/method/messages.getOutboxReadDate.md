---
title: "messages.getOutboxReadDate"
original: "https://core.telegram.org/method/messages.getOutboxReadDate"
section: ref
description: "Get the exact read date of one of our messages, sent to a private chat with another user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getOutboxReadDate","url":"/method/messages.getOutboxReadDate/"}]
layout: layout.njk
---

# messages.getOutboxReadDate

Get the exact read date of one of our messages, sent to a private chat with another user.

Can be only done for private outgoing messages not older than [appConfig.pm\_read\_date\_expire\_period »](/api/config/#pm-read-date-expire-period).

If the `peer`'s [userFull](/constructor/userFull/).`read_dates_private` flag is set, we will not be able to fetch the exact read date of messages we send to them, and a `USER_PRIVACY_RESTRICTED` RPC error will be emitted.  
The exact read date of messages might still be unavailable for other reasons, see [here »](/constructor/globalPrivacySettings/) for more info.  
To set [userFull](/constructor/userFull/).`read_dates_private` for ourselves invoke [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), setting the `settings.hide_read_marks` flag.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/outboxReadDate/">outboxReadDate</a>#3bb842ac date:<a href="/type/int/">int</a> = <a href="/type/OutboxReadDate/">OutboxReadDate</a>;
---functions---
<a href="/method/messages.getOutboxReadDate/" class="current_page_link">messages.getOutboxReadDate</a>#8c4bfe5d peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/OutboxReadDate/">OutboxReadDate</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The user to whom we sent the message.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The message ID.</td></tr></tbody></table>

### Result

[OutboxReadDate](/type/OutboxReadDate/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MESSAGE_NOT_READ_YET</td><td>The specified message wasn't read yet.</td></tr><tr><td>400</td><td>MESSAGE_TOO_OLD</td><td>The message is too old, the requested information is not available.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>The user's privacy settings do not allow you to do this.</td></tr><tr><td>403</td><td>YOUR_PRIVACY_RESTRICTED</td><td>You cannot fetch the read date of this message because you have disallowed other users to do so for <em>your</em> messages; to fix, allow other users to see <em>your</em> exact last online date OR purchase a <a href="/api/premium/">Telegram Premium</a> subscription.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Global privacy settings

#### [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/)

Set global privacy settings

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
