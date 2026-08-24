---
title: "PeerColor"
original: "https://core.telegram.org/type/PeerColor"
section: ref
kind: type
description: "Представляет цветовую палитру »."
layout: layout.njk
---

# PeerColor

Представляет [цветовую палитру »](/api/colors/).

```
peerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;
peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;
inputPeerColorCollectible#b8ea86a9 collectible_id:long = PeerColor;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/peerColor">peerColor</a></td><td>Представляет <a href="/api/colors">цветовую палитру »</a>.</td></tr><tr><td><a href="/constructor/peerColorCollectible">peerColorCollectible</a></td><td>Представляет <a href="/api/colors">цветовую палитру »</a>, связанную с <a href="/api/gifts#collectible-gifts">коллекционным подарком »</a>; подробнее см. <a href="/api/colors#collectible-gift-palettes">здесь »</a>.</td></tr><tr><td><a href="/constructor/inputPeerColorCollectible">inputPeerColorCollectible</a></td><td>Представляет <a href="/api/colors">цветовую палитру »</a>, связанную с <a href="/api/gifts#collectible-gifts">коллекционным подарком »</a>; подробнее см. <a href="/api/colors#collectible-gift-palettes">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
