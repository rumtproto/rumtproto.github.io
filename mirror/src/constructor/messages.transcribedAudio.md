---
title: "messages.transcribedAudio"
original: "https://core.telegram.org/constructor/messages.transcribedAudio"
section: ref
description: "Transcribed text from a voice message »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.transcribedAudio","url":"/constructor/messages.transcribedAudio/"}]
layout: layout.njk
---

# messages.transcribedAudio

[Transcribed text from a voice message »](/api/transcribe/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.transcribedAudio/" class="current_page_link">messages.transcribedAudio</a>#cfb9d957 flags:<a href="/type/%23/">#</a> pending:flags.0?true transcription_id:<a href="/type/long/">long</a> text:<a href="/type/string/">string</a> trial_remains_num:flags.1?<a href="/type/int/">int</a> trial_remains_until_date:flags.1?<a href="/type/int/">int</a> = <a href="/type/messages.TranscribedAudio/">messages.TranscribedAudio</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the transcription is partial because audio transcription is still in progress, if set the user may receive further <a href="/constructor/updateTranscribedAudio/">updateTranscribedAudio</a> updates with the updated transcription.</td></tr><tr><td><strong>transcription_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Transcription ID</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Transcripted text</td></tr><tr><td><strong>trial_remains_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>For non-<a href="/api/premium/">Premium</a> users, this flag will be set, indicating the remaining transcriptions in the free trial period.</td></tr><tr><td><strong>trial_remains_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>For non-<a href="/api/premium/">Premium</a> users, this flag will be set, indicating the date when the <code>trial_remains_num</code> counter will be reset to the maximum value of <a href="/api/config/#transcribe-audio-trial-weekly-number">transcribe_audio_trial_weekly_number</a>.</td></tr></tbody></table>

### Type

[messages.TranscribedAudio](/type/messages.TranscribedAudio/)

### Related pages

#### [updateTranscribedAudio](/constructor/updateTranscribedAudio/)

A pending [voice message transcription »](/api/transcribe/) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Voice message transcription](/api/transcribe/)

How to transcribe voice messages.
