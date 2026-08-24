---
title: "contacts.getBirthdays"
original: "https://core.telegram.org/method/contacts.getBirthdays"
section: ref
description: "Fetch all users with birthdays that fall within +1/-1 days, relative to the current day: this method should be invoked by clients every 6-8 hours, and if the result is non-empty,…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getBirthdays","url":"/method/contacts.getBirthdays/"}]
layout: layout.njk
---

# contacts.getBirthdays

Fetch all users with birthdays that fall within +1/-1 days, relative to the current day: this method should be invoked by clients every 6-8 hours, and if the result is non-empty, it should be used to appropriately update locally cached birthday information in [user](/constructor/user/).`birthday`.

[See here »](/api/profile/#birthday) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.contactBirthdays/">contacts.contactBirthdays</a>#114ff30d contacts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ContactBirthday/">ContactBirthday</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.ContactBirthdays/">contacts.ContactBirthdays</a>;
---functions---
<a href="/method/contacts.getBirthdays/" class="current_page_link">contacts.getBirthdays</a>#daeda864 = <a href="/type/contacts.ContactBirthdays/">contacts.ContactBirthdays</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[contacts.ContactBirthdays](/type/contacts.ContactBirthdays/)

### Only users can use this method

### Related pages

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](/api/peers/).

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
