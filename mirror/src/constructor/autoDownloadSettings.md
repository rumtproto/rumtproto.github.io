---
title: "autoDownloadSettings"
original: "https://core.telegram.org/constructor/autoDownloadSettings"
section: ref
description: "Telegram users and channels can easily post and view stories through the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"autoDownloadSettings","url":"/constructor/autoDownloadSettings/"}]
layout: layout.njk
---

# autoDownloadSettings

Autodownload settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/autoDownloadSettings/" class="current_page_link">autoDownloadSettings</a>#baa57628 flags:<a href="/type/%23/">#</a> disabled:flags.0?true video_preload_large:flags.1?true audio_preload_next:flags.2?true phonecalls_less_data:flags.3?true stories_preload:flags.4?true photo_size_max:<a href="/type/int/">int</a> video_size_max:<a href="/type/long/">long</a> file_size_max:<a href="/type/long/">long</a> video_upload_maxbitrate:<a href="/type/int/">int</a> small_queue_active_operations_max:<a href="/type/int/">int</a> large_queue_active_operations_max:<a href="/type/int/">int</a> = <a href="/type/AutoDownloadSettings/">AutoDownloadSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Disable automatic media downloads?</td></tr><tr><td><strong>video_preload_large</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether to preload the first seconds of videos larger than the specified limit</td></tr><tr><td><strong>audio_preload_next</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether to preload the next audio track when you're listening to music</td></tr><tr><td><strong>phonecalls_less_data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether to enable data saving mode in phone calls</td></tr><tr><td><strong>stories_preload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether to preload <a href="/api/stories/">stories</a>; in particular, the first <a href="/constructor/documentAttributeVideo/">documentAttributeVideo</a>.<code>preload_prefix_size</code> bytes of story videos should be preloaded.</td></tr><tr><td><strong>photo_size_max</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum size of photos to preload</td></tr><tr><td><strong>video_size_max</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Maximum size of videos to preload</td></tr><tr><td><strong>file_size_max</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Maximum size of other files to preload</td></tr><tr><td><strong>video_upload_maxbitrate</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum suggested bitrate for <strong>uploading</strong> videos</td></tr><tr><td><strong>small_queue_active_operations_max</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>A limit, specifying the maximum number of files that should be downloaded in parallel from the same DC, for files smaller than 20MB.</td></tr><tr><td><strong>large_queue_active_operations_max</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>A limit, specifying the maximum number of files that should be downloaded in parallel from the same DC, for files bigger than 20MB.</td></tr></tbody></table>

### Type

[AutoDownloadSettings](/type/AutoDownloadSettings/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [documentAttributeVideo](/constructor/documentAttributeVideo/)

Defines a video
