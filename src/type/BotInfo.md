---
title: "BotInfo (тип)"
original: "https://core.telegram.org/type/BotInfo"
section: ref
kind: type
layout: layout.njk
---

# BotInfo

*Тип из схемы TL.*

> Info about bots (available bot commands, etc)

## Определение TL

```
botInfo#4d8a0299 flags:# has_preview_medias:flags.6?true user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton privacy_policy_url:flags.7?string app_settings:flags.8?BotAppSettings verifier_settings:flags.9?BotVerifierSettings = BotInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [botInfo](/constructor/botInfo/) | Info about bots (available bot commands, etc) |
