---
title: "RequirementToContact"
original: "https://core.telegram.org/type/RequirementToContact"
section: ref
description: "Specifies a requirement that must be satisfied in order to contact a user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RequirementToContact","url":"/type/RequirementToContact/"}]
layout: layout.njk
---

# RequirementToContact

Specifies a requirement that must be satisfied in order to contact a user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/requirementToContactEmpty/">requirementToContactEmpty</a>#50a9839 = <a href="/type/RequirementToContact/" class="current_page_link">RequirementToContact</a>;
<a href="/constructor/requirementToContactPremium/">requirementToContactPremium</a>#e581e4e9 = <a href="/type/RequirementToContact/" class="current_page_link">RequirementToContact</a>;
<a href="/constructor/requirementToContactPaidMessages/">requirementToContactPaidMessages</a>#b4f67e93 stars_amount:<a href="/type/long/">long</a> = <a href="/type/RequirementToContact/" class="current_page_link">RequirementToContact</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/requirementToContactEmpty/">requirementToContactEmpty</a></td><td>This user can be freely contacted.</td></tr><tr><td><a href="/constructor/requirementToContactPremium/">requirementToContactPremium</a></td><td>This user requires us to buy a <a href="/api/premium/">Premium</a> subscription in order to contact them.</td></tr><tr><td><a href="/constructor/requirementToContactPaidMessages/">requirementToContactPaidMessages</a></td><td>This user requires us to pay the specified amount of <a href="/api/stars/">Telegram Stars</a> to send them a message, see <a href="/api/paid-messages/">here »</a> for the full flow.</td></tr></tbody></table>
