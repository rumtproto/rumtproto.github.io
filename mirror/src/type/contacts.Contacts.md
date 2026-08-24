---
title: "contacts.Contacts"
original: "https://core.telegram.org/type/contacts.Contacts"
section: ref
description: "Info on the current user's contact list."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.Contacts","url":"/type/contacts.Contacts/"}]
layout: layout.njk
---

# contacts.Contacts

Info on the current user's contact list.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.contactsNotModified/">contacts.contactsNotModified</a>#b74ba9d2 = <a href="/type/contacts.Contacts/" class="current_page_link">contacts.Contacts</a>;
<a href="/constructor/contacts.contacts/">contacts.contacts</a>#eae87e42 contacts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Contact/">Contact</a>&gt; saved_count:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Contacts/" class="current_page_link">contacts.Contacts</a>;

---functions---

<a href="/method/contacts.getContacts/">contacts.getContacts</a>#5dd69e12 hash:<a href="/type/long/">long</a> = <a href="/type/contacts.Contacts/" class="current_page_link">contacts.Contacts</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.contactsNotModified/">contacts.contactsNotModified</a></td><td>Contact list on the server is the same as the list on the client.</td></tr><tr><td><a href="/constructor/contacts.contacts/">contacts.contacts</a></td><td>The current user's contact list and info on users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getContacts/">contacts.getContacts</a></td><td>Returns the current user's contact list.</td></tr></tbody></table>
