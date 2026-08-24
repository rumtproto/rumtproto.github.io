---
title: "myBoost"
original: "https://core.telegram.org/constructor/myBoost"
section: ref
description: "Contains information about a single boost slot »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"myBoost","url":"/constructor/myBoost/"}]
layout: layout.njk
---

# myBoost

Contains information about a single [boost slot »](/api/boost/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/myBoost/" class="current_page_link">myBoost</a>#c448415c flags:<a href="/type/%23/">#</a> slot:<a href="/type/int/">int</a> peer:flags.0?<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> expires:<a href="/type/int/">int</a> cooldown_until_date:flags.1?<a href="/type/int/">int</a> = <a href="/type/MyBoost/">MyBoost</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>slot</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/boost/">Boost slot ID »</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Peer/">Peer</a></td><td>If set, indicates this slot is currently occupied, i.e. we are <a href="/api/boost/">boosting</a> this peer.<br>Note that we can assign multiple boost slots to the same peer.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When (unixtime) we started boosting the <code>peer</code>, <code>0</code> otherwise.</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Indicates the (unixtime) expiration date of the boost in <code>peer</code> (<code>0</code> if <code>peer</code> is not set).</td></tr><tr><td><strong>cooldown_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>If <code>peer</code> is set, indicates the (unixtime) date after which this boost can be reassigned to another channel.</td></tr></tbody></table>

### Type

[MyBoost](/type/MyBoost/)

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
