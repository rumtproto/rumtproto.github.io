---
title: "BotApp"
original: "https://core.telegram.org/type/BotApp"
section: ref
description: "Contains information about a direct link Mini App."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotApp","url":"/type/BotApp/"}]
layout: layout.njk
---

# BotApp

Contains information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botAppNotModified/">botAppNotModified</a>#5da674b7 = <a href="/type/BotApp/" class="current_page_link">BotApp</a>;
<a href="/constructor/botApp/">botApp</a>#95fcd1d6 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> short_name:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:<a href="/type/Photo/">Photo</a> document:flags.0?<a href="/type/Document/">Document</a> hash:<a href="/type/long/">long</a> = <a href="/type/BotApp/" class="current_page_link">BotApp</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botAppNotModified/">botAppNotModified</a></td><td>Bot app info hasn't changed.</td></tr><tr><td><a href="/constructor/botApp/">botApp</a></td><td>Contains information about a <a href="/api/bots/webapps/#direct-link-mini-apps">direct link Mini App</a>.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
