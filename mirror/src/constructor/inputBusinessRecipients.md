---
title: "inputBusinessRecipients"
original: "https://core.telegram.org/constructor/inputBusinessRecipients"
section: ref
description: "Specifies the chats that can receive Telegram Business away » and greeting » messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBusinessRecipients","url":"/constructor/inputBusinessRecipients/"}]
layout: layout.njk
---

# inputBusinessRecipients

Specifies the chats that **can** receive Telegram Business [away »](/api/business/#away-messages) and [greeting »](/api/business/#greeting-messages) messages.

If `exclude_selected` is set, specifies all chats that **cannot** receive Telegram Business [away »](/api/business/#away-messages) and [greeting »](/api/business/#greeting-messages) messages.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBusinessRecipients/" class="current_page_link">inputBusinessRecipients</a>#6f8b32aa flags:<a href="/type/%23/">#</a> existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; = <a href="/type/InputBusinessRecipients/">InputBusinessRecipients</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>existing_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>All existing private chats.</td></tr><tr><td><strong>new_chats</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>All new private chats.</td></tr><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>All private chats with contacts.</td></tr><tr><td><strong>non_contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>All private chats with non-contacts.</td></tr><tr><td><strong>exclude_selected</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If set, inverts the selection.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt;</td><td>Only private chats with the specified users.</td></tr></tbody></table>

### Type

[InputBusinessRecipients](/type/InputBusinessRecipients/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
