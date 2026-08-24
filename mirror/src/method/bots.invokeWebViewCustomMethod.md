---
title: "bots.invokeWebViewCustomMethod"
original: "https://core.telegram.org/method/bots.invokeWebViewCustomMethod"
section: ref
description: "Send a custom request from a mini bot app, triggered by a web\\_app\\_invoke\\_custom\\_method event »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.invokeWebViewCustomMethod","url":"/method/bots.invokeWebViewCustomMethod/"}]
layout: layout.njk
---

# bots.invokeWebViewCustomMethod

Send a custom request from a [mini bot app](/api/bots/webapps/), triggered by a [web\_app\_invoke\_custom\_method event »](/api/web-events/#web-app-invoke-custom-method).

The response should be sent using a [custom\_method\_invoked](/api/bots/webapps/#custom-method-invoked) event, [see here »](/api/web-events/#web-app-invoke-custom-method) for more info on the flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dataJSON/">dataJSON</a>#7d748d04 data:<a href="/type/string/">string</a> = <a href="/type/DataJSON/">DataJSON</a>;
---functions---
<a href="/method/bots.invokeWebViewCustomMethod/" class="current_page_link">bots.invokeWebViewCustomMethod</a>#87fc5e7 bot:<a href="/type/InputUser/">InputUser</a> custom_method:<a href="/type/string/">string</a> params:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/DataJSON/">DataJSON</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Identifier of the bot associated to the <a href="/api/bots/webapps/">mini bot app</a></td></tr><tr><td><strong>custom_method</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Identifier of the custom method to invoke</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>Method parameters</td></tr></tbody></table>

### Result

[DataJSON](/type/DataJSON/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>DATA_JSON_INVALID</td><td>The provided JSON data is invalid.</td></tr><tr><td>400</td><td>METHOD_INVALID</td><td>The specified method is invalid.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Web events](/api/web-events/)

How telegram apps interact with webpages
