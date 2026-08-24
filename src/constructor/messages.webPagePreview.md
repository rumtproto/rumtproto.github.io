---
title: "messages.webPagePreview"
original: "https://core.telegram.org/constructor/messages.webPagePreview"
section: ref
kind: constructor
description: "Представляет предпросмотр веб-страницы."
layout: layout.njk
---

# messages.webPagePreview

Представляет предпросмотр веб-страницы.

```
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/MessageMedia">MessageMedia</a></td><td><a href="/constructor/messageMediaWebPage">messageMediaWebPage</a> или <a href="/constructor/messageMediaEmpty">messageMediaEmpty</a>, если предпросмотра нет.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в поле <code>gift</code>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в объекте <code>media</code>.</td></tr></tbody></table>

### Тип

[messages.WebPagePreview](/type/messages.WebPagePreview/)

### Связанные страницы

#### [messageMediaWebPage](/constructor/messageMediaWebPage/)

Предпросмотр веб-страницы

#### [messageMediaEmpty](/constructor/messageMediaEmpty/)

Пустой конструктор.
