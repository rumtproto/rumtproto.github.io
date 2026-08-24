---
title: "DataJSON"
original: "https://core.telegram.org/type/DataJSON"
section: ref
description: "Represent a JSON-encoded object"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DataJSON","url":"/type/DataJSON/"}]
layout: layout.njk
---

# DataJSON

Represent a JSON-encoded object

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/dataJSON/">dataJSON</a>#7d748d04 data:<a href="/type/string/">string</a> = <a href="/type/DataJSON/" class="current_page_link">DataJSON</a>;

---functions---

<a href="/method/bots.sendCustomRequest/">bots.sendCustomRequest</a>#aa2769ed custom_method:<a href="/type/string/">string</a> params:<a href="/type/DataJSON/" class="current_page_link">DataJSON</a> = <a href="/type/DataJSON/" class="current_page_link">DataJSON</a>;
<a href="/method/bots.invokeWebViewCustomMethod/">bots.invokeWebViewCustomMethod</a>#87fc5e7 bot:<a href="/type/InputUser/">InputUser</a> custom_method:<a href="/type/string/">string</a> params:<a href="/type/DataJSON/" class="current_page_link">DataJSON</a> = <a href="/type/DataJSON/" class="current_page_link">DataJSON</a>;

<a href="/method/phone.getCallConfig/">phone.getCallConfig</a>#55451fa9 = <a href="/type/DataJSON/" class="current_page_link">DataJSON</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/dataJSON/">dataJSON</a></td><td>Represents a json-encoded object</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.sendCustomRequest/">bots.sendCustomRequest</a></td><td>Sends a custom request; for bots only</td></tr><tr><td><a href="/method/bots.invokeWebViewCustomMethod/">bots.invokeWebViewCustomMethod</a></td><td>Send a custom request from a <a href="/api/bots/webapps/">mini bot app</a>, triggered by a <a href="/api/web-events/#web-app-invoke-custom-method">web_app_invoke_custom_method event »</a>.<br><br>The response should be sent using a <a href="/api/bots/webapps/#custom-method-invoked">custom_method_invoked</a> event, <a href="/api/web-events/#web-app-invoke-custom-method">see here »</a> for more info on the flow.</td></tr><tr><td><a href="/method/phone.getCallConfig/">phone.getCallConfig</a></td><td>DEPRECATED: Get phone call configuration to be passed to the libtgvoip (deprecated) shared config.</td></tr></tbody></table>
