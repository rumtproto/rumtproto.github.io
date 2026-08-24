---
title: "account.SavedRingtones"
original: "https://core.telegram.org/type/account.SavedRingtones"
section: ref
description: "Contains a list of saved notification sounds"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.SavedRingtones","url":"/type/account.SavedRingtones/"}]
layout: layout.njk
---

# account.SavedRingtones

Contains a list of saved notification sounds

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.savedRingtonesNotModified/">account.savedRingtonesNotModified</a>#fbf6e8b1 = <a href="/type/account.SavedRingtones/" class="current_page_link">account.SavedRingtones</a>;
<a href="/constructor/account.savedRingtones/">account.savedRingtones</a>#c1e92cc5 hash:<a href="/type/long/">long</a> ringtones:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/account.SavedRingtones/" class="current_page_link">account.SavedRingtones</a>;

---functions---

<a href="/method/account.getSavedRingtones/">account.getSavedRingtones</a>#e1902288 hash:<a href="/type/long/">long</a> = <a href="/type/account.SavedRingtones/" class="current_page_link">account.SavedRingtones</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.savedRingtonesNotModified/">account.savedRingtonesNotModified</a></td><td>The notification sound list hasn't changed.</td></tr><tr><td><a href="/constructor/account.savedRingtones/">account.savedRingtones</a></td><td>A list of saved notification sounds</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getSavedRingtones/">account.getSavedRingtones</a></td><td>Fetch saved notification sounds</td></tr></tbody></table>
