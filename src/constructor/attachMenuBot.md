---
title: "attachMenuBot"
original: "https://core.telegram.org/constructor/attachMenuBot"
section: ref
kind: constructor
description: "Представляет mini app бота, который можно запустить из меню вложений или бокового меню »"
layout: layout.njk
---

# attachMenuBot

[@term:Mini App] Представляет [mini app бота, который можно запустить из меню вложений или бокового меню »](/api/bots/attach/)

Хотя бы один из флагов `show_in_attach_menu` или `show_in_side_menu` всегда будет установлен.

```
attachMenuBot#d90d8dfe flags:# inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:long short_name:string peer_types:flags.3?Vector<AttachMenuPeerType> icons:Vector<AttachMenuBotIcon> = AttachMenuBot;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>inactive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, перед запуском mini app клиенту следует предложить пользователю добавить mini app в меню вложений или боковое меню, и только если пользователь согласится, приложение открывается после вызова <a href="/method/messages.toggleBotInAttachMenu">messages.toggleBotInAttachMenu</a>.</td></tr><tr><td><strong>has_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Устаревший флаг, можно игнорировать.</td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Хочет ли бот отправлять сообщения пользователю.</td></tr><tr><td><strong>show_in_attach_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Следует ли после установки показывать для этого Mini App пункт в меню вложений.</td></tr><tr><td><strong>show_in_side_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Следует ли после установки показывать для этого Mini App пункт в боковом меню главного экрана.</td></tr><tr><td><strong>side_menu_disclaimer_needed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Если задано <code>inactive</code> и пользователь ранее не принял <a href="https://telegram.org/tos/mini-apps">Условия использования</a> сторонних Mini App для этого бота, то при показе запроса на установку Mini App следует дополнительно показать обязательный флажок принятия <a href="https://telegram.org/tos/mini-apps">Условий использования Mini App</a> и предупреждение о том, что этот Mini App не связан с Telegram.</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] Название пункта меню вложений</td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AttachMenuPeerType">AttachMenuPeerType</a>&gt;</td><td>Список типов диалогов, в которых следует показывать этот пункт меню вложений</td></tr><tr><td><strong>icons</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AttachMenuBotIcon">AttachMenuBotIcon</a>&gt;</td><td>Список статичных значков и анимаций для конкретных платформ, используемых для кнопки меню вложений</td></tr></tbody></table>

### Тип

[AttachMenuBot](/type/AttachMenuBot/)

### Связанные страницы

#### [messages.toggleBotInAttachMenu](/method/messages.toggleBotInAttachMenu/)

Включить или отключить [меню вложений веб-бота »](/api/bots/attach/)

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.
