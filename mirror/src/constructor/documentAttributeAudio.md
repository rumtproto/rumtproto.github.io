---
title: "documentAttributeAudio"
original: "https://core.telegram.org/constructor/documentAttributeAudio"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"documentAttributeAudio","url":"/constructor/documentAttributeAudio/"}]
layout: layout.njk
---

# documentAttributeAudio

Represents an audio file

#### [End-to-end schema](/schema/end-to-end/)

```
===23===
documentAttributeAudio#051448e5 duration:int = DocumentAttribute;

===45===
documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute;

===46===
documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentAttributeAudio/" class="current_page_link">documentAttributeAudio</a>#9852f9c6 flags:<a href="/type/%23/">#</a> voice:flags.10?true duration:<a href="/type/int/">int</a> title:flags.0?<a href="/type/string/">string</a> performer:flags.1?<a href="/type/string/">string</a> waveform:flags.2?<a href="/type/bytes/">bytes</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>voice</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>Whether this is a voice message</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration in seconds</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Name of song</td></tr><tr><td><strong>performer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Performer</td></tr><tr><td><strong>waveform</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/bytes/">bytes</a></td><td>Waveform: consists in a series of bitpacked 5-bit values.<br>Example implementation: <a href="https://github.com/DrKLO/Telegram/blob/4d7a3a40c88ce28a211aa2814e9569389fc40567/TMessagesProj/jni/audio.c#L562">android</a>.</td></tr></tbody></table>

### Type

[DocumentAttribute](/type/DocumentAttribute/)
