---
title: "businessAwayMessage"
original: "https://core.telegram.org/constructor/businessAwayMessage"
section: ref
description: "Describes a Telegram Business away message, automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessAwayMessage","url":"/constructor/businessAwayMessage/"}]
layout: layout.njk
---

# businessAwayMessage

Describes a [Telegram Business away message](/api/business/#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessAwayMessage/" class="current_page_link">businessAwayMessage</a>#ef156a5c flags:<a href="/type/%23/">#</a> offline_only:flags.0?true shortcut_id:<a href="/type/int/">int</a> schedule:<a href="/type/BusinessAwayMessageSchedule/">BusinessAwayMessageSchedule</a> recipients:<a href="/type/BusinessRecipients/">BusinessRecipients</a> = <a href="/type/BusinessAwayMessage/">BusinessAwayMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>offline_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the messages will not be sent if the account was online in the last 10 minutes.</td></tr><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of a <a href="/api/business/#quick-reply-shortcuts">quick reply shorcut, containing the away messages to send, see here » for more info</a>.</td></tr><tr><td><strong>schedule</strong></td><td style="text-align: center;"><a href="/type/BusinessAwayMessageSchedule/">BusinessAwayMessageSchedule</a></td><td>Specifies when should the away messages be sent.</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/BusinessRecipients/">BusinessRecipients</a></td><td>Allowed recipients for the away messages.</td></tr></tbody></table>

### Type

[BusinessAwayMessage](/type/BusinessAwayMessage/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
