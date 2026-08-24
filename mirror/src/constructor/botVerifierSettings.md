---
title: "botVerifierSettings"
original: "https://core.telegram.org/constructor/botVerifierSettings"
section: ref
description: "Info about the current verifier bot »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botVerifierSettings","url":"/constructor/botVerifierSettings/"}]
layout: layout.njk
---

# botVerifierSettings

Info about the current [verifier bot »](/api/bots/verification/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botVerifierSettings/" class="current_page_link">botVerifierSettings</a>#b0cd6617 flags:<a href="/type/%23/">#</a> can_modify_custom_description:flags.1?true icon:<a href="/type/long/">long</a> company:<a href="/type/string/">string</a> custom_description:flags.0?<a href="/type/string/">string</a> = <a href="/type/BotVerifierSettings/">BotVerifierSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>can_modify_custom_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Indicates whether the bot is allowed to set a custom description field for individual verified peers, different from the <code>custom_description</code> provided here.</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Verification icon</td></tr><tr><td><strong>company</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The name of the organization that provides the verification</td></tr><tr><td><strong>custom_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>An optional default description for the verification</td></tr></tbody></table>

### Type

[BotVerifierSettings](/type/BotVerifierSettings/)

### Related pages

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
