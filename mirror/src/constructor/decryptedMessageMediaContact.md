---
title: "decryptedMessageMediaContact"
original: "https://core.telegram.org/constructor/decryptedMessageMediaContact"
section: ref
description: "Contact attached to an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageMediaContact","url":"/constructor/decryptedMessageMediaContact/"}]
layout: layout.njk
---

# decryptedMessageMediaContact

Contact attached to an encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessageMediaContact/" class="current_page_link">decryptedMessageMediaContact</a>#588a0a97 phone_number:<a href="/type/string/">string</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> user_id:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contact's first name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contact's last name</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Telegram User ID of signed-up contact</td></tr></tbody></table>

### Type

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
