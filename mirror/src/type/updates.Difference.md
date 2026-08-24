---
title: "updates.Difference"
original: "https://core.telegram.org/type/updates.Difference"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.Difference","url":"/type/updates.Difference/"}]
layout: layout.njk
---

# updates.Difference

Occurred changes.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.differenceEmpty/">updates.differenceEmpty</a>#5d75a138 date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/updates.Difference/" class="current_page_link">updates.Difference</a>;
<a href="/constructor/updates.difference/">updates.difference</a>#f49ca0 new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; new_encrypted_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EncryptedMessage/">EncryptedMessage</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/updates.Difference/" class="current_page_link">updates.Difference</a>;
<a href="/constructor/updates.differenceSlice/">updates.differenceSlice</a>#a8fb1981 new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; new_encrypted_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EncryptedMessage/">EncryptedMessage</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; intermediate_state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/updates.Difference/" class="current_page_link">updates.Difference</a>;
<a href="/constructor/updates.differenceTooLong/">updates.differenceTooLong</a>#4afe8f6d pts:<a href="/type/int/">int</a> = <a href="/type/updates.Difference/" class="current_page_link">updates.Difference</a>;

---functions---

<a href="/method/updates.getDifference/">updates.getDifference</a>#19c2f763 flags:<a href="/type/%23/">#</a> pts:<a href="/type/int/">int</a> pts_limit:flags.1?<a href="/type/int/">int</a> pts_total_limit:flags.0?<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> qts:<a href="/type/int/">int</a> qts_limit:flags.2?<a href="/type/int/">int</a> = <a href="/type/updates.Difference/" class="current_page_link">updates.Difference</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/updates.differenceEmpty/">updates.differenceEmpty</a></td><td>No events.</td></tr><tr><td><a href="/constructor/updates.difference/">updates.difference</a></td><td>Full list of occurred events.</td></tr><tr><td><a href="/constructor/updates.differenceSlice/">updates.differenceSlice</a></td><td>Incomplete list of occurred events.</td></tr><tr><td><a href="/constructor/updates.differenceTooLong/">updates.differenceTooLong</a></td><td>The difference is <a href="/api/updates/#recovering-gaps">too long</a>, and the specified state must be used to refetch updates.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/updates.getDifference/">updates.getDifference</a></td><td>Get new <a href="/api/updates/">updates</a>.</td></tr></tbody></table>
