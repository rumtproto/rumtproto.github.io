---
title: "dialogFilter"
original: "https://core.telegram.org/constructor/dialogFilter"
section: ref
kind: constructor
description: "Фильтр диалогов, он же папка"
layout: layout.njk
---

# dialogFilter

Фильтр диалогов, он же [папка](/api/folders/)

```
dialogFilter#aa472651 flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Включать ли в эту <a href="/api/folders">папку</a> все контакты</td></tr><tr><td><strong>non_contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Включать ли в эту <a href="/api/folders">папку</a> всех, кто не является контактом</td></tr><tr><td><strong>groups</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Включать ли в эту <a href="/api/folders">папку</a> все группы</td></tr><tr><td><strong>broadcasts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Включать ли в эту <a href="/api/folders">папку</a> все каналы</td></tr><tr><td><strong>bots</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Включать ли в эту <a href="/api/folders">папку</a> всех ботов</td></tr><tr><td><strong>exclude_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Исключать ли из этой <a href="/api/folders">папки</a> чаты с отключёнными уведомлениями</td></tr><tr><td><strong>exclude_read</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Исключать ли из этой <a href="/api/folders">папки</a> прочитанные чаты</td></tr><tr><td><strong>exclude_archived</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Исключать ли из этой <a href="/api/folders">папки</a> архивные чаты</td></tr><tr><td><strong>title_noanimate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/constructor/true">true</a></td><td>Если установлено, анимированные эмодзи в поле <code>title</code> не следует анимировать — их нужно остановить на первом кадре.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/api/folders">папки</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Название <a href="/api/folders">папки</a> (не более 12 символов UTF-8)</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи, используемый как значок папки.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.27?<a href="/type/int">int</a></td><td>Идентификатор цвета для <a href="/api/folders#folder-tags">тега, связанного с этой папкой, подробнее см. здесь »</a>.</td></tr><tr><td><strong>pinned_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Закреплённые чаты; в <a href="/api/folders">папках</a> количество закреплённых чатов не ограничено</td></tr><tr><td><strong>include_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Включить следующие чаты в эту <a href="/api/folders">папку</a></td></tr><tr><td><strong>exclude_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Исключить следующие чаты из этой <a href="/api/folders">папки</a></td></tr></tbody></table>

### Тип

[DialogFilter](/type/DialogFilter/)

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
