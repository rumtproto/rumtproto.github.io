---
title: "PrivacyRule"
original: "https://core.telegram.org/type/PrivacyRule"
section: ref
description: "Privacy rules together with privacy keys indicate _what_ can or can't someone do and are specified by a PrivacyRule constructor, and its input counterpart InputPrivacyRule."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PrivacyRule","url":"/type/PrivacyRule/"}]
layout: layout.njk
---

# PrivacyRule

Privacy **rules** together with [privacy keys](/api/privacy/#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/privacyValueAllowContacts/">privacyValueAllowContacts</a>#fffe1bac = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueAllowAll/">privacyValueAllowAll</a>#65427b82 = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueAllowUsers/">privacyValueAllowUsers</a>#b8905fb2 users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueDisallowContacts/">privacyValueDisallowContacts</a>#f888fa1a = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueDisallowAll/">privacyValueDisallowAll</a>#8b73e763 = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueDisallowUsers/">privacyValueDisallowUsers</a>#e4621141 users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueAllowChatParticipants/">privacyValueAllowChatParticipants</a>#6b134e8e chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueDisallowChatParticipants/">privacyValueDisallowChatParticipants</a>#41c87565 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueAllowCloseFriends/">privacyValueAllowCloseFriends</a>#f7e8d89b = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueAllowPremium/">privacyValueAllowPremium</a>#ece9814b = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueAllowBots/">privacyValueAllowBots</a>#21461b5d = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;
<a href="/constructor/privacyValueDisallowBots/">privacyValueDisallowBots</a>#f6a5f82f = <a href="/type/PrivacyRule/" class="current_page_link">PrivacyRule</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/privacyValueAllowContacts/">privacyValueAllowContacts</a></td><td>Allow all contacts</td></tr><tr><td><a href="/constructor/privacyValueAllowAll/">privacyValueAllowAll</a></td><td>Allow all users</td></tr><tr><td><a href="/constructor/privacyValueAllowUsers/">privacyValueAllowUsers</a></td><td>Allow only certain users</td></tr><tr><td><a href="/constructor/privacyValueDisallowContacts/">privacyValueDisallowContacts</a></td><td>Disallow only contacts</td></tr><tr><td><a href="/constructor/privacyValueDisallowAll/">privacyValueDisallowAll</a></td><td>Disallow all users</td></tr><tr><td><a href="/constructor/privacyValueDisallowUsers/">privacyValueDisallowUsers</a></td><td>Disallow only certain users</td></tr><tr><td><a href="/constructor/privacyValueAllowChatParticipants/">privacyValueAllowChatParticipants</a></td><td>Allow all participants of certain chats</td></tr><tr><td><a href="/constructor/privacyValueDisallowChatParticipants/">privacyValueDisallowChatParticipants</a></td><td>Disallow only participants of certain chats</td></tr><tr><td><a href="/constructor/privacyValueAllowCloseFriends/">privacyValueAllowCloseFriends</a></td><td>Allow only <a href="/api/privacy/">close friends »</a></td></tr><tr><td><a href="/constructor/privacyValueAllowPremium/">privacyValueAllowPremium</a></td><td>Allow only users with a <a href="/api/premium/">Premium subscription »</a>, currently only usable for <a href="/constructor/inputPrivacyKeyChatInvite/">inputPrivacyKeyChatInvite</a>.</td></tr><tr><td><a href="/constructor/privacyValueAllowBots/">privacyValueAllowBots</a></td><td>Allow bots and mini apps</td></tr><tr><td><a href="/constructor/privacyValueDisallowBots/">privacyValueDisallowBots</a></td><td>Disallow bots and mini apps</td></tr></tbody></table>

### Related pages

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [PrivacyRule](/type/PrivacyRule/)

Privacy **rules** together with [privacy keys](/api/privacy/#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

#### [InputPrivacyRule](/type/InputPrivacyRule/)

Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.
