---
title: "updateNewAuthorization"
original: "https://core.telegram.org/constructor/updateNewAuthorization"
section: ref
description: "A new session logged into the current user's account through an unknown device."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateNewAuthorization","url":"/constructor/updateNewAuthorization/"}]
layout: layout.njk
---

# updateNewAuthorization

A new session logged into the current user's account through an unknown device.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateNewAuthorization/" class="current_page_link">updateNewAuthorization</a>#8951abef flags:<a href="/type/%23/">#</a> unconfirmed:flags.0?true hash:<a href="/type/long/">long</a> date:flags.0?<a href="/type/int/">int</a> device:flags.0?<a href="/type/string/">string</a> location:flags.0?<a href="/type/string/">string</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>unconfirmed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the session is <a href="/api/auth/#confirming-login">unconfirmed, see here »</a> for more info.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Authorization date</td></tr><tr><td><strong>device</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Name of device, for example <em>Android</em></td></tr><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Location, for example <em>USA, NY (IP=1.2.3.4)</em></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
