---
title: "availableReaction"
original: "https://core.telegram.org/constructor/availableReaction"
section: ref
description: "Animations associated with a message reaction"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"availableReaction","url":"/constructor/availableReaction/"}]
layout: layout.njk
---

# availableReaction

Animations associated with a message reaction

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/availableReaction/" class="current_page_link">availableReaction</a>#c077ec01 flags:<a href="/type/%23/">#</a> inactive:flags.0?true premium:flags.2?true reaction:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> static_icon:<a href="/type/Document/">Document</a> appear_animation:<a href="/type/Document/">Document</a> select_animation:<a href="/type/Document/">Document</a> activate_animation:<a href="/type/Document/">Document</a> effect_animation:<a href="/type/Document/">Document</a> around_animation:flags.1?<a href="/type/Document/">Document</a> center_icon:flags.1?<a href="/type/Document/">Document</a> = <a href="/type/AvailableReaction/">AvailableReaction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>inactive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If not set, the reaction can be added to new messages and enabled in chats.</td></tr><tr><td><strong>premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this reaction can only be used by Telegram Premium users</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Reaction emoji</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Reaction description</td></tr><tr><td><strong>static_icon</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>Static icon for the reaction</td></tr><tr><td><strong>appear_animation</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>The animated sticker to show when the user opens the reaction dropdown</td></tr><tr><td><strong>select_animation</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>The animated sticker to show when the user hovers over the reaction</td></tr><tr><td><strong>activate_animation</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>The animated sticker to show when the reaction is chosen and activated</td></tr><tr><td><strong>effect_animation</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>The background effect (still an animated sticker) to play under the <code>activate_animation</code>, when the reaction is chosen and activated</td></tr><tr><td><strong>around_animation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Document/">Document</a></td><td>The animation that plays around the button when you press an existing reaction (played together with <code>center_icon</code>).</td></tr><tr><td><strong>center_icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Document/">Document</a></td><td>The animation of the emoji inside the button when you press an existing reaction (played together with <code>around_animation</code>).</td></tr></tbody></table>

### Type

[AvailableReaction](/type/AvailableReaction/)
