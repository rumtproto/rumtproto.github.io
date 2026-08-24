---
title: "account.getPrivacy"
original: "https://core.telegram.org/method/account.getPrivacy"
section: ref
description: "Get privacy settings of current account"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getPrivacy","url":"/method/account.getPrivacy/"}]
layout: layout.njk
---

# account.getPrivacy

Get privacy settings of current account

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.privacyRules/">account.privacyRules</a>#50a04e45 rules:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrivacyRule/">PrivacyRule</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.PrivacyRules/">account.PrivacyRules</a>;
---functions---
<a href="/method/account.getPrivacy/" class="current_page_link">account.getPrivacy</a>#dadbc950 key:<a href="/type/InputPrivacyKey/">InputPrivacyKey</a> = <a href="/type/account.PrivacyRules/">account.PrivacyRules</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/InputPrivacyKey/">InputPrivacyKey</a></td><td>Peer category whose privacy settings should be fetched</td></tr></tbody></table>

### Result

[account.PrivacyRules](/type/account.PrivacyRules/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PRIVACY_KEY_INVALID</td><td>The privacy key is invalid.</td></tr></tbody></table>
