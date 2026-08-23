---
title: "AttachMenuPeerType (тип)"
original: "https://core.telegram.org/type/AttachMenuPeerType"
section: ref
kind: type
layout: layout.njk
---

# AttachMenuPeerType

*Тип из схемы TL.*

> Indicates a supported peer type for a [bot mini app attachment menu](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

## Определение TL

```
attachMenuPeerTypeSameBotPM#7d6be90e = AttachMenuPeerType;
attachMenuPeerTypeBotPM#c32bfa1a = AttachMenuPeerType;
attachMenuPeerTypePM#f146d31f = AttachMenuPeerType;
attachMenuPeerTypeChat#509113f = AttachMenuPeerType;
attachMenuPeerTypeBroadcast#7bfbdefc = AttachMenuPeerType;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [attachMenuPeerTypeSameBotPM](/constructor/attachMenuPeerTypeSameBotPM/) | The bot attachment menu entry is available in the chat with the bot that offers it |
| [attachMenuPeerTypeBotPM](/constructor/attachMenuPeerTypeBotPM/) | The bot attachment menu entry is available in private chats with other bots (excluding the bot that offers the current attachment menu) |
| [attachMenuPeerTypePM](/constructor/attachMenuPeerTypePM/) | The bot attachment menu entry is available in private chats with other users (not bots) |
| [attachMenuPeerTypeChat](/constructor/attachMenuPeerTypeChat/) | The bot attachment menu entry is available in [groups and supergroups](https://core.telegram.org/api/channel) |
| [attachMenuPeerTypeBroadcast](/constructor/attachMenuPeerTypeBroadcast/) | The bot attachment menu entry is available in channels |

## Related pages

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
