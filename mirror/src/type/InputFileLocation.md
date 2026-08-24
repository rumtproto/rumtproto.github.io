---
title: "InputFileLocation"
original: "https://core.telegram.org/type/InputFileLocation"
section: ref
description: "Defines the location of a file for download."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputFileLocation","url":"/type/InputFileLocation/"}]
layout: layout.njk
---

# InputFileLocation

Defines the location of a file for download.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputFileLocation/">inputFileLocation</a>#dfdaabe1 volume_id:<a href="/type/long/">long</a> local_id:<a href="/type/int/">int</a> secret:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputEncryptedFileLocation/">inputEncryptedFileLocation</a>#f5235d55 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputDocumentFileLocation/">inputDocumentFileLocation</a>#bad07584 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> thumb_size:<a href="/type/string/">string</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputSecureFileLocation/">inputSecureFileLocation</a>#cbc7ee28 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputTakeoutFileLocation/">inputTakeoutFileLocation</a>#29be5899 = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputPhotoFileLocation/">inputPhotoFileLocation</a>#40181ffe id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> thumb_size:<a href="/type/string/">string</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputPhotoLegacyFileLocation/">inputPhotoLegacyFileLocation</a>#d83466f3 id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> volume_id:<a href="/type/long/">long</a> local_id:<a href="/type/int/">int</a> secret:<a href="/type/long/">long</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputPeerPhotoFileLocation/">inputPeerPhotoFileLocation</a>#37257e99 flags:<a href="/type/%23/">#</a> big:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> photo_id:<a href="/type/long/">long</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputStickerSetThumb/">inputStickerSetThumb</a>#9d84f3db stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> thumb_version:<a href="/type/int/">int</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;
<a href="/constructor/inputGroupCallStream/">inputGroupCallStream</a>#598a92a flags:<a href="/type/%23/">#</a> call:<a href="/type/InputGroupCall/">InputGroupCall</a> time_ms:<a href="/type/long/">long</a> scale:<a href="/type/int/">int</a> video_channel:flags.0?<a href="/type/int/">int</a> video_quality:flags.0?<a href="/type/int/">int</a> = <a href="/type/InputFileLocation/" class="current_page_link">InputFileLocation</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputFileLocation/">inputFileLocation</a></td><td>DEPRECATED location of a photo</td></tr><tr><td><a href="/constructor/inputEncryptedFileLocation/">inputEncryptedFileLocation</a></td><td>Location of encrypted secret chat file.</td></tr><tr><td><a href="/constructor/inputDocumentFileLocation/">inputDocumentFileLocation</a></td><td>Document location (video, voice, audio, basically every type except photo)</td></tr><tr><td><a href="/constructor/inputSecureFileLocation/">inputSecureFileLocation</a></td><td>Location of encrypted telegram <a href="https://core.telegram.org/passport">passport</a> file.</td></tr><tr><td><a href="/constructor/inputTakeoutFileLocation/">inputTakeoutFileLocation</a></td><td>Used to download a JSON file that will contain all personal data related to features that do not have a specialized <a href="/api/takeout/">takeout method</a> yet, see <a href="/api/takeout/">here »</a> for more info on the takeout API.</td></tr><tr><td><a href="/constructor/inputPhotoFileLocation/">inputPhotoFileLocation</a></td><td>Use this object to download a photo with <a href="/method/upload.getFile/">upload.getFile</a> method</td></tr><tr><td><a href="/constructor/inputPhotoLegacyFileLocation/">inputPhotoLegacyFileLocation</a></td><td>DEPRECATED legacy photo file location</td></tr><tr><td><a href="/constructor/inputPeerPhotoFileLocation/">inputPeerPhotoFileLocation</a></td><td>Location of profile photo of channel/group/supergroup/user</td></tr><tr><td><a href="/constructor/inputStickerSetThumb/">inputStickerSetThumb</a></td><td>Location of stickerset thumbnail (see <a href="/api/files/">files</a>)</td></tr><tr><td><a href="/constructor/inputGroupCallStream/">inputGroupCallStream</a></td><td>Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see <a href="/api/group-calls/#downloading-media-chunks">playing an RTMP livestream »</a>.</td></tr></tbody></table>
