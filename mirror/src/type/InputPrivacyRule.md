---
title: "InputPrivacyRule"
original: "https://core.telegram.org/type/InputPrivacyRule"
section: ref
description: "Privacy rules indicate _who_ can or can't do something and are specified by a PrivacyRule, and its input counterpart InputPrivacyRule."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPrivacyRule","url":"/type/InputPrivacyRule/"}]
layout: layout.njk
---

# InputPrivacyRule

Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPrivacyValueAllowContacts/">inputPrivacyValueAllowContacts</a>#d09e07b = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueAllowAll/">inputPrivacyValueAllowAll</a>#184b35ce = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueAllowUsers/">inputPrivacyValueAllowUsers</a>#131cc67f users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueDisallowContacts/">inputPrivacyValueDisallowContacts</a>#ba52007 = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueDisallowAll/">inputPrivacyValueDisallowAll</a>#d66b66c9 = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueDisallowUsers/">inputPrivacyValueDisallowUsers</a>#90110467 users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueAllowChatParticipants/">inputPrivacyValueAllowChatParticipants</a>#840649cf chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueDisallowChatParticipants/">inputPrivacyValueDisallowChatParticipants</a>#e94f0f86 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueAllowCloseFriends/">inputPrivacyValueAllowCloseFriends</a>#2f453e49 = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueAllowPremium/">inputPrivacyValueAllowPremium</a>#77cdc9f1 = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueAllowBots/">inputPrivacyValueAllowBots</a>#5a4fcce5 = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;
<a href="/constructor/inputPrivacyValueDisallowBots/">inputPrivacyValueDisallowBots</a>#c4e57915 = <a href="/type/InputPrivacyRule/" class="current_page_link">InputPrivacyRule</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPrivacyValueAllowContacts/">inputPrivacyValueAllowContacts</a></td><td>Allow only contacts</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowAll/">inputPrivacyValueAllowAll</a></td><td>Allow all users</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowUsers/">inputPrivacyValueAllowUsers</a></td><td>Allow only certain users</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowContacts/">inputPrivacyValueDisallowContacts</a></td><td>Disallow only contacts</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowAll/">inputPrivacyValueDisallowAll</a></td><td>Disallow all</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowUsers/">inputPrivacyValueDisallowUsers</a></td><td>Disallow only certain users</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowChatParticipants/">inputPrivacyValueAllowChatParticipants</a></td><td>Allow only participants of certain chats</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowChatParticipants/">inputPrivacyValueDisallowChatParticipants</a></td><td>Disallow only participants of certain chats</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowCloseFriends/">inputPrivacyValueAllowCloseFriends</a></td><td>Allow only <a href="/api/privacy/">close friends »</a></td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowPremium/">inputPrivacyValueAllowPremium</a></td><td>Allow only users with a <a href="/api/premium/">Premium subscription »</a>, currently only usable for <a href="/constructor/inputPrivacyKeyChatInvite/">inputPrivacyKeyChatInvite</a>.</td></tr><tr><td><a href="/constructor/inputPrivacyValueAllowBots/">inputPrivacyValueAllowBots</a></td><td>Allow bots and mini apps</td></tr><tr><td><a href="/constructor/inputPrivacyValueDisallowBots/">inputPrivacyValueDisallowBots</a></td><td>Disallow bots and mini apps</td></tr></tbody></table>

### Related pages

#### [PrivacyRule](/type/PrivacyRule/)

Privacy **rules** together with [privacy keys](/api/privacy/#privacy-keys) indicate _what_ can or can't someone do and are specified by a [PrivacyRule](/type/PrivacyRule/) constructor, and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

#### [InputPrivacyRule](/type/InputPrivacyRule/)

Privacy **rules** indicate _who_ can or can't do something and are specified by a [PrivacyRule](/type/PrivacyRule/), and its input counterpart [InputPrivacyRule](/type/InputPrivacyRule/).

See the [privacy documentation »](/api/privacy/) for more info.

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.
