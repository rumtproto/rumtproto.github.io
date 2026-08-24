---
title: "BusinessAwayMessage"
original: "https://core.telegram.org/type/BusinessAwayMessage"
section: ref
description: "Describes a Telegram Business away message, automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BusinessAwayMessage","url":"/type/BusinessAwayMessage/"}]
layout: layout.njk
---

# BusinessAwayMessage

Describes a [Telegram Business away message](/api/business/#away-messages), automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessAwayMessage/">businessAwayMessage</a>#ef156a5c flags:<a href="/type/%23/">#</a> offline_only:flags.0?true shortcut_id:<a href="/type/int/">int</a> schedule:<a href="/type/BusinessAwayMessageSchedule/">BusinessAwayMessageSchedule</a> recipients:<a href="/type/BusinessRecipients/">BusinessRecipients</a> = <a href="/type/BusinessAwayMessage/" class="current_page_link">BusinessAwayMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/businessAwayMessage/">businessAwayMessage</a></td><td>Describes a <a href="/api/business/#away-messages">Telegram Business away message</a>, automatically sent to users writing to us when we're offline, during closing hours, while we're on vacation, or in some other custom time period when we cannot immediately answer to the user.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
