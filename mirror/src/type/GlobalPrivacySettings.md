---
title: "GlobalPrivacySettings"
original: "https://core.telegram.org/type/GlobalPrivacySettings"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"GlobalPrivacySettings","url":"/type/GlobalPrivacySettings/"}]
layout: layout.njk
---

# GlobalPrivacySettings

Global privacy settings

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/globalPrivacySettings/">globalPrivacySettings</a>#fe41b34f flags:<a href="/type/%23/">#</a> archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?<a href="/type/long/">long</a> disallowed_gifts:flags.6?<a href="/type/DisallowedGiftsSettings/">DisallowedGiftsSettings</a> = <a href="/type/GlobalPrivacySettings/" class="current_page_link">GlobalPrivacySettings</a>;

---functions---

<a href="/method/account.getGlobalPrivacySettings/">account.getGlobalPrivacySettings</a>#eb2b4cf6 = <a href="/type/GlobalPrivacySettings/" class="current_page_link">GlobalPrivacySettings</a>;
<a href="/method/account.setGlobalPrivacySettings/">account.setGlobalPrivacySettings</a>#1edaaac2 settings:<a href="/type/GlobalPrivacySettings/" class="current_page_link">GlobalPrivacySettings</a> = <a href="/type/GlobalPrivacySettings/" class="current_page_link">GlobalPrivacySettings</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/globalPrivacySettings/">globalPrivacySettings</a></td><td>Global privacy settings</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getGlobalPrivacySettings/">account.getGlobalPrivacySettings</a></td><td>Get global privacy settings</td></tr><tr><td><a href="/method/account.setGlobalPrivacySettings/">account.setGlobalPrivacySettings</a></td><td>Set global privacy settings</td></tr></tbody></table>
