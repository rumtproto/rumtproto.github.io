---
title: "messages.MessageViews"
original: "https://core.telegram.org/type/messages.MessageViews"
section: ref
kind: type
description: "Счётчик просмотров и пересылок + сведения об ответах"
layout: layout.njk
---

# messages.MessageViews

Счётчик просмотров и пересылок + сведения об ответах

```
messages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;

---functions---

messages.getMessagesViews#5784d3e1 peer:InputPeer id:Vector<int> increment:Bool = messages.MessageViews;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messageViews">messages.messageViews</a></td><td>Счётчик просмотров и пересылок + сведения об ответах</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessagesViews">messages.getMessagesViews</a></td><td>Получить и увеличить счётчик просмотров сообщения, отправленного или пересланного из <a href="/api/channel">канала</a></td></tr></tbody></table>
