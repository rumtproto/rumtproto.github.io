---
title: "updatePrivacy"
original: "https://core.telegram.org/constructor/updatePrivacy"
section: ref
description: "Privacy rules were changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePrivacy","url":"/constructor/updatePrivacy/"}]
layout: layout.njk
---

# updatePrivacy

Privacy rules were changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePrivacy/" class="current_page_link">updatePrivacy</a>#ee3b272a key:<a href="/type/PrivacyKey/">PrivacyKey</a> rules:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrivacyRule/">PrivacyRule</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/PrivacyKey/">PrivacyKey</a></td><td>Peers to which the privacy rules apply</td></tr><tr><td><strong>rules</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrivacyRule/">PrivacyRule</a>&gt;</td><td>New privacy rules</td></tr></tbody></table>

### Type

[Update](/type/Update/)
