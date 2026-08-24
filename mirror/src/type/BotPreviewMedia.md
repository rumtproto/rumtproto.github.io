---
title: "BotPreviewMedia"
original: "https://core.telegram.org/type/BotPreviewMedia"
section: ref
description: "Represents a Main Mini App preview media, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotPreviewMedia","url":"/type/BotPreviewMedia/"}]
layout: layout.njk
---

# BotPreviewMedia

Represents a [Main Mini App preview media, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botPreviewMedia/">botPreviewMedia</a>#23e91ba3 date:<a href="/type/int/">int</a> media:<a href="/type/MessageMedia/">MessageMedia</a> = <a href="/type/BotPreviewMedia/" class="current_page_link">BotPreviewMedia</a>;

---functions---

<a href="/method/bots.addPreviewMedia/">bots.addPreviewMedia</a>#17aeb75a bot:<a href="/type/InputUser/">InputUser</a> lang_code:<a href="/type/string/">string</a> media:<a href="/type/InputMedia/">InputMedia</a> = <a href="/type/BotPreviewMedia/" class="current_page_link">BotPreviewMedia</a>;
<a href="/method/bots.editPreviewMedia/">bots.editPreviewMedia</a>#8525606f bot:<a href="/type/InputUser/">InputUser</a> lang_code:<a href="/type/string/">string</a> media:<a href="/type/InputMedia/">InputMedia</a> new_media:<a href="/type/InputMedia/">InputMedia</a> = <a href="/type/BotPreviewMedia/" class="current_page_link">BotPreviewMedia</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botPreviewMedia/">botPreviewMedia</a></td><td>Represents a <a href="/api/bots/webapps/#main-mini-app-previews">Main Mini App preview media, see here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.addPreviewMedia/">bots.addPreviewMedia</a></td><td>Add a <a href="/api/bots/webapps/#main-mini-app-previews">main mini app preview, see here »</a> for more info.<br><br>Only owners of bots with a configured Main Mini App can use this method, see <a href="/api/bots/webapps/#main-mini-app-previews">see here »</a> for more info on how to check if you can invoke this method.</td></tr><tr><td><a href="/method/bots.editPreviewMedia/">bots.editPreviewMedia</a></td><td>Edit a <a href="/api/bots/webapps/#main-mini-app-previews">main mini app preview, see here »</a> for more info.<br><br>Only owners of bots with a configured Main Mini App can use this method, see <a href="/api/bots/webapps/#main-mini-app-previews">see here »</a> for more info on how to check if you can invoke this method.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
