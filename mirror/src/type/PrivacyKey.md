---
title: "PrivacyKey"
original: "https://core.telegram.org/type/PrivacyKey"
section: ref
description: "Privacy keys together with privacy rules » indicate _what_ can or can't someone do and are specified by a PrivacyKey constructor, and its input counterpart InputPrivacyKey."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PrivacyKey","url":"/type/PrivacyKey/"}]
layout: layout.njk
---

# PrivacyKey

Privacy **keys** together with [privacy rules »](/api/privacy/#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](/api/privacy/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/privacyKeyStatusTimestamp/">privacyKeyStatusTimestamp</a>#bc2eab30 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyChatInvite/">privacyKeyChatInvite</a>#500e6dfa = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyPhoneCall/">privacyKeyPhoneCall</a>#3d662b7b = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyPhoneP2P/">privacyKeyPhoneP2P</a>#39491cc8 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyForwards/">privacyKeyForwards</a>#69ec56a3 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyProfilePhoto/">privacyKeyProfilePhoto</a>#96151fed = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyPhoneNumber/">privacyKeyPhoneNumber</a>#d19ae46d = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyAddedByPhone/">privacyKeyAddedByPhone</a>#42ffd42b = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyVoiceMessages/">privacyKeyVoiceMessages</a>#697f414 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyAbout/">privacyKeyAbout</a>#a486b761 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyBirthday/">privacyKeyBirthday</a>#2000a518 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyStarGiftsAutoSave/">privacyKeyStarGiftsAutoSave</a>#2ca4fdf8 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeyNoPaidMessages/">privacyKeyNoPaidMessages</a>#17d348d2 = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;
<a href="/constructor/privacyKeySavedMusic/">privacyKeySavedMusic</a>#ff7a571b = <a href="/type/PrivacyKey/" class="current_page_link">PrivacyKey</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/privacyKeyStatusTimestamp/">privacyKeyStatusTimestamp</a></td><td>Whether we can see the last online timestamp of this user.<br><br>Note that if <em>we</em> decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) <strong>and</strong> we do not have a <a href="/api/premium/">Premium</a> subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users <em>do</em> share it with us.<br><br>If those users <em>do</em> share their exact online status with us, but we can't see it due to the reason mentioned above, the <code>by_me</code> flag of <a href="/constructor/userStatusRecently/">userStatusRecently</a>, <a href="/constructor/userStatusLastWeek/">userStatusLastWeek</a>, <a href="/constructor/userStatusLastMonth/">userStatusLastMonth</a> will be set.</td></tr><tr><td><a href="/constructor/privacyKeyChatInvite/">privacyKeyChatInvite</a></td><td>Whether the user can be invited to chats</td></tr><tr><td><a href="/constructor/privacyKeyPhoneCall/">privacyKeyPhoneCall</a></td><td>Whether the user accepts phone calls</td></tr><tr><td><a href="/constructor/privacyKeyPhoneP2P/">privacyKeyPhoneP2P</a></td><td>Whether P2P connections in phone calls with this user are allowed</td></tr><tr><td><a href="/constructor/privacyKeyForwards/">privacyKeyForwards</a></td><td>Whether messages forwarded from the user will be <a href="/blog/unsend-privacy-emoji/#anonymous-forwarding">anonymously forwarded</a></td></tr><tr><td><a href="/constructor/privacyKeyProfilePhoto/">privacyKeyProfilePhoto</a></td><td>Whether the profile picture of the user is visible</td></tr><tr><td><a href="/constructor/privacyKeyPhoneNumber/">privacyKeyPhoneNumber</a></td><td>Whether the user allows us to see his phone number</td></tr><tr><td><a href="/constructor/privacyKeyAddedByPhone/">privacyKeyAddedByPhone</a></td><td>Whether this user can be added to our contact list by their phone number</td></tr><tr><td><a href="/constructor/privacyKeyVoiceMessages/">privacyKeyVoiceMessages</a></td><td>Whether the user accepts voice messages</td></tr><tr><td><a href="/constructor/privacyKeyAbout/">privacyKeyAbout</a></td><td>Whether people can see your bio</td></tr><tr><td><a href="/constructor/privacyKeyBirthday/">privacyKeyBirthday</a></td><td>Whether the user can see our birthday.</td></tr><tr><td><a href="/constructor/privacyKeyStarGiftsAutoSave/">privacyKeyStarGiftsAutoSave</a></td><td>Whether received <a href="/api/gifts/">gifts</a> will be automatically displayed on our profile</td></tr><tr><td><a href="/constructor/privacyKeyNoPaidMessages/">privacyKeyNoPaidMessages</a></td><td>Who can send you messages without paying, if <a href="/api/paid-messages/">paid messages »</a> are enabled.</td></tr><tr><td><a href="/constructor/privacyKeySavedMusic/">privacyKeySavedMusic</a></td><td>Whether the user can see the <a href="/api/profile/#music">songs we pinned to our profile »</a>.</td></tr></tbody></table>

### Related pages

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [PrivacyKey](/type/PrivacyKey/)

Privacy **keys** together with [privacy rules »](/api/privacy/#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](/api/privacy/) for more info.

#### [InputPrivacyKey](/type/InputPrivacyKey/)

Privacy **keys** together with [privacy rules »](/api/privacy/#privacy-rules) indicate _what_ can or can't someone do and are specified by a [PrivacyKey](/type/PrivacyKey/) constructor, and its input counterpart [InputPrivacyKey](/type/InputPrivacyKey/).

See the [privacy documentation »](/api/privacy/) for more info.
