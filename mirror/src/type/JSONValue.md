---
title: "JSONValue"
original: "https://core.telegram.org/type/JSONValue"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"JSONValue","url":"/type/JSONValue/"}]
layout: layout.njk
---

# JSONValue

JSON value

#### [End-to-end schema](/schema/end-to-end/)

```
===216===
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNull#3f6d7b68 = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
jsonString#b71e767a value:string = JSONValue;
```

API schema:

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/jsonNull/">jsonNull</a>#3f6d7b68 = <a href="/type/JSONValue/" class="current_page_link">JSONValue</a>;
<a href="/constructor/jsonBool/">jsonBool</a>#c7345e6a value:<a href="/type/Bool/">Bool</a> = <a href="/type/JSONValue/" class="current_page_link">JSONValue</a>;
<a href="/constructor/jsonNumber/">jsonNumber</a>#2be0dfa4 value:<a href="/type/double/">double</a> = <a href="/type/JSONValue/" class="current_page_link">JSONValue</a>;
<a href="/constructor/jsonString/">jsonString</a>#b71e767a value:<a href="/type/string/">string</a> = <a href="/type/JSONValue/" class="current_page_link">JSONValue</a>;
<a href="/constructor/jsonArray/">jsonArray</a>#f7444763 value:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/JSONValue/" class="current_page_link">JSONValue</a>&gt; = <a href="/type/JSONValue/" class="current_page_link">JSONValue</a>;
<a href="/constructor/jsonObject/">jsonObject</a>#99c1d49d value:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/JSONObjectValue/">JSONObjectValue</a>&gt; = <a href="/type/JSONValue/" class="current_page_link">JSONValue</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/jsonNull/">jsonNull</a></td><td>null JSON value</td></tr><tr><td><a href="/constructor/jsonBool/">jsonBool</a></td><td>JSON boolean value</td></tr><tr><td><a href="/constructor/jsonNumber/">jsonNumber</a></td><td>JSON numeric value</td></tr><tr><td><a href="/constructor/jsonString/">jsonString</a></td><td>JSON string</td></tr><tr><td><a href="/constructor/jsonArray/">jsonArray</a></td><td>JSON array</td></tr><tr><td><a href="/constructor/jsonObject/">jsonObject</a></td><td>JSON object value</td></tr></tbody></table>
