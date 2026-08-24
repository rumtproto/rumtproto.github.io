---
title: "inputMediaUploadedDocument"
original: "https://core.telegram.org/constructor/inputMediaUploadedDocument"
section: ref
description: "How to transfer large data batches correctly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaUploadedDocument","url":"/constructor/inputMediaUploadedDocument/"}]
layout: layout.njk
---

# inputMediaUploadedDocument

New document

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaUploadedDocument/" class="current_page_link">inputMediaUploadedDocument</a>#37c9330 flags:<a href="/type/%23/">#</a> nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:<a href="/type/InputFile/">InputFile</a> thumb:flags.2?<a href="/type/InputFile/">InputFile</a> mime_type:<a href="/type/string/">string</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; stickers:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputDocument/">InputDocument</a>&gt; video_cover:flags.6?<a href="/type/InputPhoto/">InputPhoto</a> video_timestamp:flags.7?<a href="/type/int/">int</a> ttl_seconds:flags.1?<a href="/type/int/">int</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>nosound_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether to send the file as a video even if it doesn't have an audio track (i.e. if set, the <a href="/constructor/documentAttributeAnimated/">documentAttributeAnimated</a> attribute will <strong>not</strong> be set even for videos without audio)</td></tr><tr><td><strong>force_file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Force the media file to be uploaded as document</td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile/">InputFile</a></td><td>The <a href="/api/files/">uploaded file</a></td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputFile/">InputFile</a></td><td>Thumbnail of the document, uploaded as for the file</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>MIME type of document</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt;</td><td>Attributes that specify the type of the document (video, audio, voice, sticker, etc.)</td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputDocument/">InputDocument</a>&gt;</td><td>Attached stickers</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/InputPhoto/">InputPhoto</a></td><td>Start playing the video at the specified timestamp (seconds).</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/int/">int</a></td><td>Start playing the video at the specified timestamp (seconds).</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Time to live of self-destructing document, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the document immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)

### Related pages

#### [documentAttributeAnimated](/constructor/documentAttributeAnimated/)

Defines an animated GIF

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
