---
title: "messages.chatsSlice"
original: "https://core.telegram.org/constructor/messages.chatsSlice"
section: ref
kind: constructor
description: "Неполный список чатов; остальные придётся получить с помощью постраничной выборки"
layout: layout.njk
---

# messages.chatsSlice

Неполный список чатов; остальные придётся получить с помощью [постраничной выборки](/api/offsets/)

```
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число результатов, найденных на стороне сервера (не все из них включены в <code>chats</code>)</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты</td></tr></tbody></table>

### Тип

[messages.Chats](/type/messages.Chats/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
