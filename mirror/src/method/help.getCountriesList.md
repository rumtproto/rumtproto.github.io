---
title: "help.getCountriesList"
original: "https://core.telegram.org/method/help.getCountriesList"
section: ref
description: "Get name, ISO code, localized name and phone codes/patterns of all available countries"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getCountriesList","url":"/method/help.getCountriesList/"}]
layout: layout.njk
---

# help.getCountriesList

Get name, ISO code, localized name and phone codes/patterns of all available countries

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.countriesListNotModified/">help.countriesListNotModified</a>#93cc1f32 = <a href="/type/help.CountriesList/">help.CountriesList</a>;
<a href="/constructor/help.countriesList/">help.countriesList</a>#87d0759e countries:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/help.Country/">help.Country</a>&gt; hash:<a href="/type/int/">int</a> = <a href="/type/help.CountriesList/">help.CountriesList</a>;
---functions---
<a href="/method/help.getCountriesList/" class="current_page_link">help.getCountriesList</a>#735787a8 lang_code:<a href="/type/string/">string</a> hash:<a href="/type/int/">int</a> = <a href="/type/help.CountriesList/">help.CountriesList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code of the current user</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[help.CountriesList](/type/help.CountriesList/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
