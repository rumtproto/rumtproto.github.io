---
title: "businessBotRights"
original: "https://core.telegram.org/constructor/businessBotRights"
section: ref
description: "Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessBotRights","url":"/constructor/businessBotRights/"}]
layout: layout.njk
---

# businessBotRights

[Business bot rights](/api/bots/connected-business-bots/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessBotRights/" class="current_page_link">businessBotRights</a>#a0624cf7 flags:<a href="/type/%23/">#</a> reply:flags.0?true read_messages:flags.1?true delete_sent_messages:flags.2?true delete_received_messages:flags.3?true edit_name:flags.4?true edit_bio:flags.5?true edit_profile_photo:flags.6?true edit_username:flags.7?true view_gifts:flags.8?true sell_gifts:flags.9?true change_gift_settings:flags.10?true transfer_and_upgrade_gifts:flags.11?true transfer_stars:flags.12?true manage_stories:flags.13?true = <a href="/type/BusinessBotRights/">BusinessBotRights</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>reply</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the bot can send and edit messages in private chats that had incoming messages in the last 24 hours.</td></tr><tr><td><strong>read_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the bot can mark incoming private messages as read.</td></tr><tr><td><strong>delete_sent_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the bot can delete messages sent by the bot.</td></tr><tr><td><strong>delete_received_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the bot can delete received private messages in managed chats.</td></tr><tr><td><strong>edit_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether the bot can edit the first and last name of the business account.</td></tr><tr><td><strong>edit_bio</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether the bot can edit the bio of the business account.</td></tr><tr><td><strong>edit_profile_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether the bot can edit the profile photo of the business account.</td></tr><tr><td><strong>edit_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether the bot can edit the username of the business account.</td></tr><tr><td><strong>view_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Whether the bot can view gifts and the amount of Telegram Stars owned by the business account.</td></tr><tr><td><strong>sell_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether the bot can convert regular gifts owned by the business account to Telegram Stars.</td></tr><tr><td><strong>change_gift_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>Whether the bot can change the privacy settings pertaining to gifts for the business account.</td></tr><tr><td><strong>transfer_and_upgrade_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>Whether the bot can transfer and upgrade gifts owned by the business account.</td></tr><tr><td><strong>transfer_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td>Whether the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts.</td></tr><tr><td><strong>manage_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>Whether the bot can post, edit and delete stories on behalf of the business account.</td></tr></tbody></table>

### Type

[BusinessBotRights](/type/BusinessBotRights/)

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
