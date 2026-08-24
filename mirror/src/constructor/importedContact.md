---
title: "importedContact"
original: "https://core.telegram.org/constructor/importedContact"
section: ref
description: "Successfully imported contact."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"importedContact","url":"/constructor/importedContact/"}]
layout: layout.njk
---

# importedContact

Successfully imported contact.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/importedContact/" class="current_page_link">importedContact</a>#c13e3c50 user_id:<a href="/type/long/">long</a> client_id:<a href="/type/long/">long</a> = <a href="/type/ImportedContact/">ImportedContact</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User identifier</td></tr><tr><td><strong>client_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The contact's client identifier (passed to one of the <a href="/type/InputContact/">InputContact</a> constructors)</td></tr></tbody></table>

### Type

[ImportedContact](/type/ImportedContact/)

### Related pages

#### [InputContact](/type/InputContact/)

Object defines a contact from the user's phone book.
