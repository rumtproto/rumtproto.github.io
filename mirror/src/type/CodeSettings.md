---
title: "CodeSettings"
original: "https://core.telegram.org/type/CodeSettings"
section: ref
description: "Settings for the code type to send"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"CodeSettings","url":"/type/CodeSettings/"}]
layout: layout.njk
---

# CodeSettings

Settings for the code type to send

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/codeSettings/">codeSettings</a>#ad253d78 flags:<a href="/type/%23/">#</a> allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; token:flags.8?<a href="/type/string/">string</a> app_sandbox:flags.8?<a href="/type/Bool/">Bool</a> = <a href="/type/CodeSettings/" class="current_page_link">CodeSettings</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/codeSettings/">codeSettings</a></td><td>Settings used by telegram servers for sending the confirm code.<br><br>Example implementations: <a href="https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java">telegram for android</a>, <a href="https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp">tdlib</a>.</td></tr></tbody></table>
