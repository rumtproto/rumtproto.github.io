---
title: "inputSecureFileLocation"
original: "https://core.telegram.org/constructor/inputSecureFileLocation"
section: ref
description: "Location of encrypted telegram passport file."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputSecureFileLocation","url":"/constructor/inputSecureFileLocation/"}]
layout: layout.njk
---

# inputSecureFileLocation

Location of encrypted telegram [passport](/passport/) file.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputSecureFileLocation/" class="current_page_link">inputSecureFileLocation</a>#cbc7ee28 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputFileLocation/">InputFileLocation</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>File ID, <strong>id</strong> parameter value from <a href="/constructor/secureFile/">secureFile</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Checksum, <strong>access_hash</strong> parameter value from <a href="/constructor/secureFile/">secureFile</a></td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)

### Related pages

#### [secureFile](/constructor/secureFile/)

Secure [passport](/passport/) file, for more info [see the passport docs »](/passport/encryption/#inputsecurefile)

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.
