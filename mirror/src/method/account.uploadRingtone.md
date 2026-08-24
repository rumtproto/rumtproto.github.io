---
title: "account.uploadRingtone"
original: "https://core.telegram.org/method/account.uploadRingtone"
section: ref
description: "Upload notification sound, use account.saveRingtone to convert it and add it to the list of saved notification sounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.uploadRingtone","url":"/method/account.uploadRingtone/"}]
layout: layout.njk
---

# account.uploadRingtone

Upload notification sound, use [account.saveRingtone](/method/account.saveRingtone/) to convert it and add it to the list of saved notification sounds.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentEmpty/">documentEmpty</a>#36f8c871 id:<a href="/type/long/">long</a> = <a href="/type/Document/">Document</a>;
<a href="/constructor/document/">document</a>#8fd4c4d8 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/long/">long</a> thumbs:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; video_thumbs:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt; dc_id:<a href="/type/int/">int</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/Document/">Document</a>;
---functions---
<a href="/method/account.uploadRingtone/" class="current_page_link">account.uploadRingtone</a>#831a83a2 file:<a href="/type/InputFile/">InputFile</a> file_name:<a href="/type/string/">string</a> mime_type:<a href="/type/string/">string</a> = <a href="/type/Document/">Document</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile/">InputFile</a></td><td>Notification sound</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>File name</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>MIME type of file</td></tr></tbody></table>

### Result

[Document](/type/Document/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RINGTONE_MIME_INVALID</td><td>The MIME type for the ringtone is invalid.</td></tr></tbody></table>

### Related pages

#### [account.saveRingtone](/method/account.saveRingtone/)

Save or remove saved notification sound.

If the notification sound is already in MP3 format, [account.savedRingtone](/constructor/account.savedRingtone/) will be returned.  
Otherwise, it will be automatically converted and a [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) will be returned, containing a new [document](/constructor/document/) object that should be used to refer to the ringtone from now on (ie when deleting it using the `unsave` parameter, or when downloading it).
