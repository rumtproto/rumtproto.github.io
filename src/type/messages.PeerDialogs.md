---
title: "messages.PeerDialogs"
original: "https://core.telegram.org/type/messages.PeerDialogs"
section: ref
kind: type
description: "Список диалогов"
layout: layout.njk
---

# Messages.PeerDialogs

Список диалогов

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;

---functions---

messages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;
messages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.peerDialogs">messages.peerDialogs</a></td><td>Сведения о диалогах нескольких пиров</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getPeerDialogs">messages.getPeerDialogs</a></td><td>Получить сведения о диалогах указанных пиров</td></tr><tr><td><a href="/method/messages.getPinnedDialogs">messages.getPinnedDialogs</a></td><td>Получить закреплённые диалоги</td></tr></tbody></table>
