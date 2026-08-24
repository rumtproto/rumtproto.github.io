---
title: "updateTranscribedAudio"
original: "https://core.telegram.org/constructor/updateTranscribedAudio"
section: ref
description: "A pending voice message transcription » initiated with messages.transcribeAudio was updated."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateTranscribedAudio","url":"/constructor/updateTranscribedAudio/"}]
layout: layout.njk
---

# updateTranscribedAudio

A pending [voice message transcription »](/api/transcribe/) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateTranscribedAudio/" class="current_page_link">updateTranscribedAudio</a>#84cd5a flags:<a href="/type/%23/">#</a> pending:flags.0?true peer:<a href="/type/Peer/">Peer</a> msg_id:<a href="/type/int/">int</a> transcription_id:<a href="/type/long/">long</a> text:<a href="/type/string/">string</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this transcription is still pending and further <a href="/constructor/updateTranscribedAudio/">updateTranscribedAudio</a> about it will be sent in the future.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer of the transcribed message</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Transcribed message ID</td></tr><tr><td><strong>transcription_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Transcription ID</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Transcribed text</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [updateTranscribedAudio](/constructor/updateTranscribedAudio/)

A pending [voice message transcription »](/api/transcribe/) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated.

#### [Voice message transcription](/api/transcribe/)

How to transcribe voice messages.

#### [messages.transcribeAudio](/method/messages.transcribeAudio/)

[Transcribe voice message](/api/transcribe/)
