---
title: "InputUser"
original: "https://core.telegram.org/type/InputUser"
section: ref
description: "Defines a user for subsequent interaction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputUser","url":"/type/InputUser/"}]
layout: layout.njk
---

# InputUser

Defines a user for subsequent interaction.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputUserEmpty/">inputUserEmpty</a>#b98886cf = <a href="/type/InputUser/" class="current_page_link">InputUser</a>;
<a href="/constructor/inputUserSelf/">inputUserSelf</a>#f7c1b13f = <a href="/type/InputUser/" class="current_page_link">InputUser</a>;
<a href="/constructor/inputUser/">inputUser</a>#f21158c6 user_id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputUser/" class="current_page_link">InputUser</a>;
<a href="/constructor/inputUserFromMessage/">inputUserFromMessage</a>#1da448e2 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> = <a href="/type/InputUser/" class="current_page_link">InputUser</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputUserEmpty/">inputUserEmpty</a></td><td>Empty constructor, does not define a user.</td></tr><tr><td><a href="/constructor/inputUserSelf/">inputUserSelf</a></td><td>Defines the current user.</td></tr><tr><td><a href="/constructor/inputUser/">inputUser</a></td><td>Defines a user for further interaction.</td></tr><tr><td><a href="/constructor/inputUserFromMessage/">inputUserFromMessage</a></td><td>Defines a <a href="/api/min/">min</a> user that was seen in a certain message of a certain chat.</td></tr></tbody></table>
