---
title: "help.CountriesList"
original: "https://core.telegram.org/type/help.CountriesList"
section: ref
description: "Name, ISO code, localized name and phone codes/patterns of all available countries"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.CountriesList","url":"/type/help.CountriesList/"}]
layout: layout.njk
---

# help.CountriesList

Name, ISO code, localized name and phone codes/patterns of all available countries

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.countriesListNotModified/">help.countriesListNotModified</a>#93cc1f32 = <a href="/type/help.CountriesList/" class="current_page_link">help.CountriesList</a>;
<a href="/constructor/help.countriesList/">help.countriesList</a>#87d0759e countries:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/help.Country/">help.Country</a>&gt; hash:<a href="/type/int/">int</a> = <a href="/type/help.CountriesList/" class="current_page_link">help.CountriesList</a>;

---functions---

<a href="/method/help.getCountriesList/">help.getCountriesList</a>#735787a8 lang_code:<a href="/type/string/">string</a> hash:<a href="/type/int/">int</a> = <a href="/type/help.CountriesList/" class="current_page_link">help.CountriesList</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.countriesListNotModified/">help.countriesListNotModified</a></td><td>The country list has not changed</td></tr><tr><td><a href="/constructor/help.countriesList/">help.countriesList</a></td><td>Name, ISO code, localized name and phone codes/patterns of all available countries</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getCountriesList/">help.getCountriesList</a></td><td>Get name, ISO code, localized name and phone codes/patterns of all available countries</td></tr></tbody></table>
