---
title: "account.resetPasswordRequestedWait"
original: "https://core.telegram.org/constructor/account.resetPasswordRequestedWait"
section: ref
description: "You successfully requested a password reset, please wait until the specified date before finalizing the reset."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.resetPasswordRequestedWait","url":"/constructor/account.resetPasswordRequestedWait/"}]
layout: layout.njk
---

# account.resetPasswordRequestedWait

You successfully requested a password reset, please wait until the specified date before finalizing the reset.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.resetPasswordRequestedWait/" class="current_page_link">account.resetPasswordRequestedWait</a>#e9effc7d until_date:<a href="/type/int/">int</a> = <a href="/type/account.ResetPasswordResult/">account.ResetPasswordResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Wait until this date before finalizing the reset.</td></tr></tbody></table>

### Type

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)
