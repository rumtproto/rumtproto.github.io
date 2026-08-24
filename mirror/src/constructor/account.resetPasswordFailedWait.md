---
title: "account.resetPasswordFailedWait"
original: "https://core.telegram.org/constructor/account.resetPasswordFailedWait"
section: ref
description: "You recently requested a password reset that was canceled, please wait until the specified date before requesting another reset."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.resetPasswordFailedWait","url":"/constructor/account.resetPasswordFailedWait/"}]
layout: layout.njk
---

# account.resetPasswordFailedWait

You recently requested a password reset that was canceled, please wait until the specified date before requesting another reset.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.resetPasswordFailedWait/" class="current_page_link">account.resetPasswordFailedWait</a>#e3779861 retry_date:<a href="/type/int/">int</a> = <a href="/type/account.ResetPasswordResult/">account.ResetPasswordResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>retry_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Wait until this date before requesting another reset.</td></tr></tbody></table>

### Type

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)
