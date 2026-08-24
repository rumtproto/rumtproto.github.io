---
title: "account.saveRingtone"
original: "https://core.telegram.org/method/account.saveRingtone"
section: ref
description: "Save or remove saved notification sound."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.saveRingtone","url":"/method/account.saveRingtone/"}]
layout: layout.njk
---

# account.saveRingtone

Save or remove saved notification sound.

If the notification sound is already in MP3 format, [account.savedRingtone](/constructor/account.savedRingtone/) will be returned.  
Otherwise, it will be automatically converted and a [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) will be returned, containing a new [document](/constructor/document/) object that should be used to refer to the ringtone from now on (ie when deleting it using the `unsave` parameter, or when downloading it).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.savedRingtone/">account.savedRingtone</a>#b7263f6d = <a href="/type/account.SavedRingtone/">account.SavedRingtone</a>;
<a href="/constructor/account.savedRingtoneConverted/">account.savedRingtoneConverted</a>#1f307eb7 document:<a href="/type/Document/">Document</a> = <a href="/type/account.SavedRingtone/">account.SavedRingtone</a>;
---functions---
<a href="/method/account.saveRingtone/" class="current_page_link">account.saveRingtone</a>#3dea5b03 id:<a href="/type/InputDocument/">InputDocument</a> unsave:<a href="/type/Bool/">Bool</a> = <a href="/type/account.SavedRingtone/">account.SavedRingtone</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>Notification sound uploaded using <a href="/method/account.uploadRingtone/">account.uploadRingtone</a></td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to add or delete the notification sound</td></tr></tbody></table>

### Result

[account.SavedRingtone](/type/account.SavedRingtone/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RINGTONE_INVALID</td><td>The specified ringtone is invalid.</td></tr></tbody></table>

### Related pages

#### [account.uploadRingtone](/method/account.uploadRingtone/)

Upload notification sound, use [account.saveRingtone](/method/account.saveRingtone/) to convert it and add it to the list of saved notification sounds.

#### [account.savedRingtone](/constructor/account.savedRingtone/)

The notification sound was already in MP3 format and was saved without any modification

#### [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/)

The notification sound was not in MP3 format and was successfully converted and saved, use the returned [Document](/type/Document/) to refer to the notification sound from now on

#### [document](/constructor/document/)

Document
