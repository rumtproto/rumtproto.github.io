---
title: "webAuthorization"
original: "https://core.telegram.org/constructor/webAuthorization"
section: ref
description: "Represents a bot logged in using the Telegram login widget"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webAuthorization","url":"/constructor/webAuthorization/"}]
layout: layout.njk
---

# webAuthorization

Represents a bot logged in using the [Telegram login widget](/bots/telegram-login/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webAuthorization/" class="current_page_link">webAuthorization</a>#a6f8f452 hash:<a href="/type/long/">long</a> bot_id:<a href="/type/long/">long</a> domain:<a href="/type/string/">string</a> browser:<a href="/type/string/">string</a> platform:<a href="/type/string/">string</a> date_created:<a href="/type/int/">int</a> date_active:<a href="/type/int/">int</a> ip:<a href="/type/string/">string</a> region:<a href="/type/string/">string</a> = <a href="/type/WebAuthorization/">WebAuthorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Authorization hash</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Bot ID</td></tr><tr><td><strong>domain</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The domain name of the website on which the user has logged in.</td></tr><tr><td><strong>browser</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Browser user-agent</td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Platform</td></tr><tr><td><strong>date_created</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the web session created</td></tr><tr><td><strong>date_active</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the web session last active</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>IP address</td></tr><tr><td><strong>region</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Region, determined from IP address</td></tr></tbody></table>

### Type

[WebAuthorization](/type/WebAuthorization/)

### Related pages

#### [Telegram Login Widget](/bots/telegram-login/)
