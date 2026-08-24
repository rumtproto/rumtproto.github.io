---
title: "attachMenuBotIcon"
original: "https://core.telegram.org/constructor/attachMenuBotIcon"
section: ref
description: "Represents an attachment menu icon for bot mini apps »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"attachMenuBotIcon","url":"/constructor/attachMenuBotIcon/"}]
layout: layout.njk
---

# attachMenuBotIcon

Represents an attachment menu icon for [bot mini apps »](/api/bots/attach/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/attachMenuBotIcon/" class="current_page_link">attachMenuBotIcon</a>#b2a7386b flags:<a href="/type/%23/">#</a> name:<a href="/type/string/">string</a> icon:<a href="/type/Document/">Document</a> colors:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuBotIconColor/">AttachMenuBotIconColor</a>&gt; = <a href="/type/AttachMenuBotIcon/">AttachMenuBotIcon</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>One of the following values: note that animated icons must be played when the user clicks on the button, activating the bot mini app.<br><br><code>default_static</code> - Default attachment menu icon in SVG format<br><code>placeholder_static</code> - Default placeholder for opened Web Apps in SVG format<br><code>ios_static</code> - Attachment menu icon in SVG format for the official iOS app<br><code>ios_animated</code> - Animated attachment menu icon in TGS format for the official iOS app<br><code>android_animated</code> - Animated attachment menu icon in TGS format for the official Android app<br><code>macos_animated</code> - Animated attachment menu icon in TGS format for the official native Mac OS app<br><code>ios_side_menu_static</code> - Side menu icon in PNG format for the official iOS app<br><code>android_side_menu_static</code> - Side menu icon in SVG format for the official android app<br><code>macos_side_menu_static</code> - Side menu icon in PNG format for the official native Mac OS app</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>The actual icon file.</td></tr><tr><td><strong>colors</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AttachMenuBotIconColor/">AttachMenuBotIconColor</a>&gt;</td><td>Attachment menu icon colors.</td></tr></tbody></table>

### Type

[AttachMenuBotIcon](/type/AttachMenuBotIcon/)

### Related pages

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.
