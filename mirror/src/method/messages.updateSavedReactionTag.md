---
title: "messages.updateSavedReactionTag"
original: "https://core.telegram.org/method/messages.updateSavedReactionTag"
section: ref
description: "Update the description of a saved message tag »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.updateSavedReactionTag","url":"/method/messages.updateSavedReactionTag/"}]
layout: layout.njk
---

# messages.updateSavedReactionTag

Update the [description of a saved message tag »](/api/saved-messages/#tags).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.updateSavedReactionTag/" class="current_page_link">messages.updateSavedReactionTag</a>#60297dec flags:<a href="/type/%23/">#</a> reaction:<a href="/type/Reaction/">Reaction</a> title:flags.0?<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction/">Reaction</a></td><td><a href="/api/reactions/">Reaction</a> associated to the tag</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Tag description, max 12 UTF-8 characters; to remove the description call the method without setting this flag.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr><tr><td>400</td><td>REACTION_INVALID</td><td>The specified reaction is invalid.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
