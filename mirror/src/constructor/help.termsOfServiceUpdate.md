---
title: "help.termsOfServiceUpdate"
original: "https://core.telegram.org/constructor/help.termsOfServiceUpdate"
section: ref
description: "Info about an update of telegram's terms of service. If the terms of service are declined, then the account.deleteAccount method should be called with the reason \"Decline ToS…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.termsOfServiceUpdate","url":"/constructor/help.termsOfServiceUpdate/"}]
layout: layout.njk
---

# help.termsOfServiceUpdate

Info about an update of telegram's terms of service. If the terms of service are declined, then the [account.deleteAccount](/method/account.deleteAccount/) method should be called with the reason "Decline ToS update"

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.termsOfServiceUpdate/" class="current_page_link">help.termsOfServiceUpdate</a>#28ecf961 expires:<a href="/type/int/">int</a> terms_of_service:<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/help.TermsOfServiceUpdate/">help.TermsOfServiceUpdate</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New TOS updates will have to be queried using <a href="/method/help.getTermsOfServiceUpdate/">help.getTermsOfServiceUpdate</a> in <code>expires</code> seconds</td></tr><tr><td><strong>terms_of_service</strong></td><td style="text-align: center;"><a href="/type/help.TermsOfService/">help.TermsOfService</a></td><td>New terms of service</td></tr></tbody></table>

### Type

[help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/)

### Related pages

#### [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/)

Look for updates of telegram's terms of service

#### [account.deleteAccount](/method/account.deleteAccount/)

Delete the user's account from the telegram servers.

Can also be used to delete the account of a user that provided the login code, but forgot the 2FA password and no recovery method is configured, see [here »](/api/srp/#password-recovery) for more info on password recovery, and [here »](/api/account-deletion/) for more info on account deletion.
