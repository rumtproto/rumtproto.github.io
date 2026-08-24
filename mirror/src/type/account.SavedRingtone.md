---
title: "account.SavedRingtone"
original: "https://core.telegram.org/type/account.SavedRingtone"
section: ref
description: "Contains information about a saved notification sound"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.SavedRingtone","url":"/type/account.SavedRingtone/"}]
layout: layout.njk
---

# account.SavedRingtone

Contains information about a saved notification sound

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.savedRingtone/">account.savedRingtone</a>#b7263f6d = <a href="/type/account.SavedRingtone/" class="current_page_link">account.SavedRingtone</a>;
<a href="/constructor/account.savedRingtoneConverted/">account.savedRingtoneConverted</a>#1f307eb7 document:<a href="/type/Document/">Document</a> = <a href="/type/account.SavedRingtone/" class="current_page_link">account.SavedRingtone</a>;

---functions---

<a href="/method/account.saveRingtone/">account.saveRingtone</a>#3dea5b03 id:<a href="/type/InputDocument/">InputDocument</a> unsave:<a href="/type/Bool/">Bool</a> = <a href="/type/account.SavedRingtone/" class="current_page_link">account.SavedRingtone</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.savedRingtone/">account.savedRingtone</a></td><td>The notification sound was already in MP3 format and was saved without any modification</td></tr><tr><td><a href="/constructor/account.savedRingtoneConverted/">account.savedRingtoneConverted</a></td><td>The notification sound was not in MP3 format and was successfully converted and saved, use the returned <a href="/type/Document/">Document</a> to refer to the notification sound from now on</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.saveRingtone/">account.saveRingtone</a></td><td>Save or remove saved notification sound.<br><br>If the notification sound is already in MP3 format, <a href="/constructor/account.savedRingtone/">account.savedRingtone</a> will be returned.<br>Otherwise, it will be automatically converted and a <a href="/constructor/account.savedRingtoneConverted/">account.savedRingtoneConverted</a> will be returned, containing a new <a href="/constructor/document/">document</a> object that should be used to refer to the ringtone from now on (ie when deleting it using the <code>unsave</code> parameter, or when downloading it).</td></tr></tbody></table>
