---
title: "help.getAppConfig"
original: "https://core.telegram.org/method/help.getAppConfig"
section: ref
description: "Get app-specific configuration, see client configuration for more info on the result."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getAppConfig","url":"/method/help.getAppConfig/"}]
layout: layout.njk
---

# help.getAppConfig

Get app-specific configuration, see [client configuration](/api/config/#client-configuration) for more info on the result.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.appConfigNotModified/">help.appConfigNotModified</a>#7cde641d = <a href="/type/help.AppConfig/">help.AppConfig</a>;
<a href="/constructor/help.appConfig/">help.appConfig</a>#dd18782e hash:<a href="/type/int/">int</a> config:<a href="/type/JSONValue/">JSONValue</a> = <a href="/type/help.AppConfig/">help.AppConfig</a>;
---functions---
<a href="/method/help.getAppConfig/" class="current_page_link">help.getAppConfig</a>#61e3f854 hash:<a href="/type/int/">int</a> = <a href="/type/help.AppConfig/">help.AppConfig</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[help.AppConfig](/type/help.AppConfig/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
