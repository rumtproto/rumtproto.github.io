---
title: "updateConfig"
original: "https://core.telegram.org/constructor/updateConfig"
section: ref
description: "The server-side configuration has changed; the client should re-fetch the config using help.getConfig and help.getAppConfig."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateConfig","url":"/constructor/updateConfig/"}]
layout: layout.njk
---

# updateConfig

The server-side configuration has changed; the client should re-fetch the config using [help.getConfig](/method/help.getConfig/) and [help.getAppConfig](/method/help.getAppConfig/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateConfig/" class="current_page_link">updateConfig</a>#a229dd06 = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Type

[Update](/type/Update/)

### Related pages

#### [help.getConfig](/method/help.getConfig/)

Returns current configuration, including data center configuration.

#### [help.getAppConfig](/method/help.getAppConfig/)

Get app-specific configuration, see [client configuration](/api/config/#client-configuration) for more info on the result.
