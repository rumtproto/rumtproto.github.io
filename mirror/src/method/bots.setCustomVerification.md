---
title: "bots.setCustomVerification"
original: "https://core.telegram.org/method/bots.setCustomVerification"
section: ref
description: "Verify a user or chat on behalf of an organization »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.setCustomVerification","url":"/method/bots.setCustomVerification/"}]
layout: layout.njk
---

# bots.setCustomVerification

Verify a user or chat [on behalf of an organization »](/api/bots/verification/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.setCustomVerification/" class="current_page_link">bots.setCustomVerification</a>#8b89dfbd flags:<a href="/type/%23/">#</a> enabled:flags.1?true bot:flags.0?<a href="/type/InputUser/">InputUser</a> peer:<a href="/type/InputPeer/">InputPeer</a> custom_description:flags.2?<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, adds the verification; otherwise removes verification.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputUser/">InputUser</a></td><td>Must <strong>not</strong> be set if invoked by a bot, <strong>must</strong> be set to the ID of an owned bot if invoked by a user.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer to verify</td></tr><tr><td><strong>custom_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Custom description for the verification, the UTF-8 length limit for this field is contained in <a href="/api/config/#bot-verification-description-length-limit">bot_verification_description_length_limit »</a>.<br>If not set, <code>Was verified by organization "organization_name"</code> will be used as description.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>403</td><td>BOT_VERIFIER_FORBIDDEN</td><td>This bot cannot assign <a href="/api/bots/verification/">verification icons</a>.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
