---
title: "messageMediaContact"
original: "https://core.telegram.org/constructor/messageMediaContact"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaContact","url":"/constructor/messageMediaContact/"}]
layout: layout.njk
---

# messageMediaContact

Attached contact.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaContact/" class="current_page_link">messageMediaContact</a>#70322949 phone_number:<a href="/type/string/">string</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> vcard:<a href="/type/string/">string</a> user_id:<a href="/type/long/">long</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contact's first name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contact's last name</td></tr><tr><td><strong>vcard</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>VCARD of contact</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User identifier or <code>0</code>, if the user with the given phone number is not registered</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)
