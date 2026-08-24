---
title: "bots.checkDownloadFileParams"
original: "https://core.telegram.org/method/bots.checkDownloadFileParams"
section: ref
description: "Check if a mini app can request the download of a specific file: called when handling web\\_app\\_request\\_file\\_download events »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.checkDownloadFileParams","url":"/method/bots.checkDownloadFileParams/"}]
layout: layout.njk
---

# bots.checkDownloadFileParams

Check if a [mini app](/api/bots/webapps/) can request the download of a specific file: called when handling [web\_app\_request\_file\_download events »](/api/web-events/#web-app-request-file-download)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.checkDownloadFileParams/" class="current_page_link">bots.checkDownloadFileParams</a>#50077589 bot:<a href="/type/InputUser/">InputUser</a> file_name:<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot that owns the <a href="/api/bots/webapps/">mini app</a> that requested the download</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The <code>filename</code> from the <a href="/api/web-events/#web-app-request-file-download">web_app_request_file_download event »</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The <code>url</code> from the <a href="/api/web-events/#web-app-request-file-download">web_app_request_file_download event »</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Web events](/api/web-events/)

How telegram apps interact with webpages
