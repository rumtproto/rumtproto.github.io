---
title: "WebPageAttribute (тип)"
original: "https://core.telegram.org/type/WebPageAttribute"
section: ref
kind: type
layout: layout.njk
---

# WebPageAttribute

*Тип из схемы TL.*

> Webpage attributes

## Определение TL

```
webPageAttributeTheme#54b56617 flags:# documents:flags.0?Vector<Document> settings:flags.1?ThemeSettings = WebPageAttribute;
webPageAttributeStory#2e94c3e7 flags:# peer:Peer id:int story:flags.0?StoryItem = WebPageAttribute;
webPageAttributeStickerSet#50cc03d3 flags:# emojis:flags.0?true text_color:flags.1?true stickers:Vector<Document> = WebPageAttribute;
webPageAttributeUniqueStarGift#cf6f6db8 gift:StarGift = WebPageAttribute;
webPageAttributeStarGiftCollection#31cad303 icons:Vector<Document> = WebPageAttribute;
webPageAttributeStarGiftAuction#1c641c2 gift:StarGift end_date:int = WebPageAttribute;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [webPageAttributeTheme](/constructor/webPageAttributeTheme/) | Page theme |
| [webPageAttributeStory](/constructor/webPageAttributeStory/) | Webpage preview of a Telegram story |
| [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/) | Contains info about a [stickerset »](https://core.telegram.org/api/stickers), for a [webPage](/constructor/webPage/) preview of a [stickerset deep link »](https://core.telegram.org/api/links#stickerset-links) (the [webPage](/constructor/webPage/) will have a type of telegram_stickerset). |
| [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) | Contains info about [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) for a [webPage](/constructor/webPage/) preview of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) (the [webPage](/constructor/webPage/) will have a type of telegram_nft). |
| [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) | Contains info about a [gift collection »](https://core.telegram.org/api/gifts#gift-collections) for a [webPage](/constructor/webPage/) preview of a [gift collection »](https://core.telegram.org/api/gifts#gift-collections) (the [webPage](/constructor/webPage/) will have a type of telegram_collection). |
| [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) | Contains info about a [collectible gift auction »](https://core.telegram.org/api/auctions) for a [webPage](/constructor/webPage/) preview of an [auction »](https://core.telegram.org/api/auctions) (the [webPage](/constructor/webPage/) will have a type of telegram_auction). |
| [webPageAttributeAiComposeTone](https://core.telegram.org/constructor/webPageAttributeAiComposeTone) | [Webpage attribute](/type/WebPageAttribute/) attached to a [webPage](/constructor/webPage/) of type telegram_aicomposetone, generated when previewing a shared [AI composer tone »](https://core.telegram.org/api/ai#ai-compose-tones) via an [AI compose tone link »](https://core.telegram.org/api/links#ai-compose-tone-links). |
