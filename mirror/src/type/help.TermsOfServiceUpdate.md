---
title: "Help.TermsOfServiceUpdate"
original: "https://core.telegram.org/type/help.TermsOfServiceUpdate"
section: ref
description: "Update of Telegram's terms of service"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.TermsOfServiceUpdate","url":"/type/help.TermsOfServiceUpdate/"}]
layout: layout.njk
---

# Help.TermsOfServiceUpdate

Update of Telegram's terms of service

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.termsOfServiceUpdateEmpty/">help.termsOfServiceUpdateEmpty</a>#e3309f7f expires:<a href="/type/int/">int</a> = <a href="/type/help.TermsOfServiceUpdate/" class="current_page_link">help.TermsOfServiceUpdate</a>;
<a href="/constructor/help.termsOfServiceUpdate/">help.termsOfServiceUpdate</a>#28ecf961 expires:<a href="/type/int/">int</a> terms_of_service:<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/help.TermsOfServiceUpdate/" class="current_page_link">help.TermsOfServiceUpdate</a>;

---functions---

<a href="/method/help.getTermsOfServiceUpdate/">help.getTermsOfServiceUpdate</a>#2ca51fd1 = <a href="/type/help.TermsOfServiceUpdate/" class="current_page_link">help.TermsOfServiceUpdate</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.termsOfServiceUpdateEmpty/">help.termsOfServiceUpdateEmpty</a></td><td>No changes were made to telegram's terms of service</td></tr><tr><td><a href="/constructor/help.termsOfServiceUpdate/">help.termsOfServiceUpdate</a></td><td>Info about an update of telegram's terms of service. If the terms of service are declined, then the <a href="/method/account.deleteAccount/">account.deleteAccount</a> method should be called with the reason "Decline ToS update"</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getTermsOfServiceUpdate/">help.getTermsOfServiceUpdate</a></td><td>Look for updates of telegram's terms of service</td></tr></tbody></table>
