---
title: "savedReactionTag"
original: "https://core.telegram.org/constructor/savedReactionTag"
section: ref
description: "Info about a saved message reaction tag »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"savedReactionTag","url":"/constructor/savedReactionTag/"}]
layout: layout.njk
---

# savedReactionTag

Info about a [saved message reaction tag »](/api/saved-messages/#tags).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/savedReactionTag/" class="current_page_link">savedReactionTag</a>#cb6ff828 flags:<a href="/type/%23/">#</a> reaction:<a href="/type/Reaction/">Reaction</a> title:flags.0?<a href="/type/string/">string</a> count:<a href="/type/int/">int</a> = <a href="/type/SavedReactionTag/">SavedReactionTag</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction/">Reaction</a></td><td><a href="/api/reactions/">Reaction</a> associated to the tag.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Custom tag name assigned by the user (max 12 UTF-8 chars).</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of messages tagged with this tag.</td></tr></tbody></table>

### Type

[SavedReactionTag](/type/SavedReactionTag/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
