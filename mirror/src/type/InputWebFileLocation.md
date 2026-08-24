---
title: "InputWebFileLocation"
original: "https://core.telegram.org/type/InputWebFileLocation"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputWebFileLocation","url":"/type/InputWebFileLocation/"}]
layout: layout.njk
---

# InputWebFileLocation

Location of remote file

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputWebFileLocation/">inputWebFileLocation</a>#c239d686 url:<a href="/type/string/">string</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputWebFileLocation/" class="current_page_link">InputWebFileLocation</a>;
<a href="/constructor/inputWebFileGeoPointLocation/">inputWebFileGeoPointLocation</a>#9f2221c9 geo_point:<a href="/type/InputGeoPoint/">InputGeoPoint</a> access_hash:<a href="/type/long/">long</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> zoom:<a href="/type/int/">int</a> scale:<a href="/type/int/">int</a> = <a href="/type/InputWebFileLocation/" class="current_page_link">InputWebFileLocation</a>;
<a href="/constructor/inputWebFileAudioAlbumThumbLocation/">inputWebFileAudioAlbumThumbLocation</a>#f46fe924 flags:<a href="/type/%23/">#</a> small:flags.2?true document:flags.0?<a href="/type/InputDocument/">InputDocument</a> title:flags.1?<a href="/type/string/">string</a> performer:flags.1?<a href="/type/string/">string</a> = <a href="/type/InputWebFileLocation/" class="current_page_link">InputWebFileLocation</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputWebFileLocation/">inputWebFileLocation</a></td><td>Location of a remote HTTP(s) file</td></tr><tr><td><a href="/constructor/inputWebFileGeoPointLocation/">inputWebFileGeoPointLocation</a></td><td>Used to download a server-generated image with the map preview from a <a href="/constructor/geoPoint/">geoPoint</a>, see the <a href="/api/files/#downloading-webfiles">webfile docs for more info »</a>.</td></tr><tr><td><a href="/constructor/inputWebFileAudioAlbumThumbLocation/">inputWebFileAudioAlbumThumbLocation</a></td><td>Used to download an album cover for any music file using <a href="/method/upload.getWebFile/">upload.getWebFile</a>, see the <a href="/api/files/#downloading-webfiles">webfile docs for more info »</a>.</td></tr></tbody></table>
