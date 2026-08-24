---
title: "autoSaveSettings"
original: "https://core.telegram.org/constructor/autoSaveSettings"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"autoSaveSettings","url":"/constructor/autoSaveSettings/"}]
layout: layout.njk
---

# autoSaveSettings

Media autosave settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/autoSaveSettings/" class="current_page_link">autoSaveSettings</a>#c84834ce flags:<a href="/type/%23/">#</a> photos:flags.0?true videos:flags.1?true video_max_size:flags.2?<a href="/type/long/">long</a> = <a href="/type/AutoSaveSettings/">AutoSaveSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>photos</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether photos should be autosaved to the gallery.</td></tr><tr><td><strong>videos</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether videos should be autosaved to the gallery.</td></tr><tr><td><strong>video_max_size</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>If set, specifies a size limit for autosavable videos</td></tr></tbody></table>

### Type

[AutoSaveSettings](/type/AutoSaveSettings/)
