---
title: "attachMenuBotIconColor"
original: "https://core.telegram.org/constructor/attachMenuBotIconColor"
section: ref
description: "Represents an attachment menu icon color for bot mini apps »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"attachMenuBotIconColor","url":"/constructor/attachMenuBotIconColor/"}]
layout: layout.njk
---

# attachMenuBotIconColor

Represents an attachment menu icon color for [bot mini apps »](/api/bots/attach/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/attachMenuBotIconColor/" class="current_page_link">attachMenuBotIconColor</a>#4576f3f0 name:<a href="/type/string/">string</a> color:<a href="/type/int/">int</a> = <a href="/type/AttachMenuBotIconColor/">AttachMenuBotIconColor</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>One of the following values:<br><code>light_icon</code> - Color of the attachment menu icon (light mode)<br><code>light_text</code> - Color of the attachment menu label, once selected (light mode)<br><code>dark_icon</code> - Color of the attachment menu icon (dark mode)<br><code>dark_text</code> - Color of the attachment menu label, once selected (dark mode)</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Color in RGB24 format</td></tr></tbody></table>

### Type

[AttachMenuBotIconColor](/type/AttachMenuBotIconColor/)

### Related pages

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
