---
title: "game"
original: "https://core.telegram.org/constructor/game"
section: ref
description: "Indicates an already sent game"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"game","url":"/constructor/game/"}]
layout: layout.njk
---

# game

Indicates an already sent game

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/game/" class="current_page_link">game</a>#bdf9653b flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> short_name:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:<a href="/type/Photo/">Photo</a> document:flags.0?<a href="/type/Document/">Document</a> = <a href="/type/Game/">Game</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the game</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash of the game</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name for the game</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title of the game</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Game description</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/Photo/">Photo</a></td><td>Game preview</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Document/">Document</a></td><td>Optional attached document</td></tr></tbody></table>

### Type

[Game](/type/Game/)
