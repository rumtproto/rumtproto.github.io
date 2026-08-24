---
title: "encryptedChatDiscarded"
original: "https://core.telegram.org/constructor/encryptedChatDiscarded"
section: ref
description: "Discarded or deleted chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"encryptedChatDiscarded","url":"/constructor/encryptedChatDiscarded/"}]
layout: layout.njk
---

# encryptedChatDiscarded

Discarded or deleted chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedChatDiscarded/" class="current_page_link">encryptedChatDiscarded</a>#1e1c7c45 flags:<a href="/type/%23/">#</a> history_deleted:flags.0?true id:<a href="/type/int/">int</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>history_deleted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether both users of this secret chat should also remove all of its messages</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chat ID</td></tr></tbody></table>

### Type

[EncryptedChat](/type/EncryptedChat/)
