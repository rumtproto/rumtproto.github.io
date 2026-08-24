---
title: "contacts.ImportedContacts"
original: "https://core.telegram.org/type/contacts.ImportedContacts"
section: ref
description: "Object contains info on successfully imported contacts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.ImportedContacts","url":"/type/contacts.ImportedContacts/"}]
layout: layout.njk
---

# contacts.ImportedContacts

Object contains info on successfully imported contacts.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.importedContacts/">contacts.importedContacts</a>#77d01c3b imported:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ImportedContact/">ImportedContact</a>&gt; popular_invites:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PopularContact/">PopularContact</a>&gt; retry_contacts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.ImportedContacts/" class="current_page_link">contacts.ImportedContacts</a>;

---functions---

<a href="/method/contacts.importContacts/">contacts.importContacts</a>#2c800be5 contacts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputContact/">InputContact</a>&gt; = <a href="/type/contacts.ImportedContacts/" class="current_page_link">contacts.ImportedContacts</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.importedContacts/">contacts.importedContacts</a></td><td>Info on successfully imported contacts.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.importContacts/">contacts.importContacts</a></td><td>Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.<br><br>Use <a href="/method/contacts.addContact/">contacts.addContact</a> to add Telegram contacts without actually using their phone number.</td></tr></tbody></table>
