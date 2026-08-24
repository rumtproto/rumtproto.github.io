---
title: "DocumentAttribute"
original: "https://core.telegram.org/type/DocumentAttribute"
section: ref
description: "Various possible attributes of a document (used to define if it's a sticker, a GIF, a video, a mask sticker, an image, an audio, and so on)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DocumentAttribute","url":"/type/DocumentAttribute/"}]
layout: layout.njk
---

# DocumentAttribute

Various possible attributes of a document (used to define if it's a sticker, a GIF, a video, a mask sticker, an image, an audio, and so on)

#### [End-to-end schema](/schema/end-to-end/)

```
===23===
documentAttributeAnimated#11b58939 = DocumentAttribute;
documentAttributeAudio#051448e5 duration:int = DocumentAttribute;
documentAttributeFilename#15590068 file_name:string = DocumentAttribute;
documentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute;
documentAttributeSticker#fb0a5727 = DocumentAttribute;
documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute;

===45===
documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute;
documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute;

===46===
documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;

===66===
documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute;
```

API schema:

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentAttributeImageSize/">documentAttributeImageSize</a>#6c37c15c w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;
<a href="/constructor/documentAttributeAnimated/">documentAttributeAnimated</a>#11b58939 = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;
<a href="/constructor/documentAttributeSticker/">documentAttributeSticker</a>#6319d612 flags:<a href="/type/%23/">#</a> mask:flags.1?true alt:<a href="/type/string/">string</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> mask_coords:flags.0?<a href="/type/MaskCoords/">MaskCoords</a> = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;
<a href="/constructor/documentAttributeVideo/">documentAttributeVideo</a>#43c57c48 flags:<a href="/type/%23/">#</a> round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:<a href="/type/double/">double</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> preload_prefix_size:flags.2?<a href="/type/int/">int</a> video_start_ts:flags.4?<a href="/type/double/">double</a> video_codec:flags.5?<a href="/type/string/">string</a> = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;
<a href="/constructor/documentAttributeAudio/">documentAttributeAudio</a>#9852f9c6 flags:<a href="/type/%23/">#</a> voice:flags.10?true duration:<a href="/type/int/">int</a> title:flags.0?<a href="/type/string/">string</a> performer:flags.1?<a href="/type/string/">string</a> waveform:flags.2?<a href="/type/bytes/">bytes</a> = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;
<a href="/constructor/documentAttributeFilename/">documentAttributeFilename</a>#15590068 file_name:<a href="/type/string/">string</a> = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;
<a href="/constructor/documentAttributeHasStickers/">documentAttributeHasStickers</a>#9801d2f7 = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;
<a href="/constructor/documentAttributeCustomEmoji/">documentAttributeCustomEmoji</a>#fd149899 flags:<a href="/type/%23/">#</a> free:flags.0?true text_color:flags.1?true alt:<a href="/type/string/">string</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> = <a href="/type/DocumentAttribute/" class="current_page_link">DocumentAttribute</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/documentAttributeImageSize/">documentAttributeImageSize</a></td><td>Defines the width and height of an image uploaded as document</td></tr><tr><td><a href="/constructor/documentAttributeAnimated/">documentAttributeAnimated</a></td><td>Defines an animated GIF</td></tr><tr><td><a href="/constructor/documentAttributeSticker/">documentAttributeSticker</a></td><td>Defines a sticker</td></tr><tr><td><a href="/constructor/documentAttributeVideo/">documentAttributeVideo</a></td><td>Defines a video</td></tr><tr><td><a href="/constructor/documentAttributeAudio/">documentAttributeAudio</a></td><td>Represents an audio file</td></tr><tr><td><a href="/constructor/documentAttributeFilename/">documentAttributeFilename</a></td><td>A simple document with a file name</td></tr><tr><td><a href="/constructor/documentAttributeHasStickers/">documentAttributeHasStickers</a></td><td>Whether the current document has stickers attached</td></tr><tr><td><a href="/constructor/documentAttributeCustomEmoji/">documentAttributeCustomEmoji</a></td><td>Info about a custom emoji</td></tr></tbody></table>
