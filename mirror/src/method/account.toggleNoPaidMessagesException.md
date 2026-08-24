---
title: "account.toggleNoPaidMessagesException"
original: "https://core.telegram.org/method/account.toggleNoPaidMessagesException"
section: ref
description: "Allow a user to send us messages without paying if paid messages » are enabled."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.toggleNoPaidMessagesException","url":"/method/account.toggleNoPaidMessagesException/"}]
layout: layout.njk
---

# account.toggleNoPaidMessagesException

Allow a user to send us messages without paying if [paid messages »](/api/paid-messages/) are enabled.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.toggleNoPaidMessagesException/" class="current_page_link">account.toggleNoPaidMessagesException</a>#fe2eda76 flags:<a href="/type/%23/">#</a> refund_charged:flags.0?true require_payment:flags.2?true parent_peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>refund_charged</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set and <code>require_payment</code> is not set, refunds the amounts the user has already paid us to send us messages (directly or via a monoforum).</td></tr><tr><td><strong>require_payment</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, requires the user to pay in order to send us messages.<br>Can only be <strong>set</strong> by monoforums, not users, i.e. <code>parent_peer</code> must be set if this flag is set; users must instead use the <a href="/constructor/inputPrivacyKeyNoPaidMessages/">inputPrivacyKeyNoPaidMessages</a> privacy setting to remove a previously added exemption.<br>If not set, allows the user to send us messages without paying (can be <strong>unset</strong> by both monoforums and users).</td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, applies the setting within the <a href="/api/monoforum/">monoforum aka direct messages »</a> (pass the ID of the monoforum, <strong>not</strong> the ID of the associated channel).</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user to exempt or unexempt.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PARENT_PEER_INVALID</td><td>The specified <code>parent_peer</code> is invalid.</td></tr><tr><td>400</td><td>UNSUPPORTED</td><td><code>require_payment</code> cannot be <em>set</em> by users, only by monoforums: users must instead use the <a href="/constructor/inputPrivacyKeyNoPaidMessages/">inputPrivacyKeyNoPaidMessages</a> privacy setting to remove a previously added exemption.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/)

Who can send you messages without paying, if [paid messages »](/api/paid-messages/) are enabled.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
