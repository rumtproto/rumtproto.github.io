---
title: "chatlists.chatlistInvite"
original: "https://core.telegram.org/constructor/chatlists.chatlistInvite"
section: ref
kind: constructor
description: "Информация о глубокой ссылке на папку с чатами »."
layout: layout.njk
---

# chatlists.chatlistInvite

Информация о [глубокой ссылке на папку с чатами »](/api/links/#chat-folder-links).

```
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>title_noanimate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, анимированные эмодзи в поле <code>title</code> не следует анимировать — их нужно остановить на первом кадре.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Название ссылки</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи, используемый как значок папки.</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Супергруппы и каналы, в которые нужно вступить</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Сведения о связанном чате</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Сведения о связанном пользователе</td></tr></tbody></table>

### Тип

[chatlists.ChatlistInvite](/type/chatlists.ChatlistInvite/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
