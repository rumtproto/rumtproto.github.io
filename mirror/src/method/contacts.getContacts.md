---
title: "contacts.getContacts"
original: "https://core.telegram.org/method/contacts.getContacts"
section: ref
description: "Returns the current user's contact list."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getContacts","url":"/method/contacts.getContacts/"}]
layout: layout.njk
---

# contacts.getContacts

Returns the current user's contact list.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.contactsNotModified/">contacts.contactsNotModified</a>#b74ba9d2 = <a href="/type/contacts.Contacts/">contacts.Contacts</a>;
<a href="/constructor/contacts.contacts/">contacts.contacts</a>#eae87e42 contacts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Contact/">Contact</a>&gt; saved_count:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Contacts/">contacts.Contacts</a>;
---functions---
<a href="/method/contacts.getContacts/" class="current_page_link">contacts.getContacts</a>#5dd69e12 hash:<a href="/type/long/">long</a> = <a href="/type/contacts.Contacts/">contacts.Contacts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.<br>Note that the hash is computed <a href="/api/offsets/#hash-generation">using the usual algorithm</a>, passing to the algorithm first the previously returned <a href="/constructor/contacts.contacts/">contacts.contacts</a>.<code>saved_count</code> field, then max <code>100000</code> sorted user IDs from the contact list, including the ID of the currently logged in user if it is saved as a contact.<br>Example: <a href="https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L7865">tdlib implementation</a>.</td></tr></tbody></table>

### Result

[contacts.Contacts](/type/contacts.Contacts/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [contacts.contacts](/constructor/contacts.contacts/)

The current user's contact list and info on users.
