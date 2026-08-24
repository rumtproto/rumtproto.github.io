---
title: "users.getRequirementsToContact"
original: "https://core.telegram.org/method/users.getRequirementsToContact"
section: ref
description: "Check whether we can write to the specified users, used to implement bulk checks for Premium-only messages » and paid messages »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"users.getRequirementsToContact","url":"/method/users.getRequirementsToContact/"}]
layout: layout.njk
---

# users.getRequirementsToContact

Check whether we can write to the specified users, used to implement bulk checks for [Premium-only messages »](/api/privacy/#require-premium-for-new-non-contact-users) and [paid messages »](/api/paid-messages/).

For each input user, returns a [RequirementToContact](/type/RequirementToContact/) constructor (at the same offset in the vector) containing requirements to contact them.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/users.getRequirementsToContact/" class="current_page_link">users.getRequirementsToContact</a>#d89a83a3 id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RequirementToContact/">RequirementToContact</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt;</td><td>Users to check.</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[RequirementToContact](/type/RequirementToContact/)\>

### Only users can use this method

### Related pages

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [RequirementToContact](/type/RequirementToContact/)

Specifies a requirement that must be satisfied in order to contact a user.
