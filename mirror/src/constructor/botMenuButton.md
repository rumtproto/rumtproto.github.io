---
title: "botMenuButton"
original: "https://core.telegram.org/constructor/botMenuButton"
section: ref
description: "Bot menu button that opens a web app when clicked."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botMenuButton","url":"/constructor/botMenuButton/"}]
layout: layout.njk
---

# botMenuButton

[Bot menu button](/api/bots/menu/) that opens a [web app](/api/bots/webapps/) when clicked.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botMenuButton/" class="current_page_link">botMenuButton</a>#c7b57ce6 text:<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> = <a href="/type/BotMenuButton/">BotMenuButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title to be displayed on the menu button instead of 'Menu'</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>URL of a <a href="/api/bots/webapps/">web app</a> to open when the user clicks on the button</td></tr></tbody></table>

### Type

[BotMenuButton](/type/BotMenuButton/)

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Bot menu button](/api/bots/menu/)

Bots can choose the behavior of the menu button shown next to the text input field.
