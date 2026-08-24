---
title: "messages.TranscribedAudio"
original: "https://core.telegram.org/type/messages.TranscribedAudio"
section: ref
description: "Transcribed text from a voice message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.TranscribedAudio","url":"/type/messages.TranscribedAudio/"}]
layout: layout.njk
---

# messages.TranscribedAudio

[Transcribed text](/api/transcribe/) from a voice message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.transcribedAudio/">messages.transcribedAudio</a>#cfb9d957 flags:<a href="/type/%23/">#</a> pending:flags.0?true transcription_id:<a href="/type/long/">long</a> text:<a href="/type/string/">string</a> trial_remains_num:flags.1?<a href="/type/int/">int</a> trial_remains_until_date:flags.1?<a href="/type/int/">int</a> = <a href="/type/messages.TranscribedAudio/" class="current_page_link">messages.TranscribedAudio</a>;

---functions---

<a href="/method/messages.transcribeAudio/">messages.transcribeAudio</a>#269e9a49 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/messages.TranscribedAudio/" class="current_page_link">messages.TranscribedAudio</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.transcribedAudio/">messages.transcribedAudio</a></td><td><a href="/api/transcribe/">Transcribed text from a voice message »</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.transcribeAudio/">messages.transcribeAudio</a></td><td><a href="/api/transcribe/">Transcribe voice message</a></td></tr></tbody></table>

### Related pages

#### [Voice message transcription](/api/transcribe/)

How to transcribe voice messages.
