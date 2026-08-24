---
title: "ExportedMessageLink"
original: "https://core.telegram.org/type/ExportedMessageLink"
section: ref
description: "HTTP link and embed info of channel message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ExportedMessageLink","url":"/type/ExportedMessageLink/"}]
layout: layout.njk
---

# ExportedMessageLink

HTTP link and embed info of channel message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/exportedMessageLink/">exportedMessageLink</a>#5dab1af4 link:<a href="/type/string/">string</a> html:<a href="/type/string/">string</a> = <a href="/type/ExportedMessageLink/" class="current_page_link">ExportedMessageLink</a>;

---functions---

<a href="/method/channels.exportMessageLink/">channels.exportMessageLink</a>#e63fadeb flags:<a href="/type/%23/">#</a> grouped:flags.0?true thread:flags.1?true channel:<a href="/type/InputChannel/">InputChannel</a> id:<a href="/type/int/">int</a> = <a href="/type/ExportedMessageLink/" class="current_page_link">ExportedMessageLink</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/exportedMessageLink/">exportedMessageLink</a></td><td>Link to a message in a supergroup/channel</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.exportMessageLink/">channels.exportMessageLink</a></td><td>Get link and embed info of a message in a <a href="/api/channel/">channel/supergroup</a></td></tr></tbody></table>
