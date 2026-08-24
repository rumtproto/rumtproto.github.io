---
title: "messageMediaDocument"
original: "https://core.telegram.org/constructor/messageMediaDocument"
section: ref
description: "Document (video, audio, voice, sticker, any media type except photo)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaDocument","url":"/constructor/messageMediaDocument/"}]
layout: layout.njk
---

# messageMediaDocument

Document (video, audio, voice, sticker, any media type except photo)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaDocument/" class="current_page_link">messageMediaDocument</a>#52d8ccd9 flags:<a href="/type/%23/">#</a> nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?<a href="/type/Document/">Document</a> alt_documents:flags.5?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; video_cover:flags.9?<a href="/type/Photo/">Photo</a> video_timestamp:flags.10?<a href="/type/int/">int</a> ttl_seconds:flags.2?<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>nopremium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this is a normal sticker, if not set this is a premium sticker and a premium sticker animation must be played.</td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether this is a video.</td></tr><tr><td><strong>round</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether this is a round video.</td></tr><tr><td><strong>voice</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Whether this is a voice message.</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Document/">Document</a></td><td>Attached document</td></tr><tr><td><strong>alt_documents</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Videos only, contains alternative qualities of the video.</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/Photo/">Photo</a></td><td>Custom video cover.</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>Start playing the video at the specified timestamp (seconds).</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Time to live of self-destructing document, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the document immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)
