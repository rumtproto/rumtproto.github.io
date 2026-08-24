---
title: "inputWebFileAudioAlbumThumbLocation"
original: "https://core.telegram.org/constructor/inputWebFileAudioAlbumThumbLocation"
section: ref
description: "Used to download an album cover for any music file using upload.getWebFile, see the webfile docs for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputWebFileAudioAlbumThumbLocation","url":"/constructor/inputWebFileAudioAlbumThumbLocation/"}]
layout: layout.njk
---

# inputWebFileAudioAlbumThumbLocation

Used to download an album cover for any music file using [upload.getWebFile](/method/upload.getWebFile/), see the [webfile docs for more info »](/api/files/#downloading-webfiles).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputWebFileAudioAlbumThumbLocation/" class="current_page_link">inputWebFileAudioAlbumThumbLocation</a>#f46fe924 flags:<a href="/type/%23/">#</a> small:flags.2?true document:flags.0?<a href="/type/InputDocument/">InputDocument</a> title:flags.1?<a href="/type/string/">string</a> performer:flags.1?<a href="/type/string/">string</a> = <a href="/type/InputWebFileLocation/">InputWebFileLocation</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>small</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Used to return a thumbnail with <code>100x100</code> resolution (instead of the default <code>600x600</code>)</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputDocument/">InputDocument</a></td><td>The audio file in question: must NOT be provided in secret chats, provide the <code>title</code> and <code>performer</code> fields instead.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Song title: should only be used in secret chats, in normal chats provide <code>document</code> instead, as it has more lax rate limits.</td></tr><tr><td><strong>performer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Song performer: should only be used in secret chats, in normal chats provide <code>document</code> instead, as it has more lax rate limits.</td></tr></tbody></table>

### Type

[InputWebFileLocation](/type/InputWebFileLocation/)

### Related pages

#### [upload.getWebfile](/method/upload.getWebFile/)

Returns content of a web file, by proxying the request through telegram, see the [webfile docs for more info](/api/files/#downloading-webfiles).

**Note**: the query must be sent to the DC specified in the `webfile_dc_id` [MTProto configuration field](/api/config/#mtproto-configuration).

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
