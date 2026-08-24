---
title: "WebPageAttribute"
original: "https://core.telegram.org/type/WebPageAttribute"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebPageAttribute","url":"/type/WebPageAttribute/"}]
layout: layout.njk
---

# WebPageAttribute

Webpage attributes

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webPageAttributeTheme/">webPageAttributeTheme</a>#54b56617 flags:<a href="/type/%23/">#</a> documents:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; settings:flags.1?<a href="/type/ThemeSettings/">ThemeSettings</a> = <a href="/type/WebPageAttribute/" class="current_page_link">WebPageAttribute</a>;
<a href="/constructor/webPageAttributeStory/">webPageAttributeStory</a>#2e94c3e7 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> id:<a href="/type/int/">int</a> story:flags.0?<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/WebPageAttribute/" class="current_page_link">WebPageAttribute</a>;
<a href="/constructor/webPageAttributeStickerSet/">webPageAttributeStickerSet</a>#50cc03d3 flags:<a href="/type/%23/">#</a> emojis:flags.0?true text_color:flags.1?true stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/WebPageAttribute/" class="current_page_link">WebPageAttribute</a>;
<a href="/constructor/webPageAttributeUniqueStarGift/">webPageAttributeUniqueStarGift</a>#cf6f6db8 gift:<a href="/type/StarGift/">StarGift</a> = <a href="/type/WebPageAttribute/" class="current_page_link">WebPageAttribute</a>;
<a href="/constructor/webPageAttributeStarGiftCollection/">webPageAttributeStarGiftCollection</a>#31cad303 icons:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/WebPageAttribute/" class="current_page_link">WebPageAttribute</a>;
<a href="/constructor/webPageAttributeStarGiftAuction/">webPageAttributeStarGiftAuction</a>#1c641c2 gift:<a href="/type/StarGift/">StarGift</a> end_date:<a href="/type/int/">int</a> = <a href="/type/WebPageAttribute/" class="current_page_link">WebPageAttribute</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webPageAttributeTheme/">webPageAttributeTheme</a></td><td>Page theme</td></tr><tr><td><a href="/constructor/webPageAttributeStory/">webPageAttributeStory</a></td><td>Webpage preview of a Telegram story</td></tr><tr><td><a href="/constructor/webPageAttributeStickerSet/">webPageAttributeStickerSet</a></td><td>Contains info about a <a href="/api/stickers/">stickerset »</a>, for a <a href="/constructor/webPage/">webPage</a> preview of a <a href="/api/links/#stickerset-links">stickerset deep link »</a> (the <a href="/constructor/webPage/">webPage</a> will have a <code>type</code> of <code>telegram_stickerset</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeUniqueStarGift/">webPageAttributeUniqueStarGift</a></td><td>Contains info about <a href="/api/gifts/#collectible-gifts">collectible gift »</a> for a <a href="/constructor/webPage/">webPage</a> preview of a <a href="/api/gifts/#collectible-gifts">collectible gift »</a> (the <a href="/constructor/webPage/">webPage</a> will have a <code>type</code> of <code>telegram_nft</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeStarGiftCollection/">webPageAttributeStarGiftCollection</a></td><td>Contains info about a <a href="/api/gifts/#gift-collections">gift collection »</a> for a <a href="/constructor/webPage/">webPage</a> preview of a <a href="/api/gifts/#gift-collections">gift collection »</a> (the <a href="/constructor/webPage/">webPage</a> will have a <code>type</code> of <code>telegram_collection</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeStarGiftAuction/">webPageAttributeStarGiftAuction</a></td><td>Contains info about a <a href="/api/auctions/">collectible gift auction »</a> for a <a href="/constructor/webPage/">webPage</a> preview of an <a href="/api/auctions/">auction »</a> (the <a href="/constructor/webPage/">webPage</a> will have a <code>type</code> of <code>telegram_auction</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeAiComposeTone/">webPageAttributeAiComposeTone</a></td><td><a href="/type/WebPageAttribute/">Webpage attribute</a> attached to a <a href="/constructor/webPage/">webPage</a> of type <code>telegram_aicomposetone</code>, generated when previewing a shared <a href="/api/ai/#ai-compose-tones">AI composer tone »</a> via an <a href="/api/links/#ai-compose-tone-links">AI compose tone link »</a>.</td></tr></tbody></table>
