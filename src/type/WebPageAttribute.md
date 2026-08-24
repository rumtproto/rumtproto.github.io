---
title: "WebPageAttribute"
original: "https://core.telegram.org/type/WebPageAttribute"
section: ref
kind: type
description: "Атрибуты веб-страницы"
layout: layout.njk
---

# WebPageAttribute

Атрибуты веб-страницы

```
webPageAttributeTheme#54b56617 flags:# documents:flags.0?Vector<Document> settings:flags.1?ThemeSettings = WebPageAttribute;
webPageAttributeStory#2e94c3e7 flags:# peer:Peer id:int story:flags.0?StoryItem = WebPageAttribute;
webPageAttributeStickerSet#50cc03d3 flags:# emojis:flags.0?true text_color:flags.1?true stickers:Vector<Document> = WebPageAttribute;
webPageAttributeUniqueStarGift#cf6f6db8 gift:StarGift = WebPageAttribute;
webPageAttributeStarGiftCollection#31cad303 icons:Vector<Document> = WebPageAttribute;
webPageAttributeStarGiftAuction#1c641c2 gift:StarGift end_date:int = WebPageAttribute;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/webPageAttributeTheme">webPageAttributeTheme</a></td><td>Тема оформления страницы</td></tr><tr><td><a href="/constructor/webPageAttributeStory">webPageAttributeStory</a></td><td>Предпросмотр веб-страницы для истории Telegram</td></tr><tr><td><a href="/constructor/webPageAttributeStickerSet">webPageAttributeStickerSet</a></td><td>Содержит информацию о <a href="/api/stickers">наборе стикеров »</a> для предпросмотра <a href="/constructor/webPage">webPage</a> <a href="/api/links#stickerset-links">глубокой ссылки на набор стикеров »</a> (у <a href="/constructor/webPage">webPage</a> поле <code>type</code> будет равно <code>telegram_stickerset</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeUniqueStarGift">webPageAttributeUniqueStarGift</a></td><td>Содержит информацию о <a href="/api/gifts#collectible-gifts">коллекционном подарке »</a> для предпросмотра <a href="/constructor/webPage">webPage</a> <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a> (у <a href="/constructor/webPage">webPage</a> поле <code>type</code> будет равно <code>telegram_nft</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeStarGiftCollection">webPageAttributeStarGiftCollection</a></td><td>Содержит информацию о <a href="/api/gifts#gift-collections">коллекции подарков »</a> для предпросмотра <a href="/constructor/webPage">webPage</a> <a href="/api/gifts#gift-collections">коллекции подарков »</a> (у <a href="/constructor/webPage">webPage</a> поле <code>type</code> будет равно <code>telegram_collection</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeStarGiftAuction">webPageAttributeStarGiftAuction</a></td><td>Содержит информацию об <a href="/api/auctions">аукционе коллекционного подарка »</a> для предпросмотра <a href="/constructor/webPage">webPage</a> <a href="/api/auctions">аукциона »</a> (у <a href="/constructor/webPage">webPage</a> поле <code>type</code> будет равно <code>telegram_auction</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeAiComposeTone">webPageAttributeAiComposeTone</a></td><td><a href="/type/WebPageAttribute">Атрибут веб-страницы</a>, прикреплённый к <a href="/constructor/webPage">webPage</a> типа <code>telegram_aicomposetone</code>; создаётся при предпросмотре <a href="/api/ai#ai-compose-tones">тона ИИ-редактора »</a>, переданного через <a href="/api/links#ai-compose-tone-links">ссылку на тон ИИ-редактора »</a>.</td></tr></tbody></table>
