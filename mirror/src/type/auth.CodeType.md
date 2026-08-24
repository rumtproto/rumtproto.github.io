---
title: "auth.CodeType"
original: "https://core.telegram.org/type/auth.CodeType"
section: ref
description: "Type of verification code that will be sent next if you call the resendCode method"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.CodeType","url":"/type/auth.CodeType/"}]
layout: layout.njk
---

# auth.CodeType

Type of verification code that will be sent next if you call the resendCode method

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.codeTypeSms/">auth.codeTypeSms</a>#72a3158c = <a href="/type/auth.CodeType/" class="current_page_link">auth.CodeType</a>;
<a href="/constructor/auth.codeTypeCall/">auth.codeTypeCall</a>#741cd3e3 = <a href="/type/auth.CodeType/" class="current_page_link">auth.CodeType</a>;
<a href="/constructor/auth.codeTypeFlashCall/">auth.codeTypeFlashCall</a>#226ccefb = <a href="/type/auth.CodeType/" class="current_page_link">auth.CodeType</a>;
<a href="/constructor/auth.codeTypeMissedCall/">auth.codeTypeMissedCall</a>#d61ad6ee = <a href="/type/auth.CodeType/" class="current_page_link">auth.CodeType</a>;
<a href="/constructor/auth.codeTypeFragmentSms/">auth.codeTypeFragmentSms</a>#6ed998c = <a href="/type/auth.CodeType/" class="current_page_link">auth.CodeType</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.codeTypeSms/">auth.codeTypeSms</a></td><td>The next time, the authentication code will be delivered via an immediately canceled incoming call.</td></tr><tr><td><a href="/constructor/auth.codeTypeCall/">auth.codeTypeCall</a></td><td>The next time, the authentication code is to be delivered via an outgoing phone call.</td></tr><tr><td><a href="/constructor/auth.codeTypeFlashCall/">auth.codeTypeFlashCall</a></td><td>The next time, the authentication code will be delivered via an immediately canceled incoming call.</td></tr><tr><td><a href="/constructor/auth.codeTypeMissedCall/">auth.codeTypeMissedCall</a></td><td>The next time, the authentication code will be delivered via an immediately canceled incoming call, handled manually by the user.</td></tr><tr><td><a href="/constructor/auth.codeTypeFragmentSms/">auth.codeTypeFragmentSms</a></td><td>The next time, the authentication code will be delivered via <a href="https://fragment.com">fragment.com</a></td></tr></tbody></table>
