---
title: "contacts.ContactBirthdays"
original: "https://core.telegram.org/type/contacts.ContactBirthdays"
section: ref
description: "Birthday information of our contacts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.ContactBirthdays","url":"/type/contacts.ContactBirthdays/"}]
layout: layout.njk
---

# contacts.ContactBirthdays

Birthday information of our contacts.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.contactBirthdays/">contacts.contactBirthdays</a>#114ff30d contacts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ContactBirthday/">ContactBirthday</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.ContactBirthdays/" class="current_page_link">contacts.ContactBirthdays</a>;

---functions---

<a href="/method/contacts.getBirthdays/">contacts.getBirthdays</a>#daeda864 = <a href="/type/contacts.ContactBirthdays/" class="current_page_link">contacts.ContactBirthdays</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.contactBirthdays/">contacts.contactBirthdays</a></td><td>Birthday information of our contacts.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getBirthdays/">contacts.getBirthdays</a></td><td>Fetch all users with birthdays that fall within +1/-1 days, relative to the current day: this method should be invoked by clients every 6-8 hours, and if the result is non-empty, it should be used to appropriately update locally cached birthday information in <a href="/constructor/user/">user</a>.<code>birthday</code>.<br><br><a href="/api/profile/#birthday">See here »</a> for more info.</td></tr></tbody></table>
