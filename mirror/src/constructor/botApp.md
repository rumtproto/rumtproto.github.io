---
title: "botApp"
original: "https://core.telegram.org/constructor/botApp"
section: ref
description: "Contains information about a direct link Mini App."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botApp","url":"/constructor/botApp/"}]
layout: layout.njk
---

# botApp

Contains information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botApp/" class="current_page_link">botApp</a>#95fcd1d6 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> short_name:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:<a href="/type/Photo/">Photo</a> document:flags.0?<a href="/type/Document/">Document</a> hash:<a href="/type/long/">long</a> = <a href="/type/BotApp/">BotApp</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>bot mini app ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>bot mini app access hash</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>bot mini app short name, used to generate <a href="/api/links/#direct-mini-app-links">Direct Mini App deep links</a>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>bot mini app title.</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>bot mini app description.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/Photo/">Photo</a></td><td>bot mini app photo.</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Document/">Document</a></td><td>bot mini app animation.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash to pass to <a href="/method/messages.getBotApp/">messages.getBotApp</a>, to avoid refetching bot app info if it hasn't changed.</td></tr></tbody></table>

### Type

[BotApp](/type/BotApp/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [messages.getBotApp](/method/messages.getBotApp/)

Obtain information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps)

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
