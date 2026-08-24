---
title: "help.AppConfig"
original: "https://core.telegram.org/type/help.AppConfig"
section: ref
description: "Contains various client configuration parameters"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.AppConfig","url":"/type/help.AppConfig/"}]
layout: layout.njk
---

# help.AppConfig

Contains various [client configuration parameters](/api/config/#client-configuration)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.appConfigNotModified/">help.appConfigNotModified</a>#7cde641d = <a href="/type/help.AppConfig/" class="current_page_link">help.AppConfig</a>;
<a href="/constructor/help.appConfig/">help.appConfig</a>#dd18782e hash:<a href="/type/int/">int</a> config:<a href="/type/JSONValue/">JSONValue</a> = <a href="/type/help.AppConfig/" class="current_page_link">help.AppConfig</a>;

---functions---

<a href="/method/help.getAppConfig/">help.getAppConfig</a>#61e3f854 hash:<a href="/type/int/">int</a> = <a href="/type/help.AppConfig/" class="current_page_link">help.AppConfig</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.appConfigNotModified/">help.appConfigNotModified</a></td><td>The client configuration parameters haven't changed</td></tr><tr><td><a href="/constructor/help.appConfig/">help.appConfig</a></td><td>Contains various <a href="/api/config/#client-configuration">client configuration parameters</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getAppConfig/">help.getAppConfig</a></td><td>Get app-specific configuration, see <a href="/api/config/#client-configuration">client configuration</a> for more info on the result.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
