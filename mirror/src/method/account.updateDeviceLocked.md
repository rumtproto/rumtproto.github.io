---
title: "account.updateDeviceLocked"
original: "https://core.telegram.org/method/account.updateDeviceLocked"
section: ref
description: "When client-side passcode lock feature is enabled, will not show message texts in incoming PUSH notifications."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateDeviceLocked","url":"/method/account.updateDeviceLocked/"}]
layout: layout.njk
---

# account.updateDeviceLocked

When client-side passcode lock feature is enabled, will not show message texts in incoming [PUSH notifications](/api/push-updates/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.updateDeviceLocked/" class="current_page_link">account.updateDeviceLocked</a>#38df3532 period:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Inactivity period after which to start hiding message texts in <a href="/api/push-updates/">PUSH notifications</a>.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Handling PUSH-notifications](/api/push-updates/)

How to subscribe to and handle PUSH notifications
