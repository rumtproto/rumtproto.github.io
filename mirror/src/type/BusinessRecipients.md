---
title: "BusinessRecipients"
original: "https://core.telegram.org/type/BusinessRecipients"
section: ref
description: "Specifies the chats that can receive Telegram Business away » and greeting » messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BusinessRecipients","url":"/type/BusinessRecipients/"}]
layout: layout.njk
---

# BusinessRecipients

Specifies the chats that **can** receive Telegram Business [away »](/api/business/#away-messages) and [greeting »](/api/business/#greeting-messages) messages.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessRecipients/">businessRecipients</a>#21108ff7 flags:<a href="/type/%23/">#</a> existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/BusinessRecipients/" class="current_page_link">BusinessRecipients</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/businessRecipients/">businessRecipients</a></td><td>Specifies the chats that <strong>can</strong> receive Telegram Business <a href="/api/business/#away-messages">away »</a> and <a href="/api/business/#greeting-messages">greeting »</a> messages.<br><br>If <code>exclude_selected</code> is set, specifies all chats that <strong>cannot</strong> receive Telegram Business <a href="/api/business/#away-messages">away »</a> and <a href="/api/business/#greeting-messages">greeting »</a> messages.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
