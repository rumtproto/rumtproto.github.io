---
title: "storiesStealthMode"
original: "https://core.telegram.org/constructor/storiesStealthMode"
section: ref
description: "Information about the current stealth mode session."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storiesStealthMode","url":"/constructor/storiesStealthMode/"}]
layout: layout.njk
---

# storiesStealthMode

Information about the current [stealth mode](/api/stories/#stealth-mode) session.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storiesStealthMode/" class="current_page_link">storiesStealthMode</a>#712e27fd flags:<a href="/type/%23/">#</a> active_until_date:flags.0?<a href="/type/int/">int</a> cooldown_until_date:flags.1?<a href="/type/int/">int</a> = <a href="/type/StoriesStealthMode/">StoriesStealthMode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>active_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>The date up to which stealth mode will be active.</td></tr><tr><td><strong>cooldown_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>The date starting from which the user will be allowed to re-enable stealth mode again.</td></tr></tbody></table>

### Type

[StoriesStealthMode](/type/StoriesStealthMode/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
