---
title: "Account.PrivacyRules"
original: "https://core.telegram.org/type/account.PrivacyRules"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.PrivacyRules","url":"/type/account.PrivacyRules/"}]
layout: layout.njk
---

# Account.PrivacyRules

Privacy rules

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.privacyRules/">account.privacyRules</a>#50a04e45 rules:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrivacyRule/">PrivacyRule</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.PrivacyRules/" class="current_page_link">account.PrivacyRules</a>;

---functions---

<a href="/method/account.getPrivacy/">account.getPrivacy</a>#dadbc950 key:<a href="/type/InputPrivacyKey/">InputPrivacyKey</a> = <a href="/type/account.PrivacyRules/" class="current_page_link">account.PrivacyRules</a>;
<a href="/method/account.setPrivacy/">account.setPrivacy</a>#c9f81ce8 key:<a href="/type/InputPrivacyKey/">InputPrivacyKey</a> rules:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPrivacyRule/">InputPrivacyRule</a>&gt; = <a href="/type/account.PrivacyRules/" class="current_page_link">account.PrivacyRules</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.privacyRules/">account.privacyRules</a></td><td>Privacy rules</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPrivacy/">account.getPrivacy</a></td><td>Get privacy settings of current account</td></tr><tr><td><a href="/method/account.setPrivacy/">account.setPrivacy</a></td><td>Change privacy settings of current account</td></tr></tbody></table>
