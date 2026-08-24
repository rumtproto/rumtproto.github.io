---
title: "AttachMenuBot"
original: "https://core.telegram.org/type/AttachMenuBot"
section: ref
kind: type
description: "Представляет mini app бота, который можно запустить из меню вложений »"
layout: layout.njk
---

# AttachMenuBot

[@term:Mini App] Представляет [mini app бота, который можно запустить из меню вложений »](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

```
attachMenuBot#d90d8dfe flags:# inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:long short_name:string peer_types:flags.3?Vector<AttachMenuPeerType> icons:Vector<AttachMenuBotIcon> = AttachMenuBot;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/attachMenuBot">attachMenuBot</a></td><td>Представляет <a href="/api/bots/attach">mini app бота, который можно запустить из меню вложений или бокового меню »</a><br><br>Хотя бы один из флагов <code>show_in_attach_menu</code> или <code>show_in_side_menu</code> всегда будет установлен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
