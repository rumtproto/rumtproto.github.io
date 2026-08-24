---
title: "aicompose.saveTone"
original: "https://core.telegram.org/method/aicompose.saveTone"
section: ref
description: "Install or uninstall an AI composer tone », adding it to or removing it from the list of saved tones of the current user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"aicompose.saveTone","url":"/method/aicompose.saveTone/"}]
layout: layout.njk
---

# aicompose.saveTone

Install or uninstall an [AI composer tone »](/api/ai/#ai-compose-tones), adding it to or removing it from the list of saved tones of the current user.

Non-[Premium](/api/premium/) users may install up to [aicompose\_tone\_saved\_limit\_default »](/api/config/#aicompose-tone-saved-limit-default) tones, [Premium](/api/premium/) users up to [aicompose\_tone\_saved\_limit\_premium »](/api/config/#aicompose-tone-saved-limit-premium) tones.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="https://core.telegram.org/method/aicompose.saveTone?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/type/InputAiComposeTone/">InputAiComposeTone</a></td><td>The tone to save or unsave</td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>If <code>false</code>, installs (saves) the tone; if <code>true</code>, uninstalls (unsaves) it</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AICOMPOSE_TONE_INVALID</td><td>The specified tone is invalid.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
