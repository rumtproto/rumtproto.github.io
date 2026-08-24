---
title: "InputStickerSet"
original: "https://core.telegram.org/type/InputStickerSet"
section: ref
kind: type
description: "Представляет набор стикеров"
layout: layout.njk
---

# InputStickerSet

Представляет набор стикеров

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
inputStickerSetEmpty#ffb62b95 = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
```

Схема API:

```
inputStickerSetEmpty#ffb62b95 = InputStickerSet;
inputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
inputStickerSetAnimatedEmoji#28703c8 = InputStickerSet;
inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;
inputStickerSetAnimatedEmojiAnimations#cde3739 = InputStickerSet;
inputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;
inputStickerSetEmojiGenericAnimations#4c4d4ce = InputStickerSet;
inputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;
inputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;
inputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;
inputStickerSetTonGifts#1cf671a0 = InputStickerSet;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputStickerSetShortName">inputStickerSetShortName</a></td><td>Набор стикеров по краткому имени, из <a href="/api/links#stickerset-links">глубокой ссылки на набор стикеров »</a></td></tr><tr><td><a href="/constructor/inputStickerSetEmpty">inputStickerSetEmpty</a></td><td>Пустой конструктор</td></tr><tr><td><a href="/constructor/inputStickerSetID">inputStickerSetID</a></td><td>Набор стикеров по идентификатору</td></tr><tr><td><a href="/constructor/inputStickerSetAnimatedEmoji">inputStickerSetAnimatedEmoji</a></td><td>Набор анимированных эмодзи</td></tr><tr><td><a href="/constructor/inputStickerSetDice">inputStickerSetDice</a></td><td>Используется для получения <a href="/api/dice">анимированных стикеров с кубиками</a></td></tr><tr><td><a href="/constructor/inputStickerSetAnimatedEmojiAnimations">inputStickerSetAnimatedEmojiAnimations</a></td><td>Набор стикеров для реакций анимированными эмодзи (содержит анимации, которые проигрываются при нажатии пользователем на соответствующий анимированный эмодзи)</td></tr><tr><td><a href="/constructor/inputStickerSetPremiumGifts">inputStickerSetPremiumGifts</a></td><td>Стикеры, показываемые при получении подписки Telegram Premium в подарок</td></tr><tr><td><a href="/constructor/inputStickerSetEmojiGenericAnimations">inputStickerSetEmojiGenericAnimations</a></td><td>Общий набор анимаций, содержащий анимации, которые проигрываются при <a href="/api/reactions">реакции на сообщения обычным эмодзи без собственной анимации</a></td></tr><tr><td><a href="/constructor/inputStickerSetEmojiDefaultStatuses">inputStickerSetEmojiDefaultStatuses</a></td><td>Набор стикеров <a href="/api/emoji-status">эмодзи-статусов</a> по умолчанию</td></tr><tr><td><a href="/constructor/inputStickerSetEmojiDefaultTopicIcons">inputStickerSetEmojiDefaultTopicIcons</a></td><td>Набор <a href="/api/custom-emoji">пользовательских эмодзи</a> по умолчанию для <a href="/api/forum#forum-topics">значков тем форума</a></td></tr><tr><td><a href="/constructor/inputStickerSetEmojiChannelDefaultStatuses">inputStickerSetEmojiChannelDefaultStatuses</a></td><td>Набор стикеров <a href="/api/emoji-status">эмодзи-статусов</a> по умолчанию для статусов каналов</td></tr><tr><td><a href="/constructor/inputStickerSetTonGifts">inputStickerSetTonGifts</a></td><td>Набор стикеров для подарков TON.</td></tr></tbody></table>
