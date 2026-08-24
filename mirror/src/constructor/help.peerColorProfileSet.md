---
title: "help.peerColorProfileSet"
original: "https://core.telegram.org/constructor/help.peerColorProfileSet"
section: ref
description: "Represents a color palette that can be used in profile pages »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.peerColorProfileSet","url":"/constructor/help.peerColorProfileSet/"}]
layout: layout.njk
---

# help.peerColorProfileSet

Represents a [color palette that can be used in profile pages »](/api/colors/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.peerColorProfileSet/" class="current_page_link">help.peerColorProfileSet</a>#767d61eb palette_colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; bg_colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; story_colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/help.PeerColorSet/">help.PeerColorSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>palette_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>A list of 1-2 colors in RGB format, shown in the color palette settings to describe the current palette.</td></tr><tr><td><strong>bg_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>A list of 1-2 colors in RGB format describing the colors used to generate the actual background used in the profile page.</td></tr><tr><td><strong>story_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>A list of 2 colors in RGB format describing the colors of the gradient used for the unread active story indicator around the profile photo.</td></tr></tbody></table>

### Type

[help.PeerColorSet](/type/help.PeerColorSet/)

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
