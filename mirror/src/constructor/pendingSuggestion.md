---
title: "pendingSuggestion"
original: "https://core.telegram.org/constructor/pendingSuggestion"
section: ref
description: "Represents a custom pending suggestion »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pendingSuggestion","url":"/constructor/pendingSuggestion/"}]
layout: layout.njk
---

# pendingSuggestion

Represents a [custom pending suggestion »](/api/config/#custom-suggestions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pendingSuggestion/" class="current_page_link">pendingSuggestion</a>#e7e82e12 suggestion:<a href="/type/string/">string</a> title:<a href="/type/TextWithEntities/">TextWithEntities</a> description:<a href="/type/TextWithEntities/">TextWithEntities</a> url:<a href="/type/string/">string</a> = <a href="/type/PendingSuggestion/">PendingSuggestion</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>suggestion</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The suggestion ID, can be passed to <a href="/method/help.dismissSuggestion/">help.dismissSuggestion</a>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Title of the suggestion.</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Body of the suggestion.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>URL to open when the user clicks on the suggestion.</td></tr></tbody></table>

### Type

[PendingSuggestion](/type/PendingSuggestion/)

### Related pages

#### [help.dismissSuggestion](/method/help.dismissSuggestion/)

Dismiss a [suggestion, see here for more info »](/api/config/#suggestions).

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
