---
title: "OutboxReadDate"
original: "https://core.telegram.org/type/OutboxReadDate"
section: ref
description: "Exact read date of a private message we sent to another user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"OutboxReadDate","url":"/type/OutboxReadDate/"}]
layout: layout.njk
---

# OutboxReadDate

Exact read date of a private message we sent to another user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/outboxReadDate/">outboxReadDate</a>#3bb842ac date:<a href="/type/int/">int</a> = <a href="/type/OutboxReadDate/" class="current_page_link">OutboxReadDate</a>;

---functions---

<a href="/method/messages.getOutboxReadDate/">messages.getOutboxReadDate</a>#8c4bfe5d peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/OutboxReadDate/" class="current_page_link">OutboxReadDate</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/outboxReadDate/">outboxReadDate</a></td><td>Exact read date of a private message we sent to another user.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getOutboxReadDate/">messages.getOutboxReadDate</a></td><td>Get the exact read date of one of our messages, sent to a private chat with another user.<br><br>Can be only done for private outgoing messages not older than <a href="/api/config/#pm-read-date-expire-period">appConfig.pm_read_date_expire_period »</a>.<br><br>If the <code>peer</code>'s <a href="/constructor/userFull/">userFull</a>.<code>read_dates_private</code> flag is set, we will not be able to fetch the exact read date of messages we send to them, and a <code>USER_PRIVACY_RESTRICTED</code> RPC error will be emitted.<br>The exact read date of messages might still be unavailable for other reasons, see <a href="/constructor/globalPrivacySettings/">here »</a> for more info.<br>To set <a href="/constructor/userFull/">userFull</a>.<code>read_dates_private</code> for ourselves invoke <a href="/method/account.setGlobalPrivacySettings/">account.setGlobalPrivacySettings</a>, setting the <code>settings.hide_read_marks</code> flag.</td></tr></tbody></table>
