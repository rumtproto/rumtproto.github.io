---
title: "dialogFilterChatlist"
original: "https://core.telegram.org/constructor/dialogFilterChatlist"
section: ref
kind: constructor
description: "Папка, импортированная по глубокой ссылке на папку чатов »."
layout: layout.njk
---

# dialogFilterChatlist

Папка, импортированная по [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links).

```
dialogFilterChatlist#96537bd7 flags:# has_my_invites:flags.26?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_my_invites</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.26?<a href="/constructor/true">true</a></td><td>Создал ли текущий пользователь <a href="/api/links#chat-folder-links">глубокие ссылки на папку чатов »</a>, чтобы поделиться и самой папкой.</td></tr><tr><td><strong>title_noanimate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.28?<a href="/constructor/true">true</a></td><td>Если установлено, анимированные эмодзи в поле <code>title</code> не следует анимировать — их нужно остановить на первом кадре.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор папки</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Название папки (не более 12 символов UTF-8)</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи, используемый как значок папки.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.27?<a href="/type/int">int</a></td><td>Идентификатор цвета для <a href="/api/folders#folder-tags">тега, связанного с этой папкой, подробнее см. здесь »</a>.</td></tr><tr><td><strong>pinned_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Закреплённые чаты; в <a href="/api/folders">папках</a> количество закреплённых чатов не ограничено</td></tr><tr><td><strong>include_peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Чаты, которые нужно включить в папку</td></tr></tbody></table>

### Тип

[DialogFilter](/type/DialogFilter/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
