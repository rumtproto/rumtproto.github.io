---
title: "inputPhoneContact"
original: "https://core.telegram.org/constructor/inputPhoneContact"
section: ref
description: "Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPhoneContact","url":"/constructor/inputPhoneContact/"}]
layout: layout.njk
---

# inputPhoneContact

Phone contact.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPhoneContact/" class="current_page_link">inputPhoneContact</a>#6a1dc4be flags:<a href="/type/%23/">#</a> client_id:<a href="/type/long/">long</a> phone:<a href="/type/string/">string</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> note:flags.0?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/InputContact/">InputContact</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>client_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>An arbitrary 64-bit integer: it should be set, for example, to an incremental number when using <a href="/method/contacts.importContacts/">contacts.importContacts</a>, in order to retry importing only the contacts that weren't imported successfully, according to the client_ids returned in <a href="/constructor/contacts.importedContacts/">contacts.importedContacts</a>.<code>retry_contacts</code>.</td></tr><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contact's first name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contact's last name</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>A private note for this contact, only visible to us; see <a href="/api/contacts/#private-notes-for-contacts">here »</a> for more info on contact notes.</td></tr></tbody></table>

### Type

[InputContact](/type/InputContact/)

### Related pages

#### [contacts.importContacts](/method/contacts.importContacts/)

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.

Use [contacts.addContact](/method/contacts.addContact/) to add Telegram contacts without actually using their phone number.

#### [contacts.importedContacts](/constructor/contacts.importedContacts/)

Info on successfully imported contacts.

#### [Contact list](/api/contacts/)

Working with contacts.
