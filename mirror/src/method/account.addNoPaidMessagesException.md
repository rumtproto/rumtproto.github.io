---
title: "account.addNoPaidMessagesException"
original: "https://core.telegram.org/method/account.addNoPaidMessagesException"
section: ref
description: "Allow a user to send us messages without paying if paid messages » are enabled."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.addNoPaidMessagesException","url":"/method/account.addNoPaidMessagesException/"}]
layout: layout.njk
---

# account.addNoPaidMessagesException

Allow a user to send us messages without paying if [paid messages »](/api/paid-messages/) are enabled.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 205. <a href="/method/account.addNoPaidMessagesException/">Switch »</a></code></pre>

### Parameters

This constructor does not require any parameters.

### Result

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Both users and bots can use this method

### Related pages

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
