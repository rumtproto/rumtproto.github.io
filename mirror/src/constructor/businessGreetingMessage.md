---
title: "businessGreetingMessage"
original: "https://core.telegram.org/constructor/businessGreetingMessage"
section: ref
description: "Describes a Telegram Business greeting, automatically sent to new users writing to us in private for the first time, or after a certain inactivity period."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessGreetingMessage","url":"/constructor/businessGreetingMessage/"}]
layout: layout.njk
---

# businessGreetingMessage

Describes a [Telegram Business greeting](/api/business/#greeting-messages), automatically sent to new users writing to us in private for the first time, or after a certain inactivity period.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessGreetingMessage/" class="current_page_link">businessGreetingMessage</a>#e519abab shortcut_id:<a href="/type/int/">int</a> recipients:<a href="/type/BusinessRecipients/">BusinessRecipients</a> no_activity_days:<a href="/type/int/">int</a> = <a href="/type/BusinessGreetingMessage/">BusinessGreetingMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of a <a href="/api/business/#quick-reply-shortcuts">quick reply shorcut, containing the greeting messages to send, see here » for more info</a>.</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/BusinessRecipients/">BusinessRecipients</a></td><td>Allowed recipients for the greeting messages.</td></tr><tr><td><strong>no_activity_days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of days after which a private chat will be considered as inactive; currently, must be one of 7, 14, 21, or 28.</td></tr></tbody></table>

### Type

[BusinessGreetingMessage](/type/BusinessGreetingMessage/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
