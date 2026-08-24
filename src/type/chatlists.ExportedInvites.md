---
title: "chatlists.ExportedInvites"
original: "https://core.telegram.org/type/chatlists.ExportedInvites"
section: ref
kind: type
description: "Список экспортированных глубоких ссылок на папки с чатами »."
layout: layout.njk
---

# chatlists.ExportedInvites

Список экспортированных [глубоких ссылок на папки с чатами »](/api/links/#chat-folder-links).

```
chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;

---functions---

chatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.exportedInvites">chatlists.exportedInvites</a></td><td>Информация о нескольких <a href="/api/links#chat-folder-links">глубоких ссылках на папки с чатами »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/chatlists.getExportedInvites">chatlists.getExportedInvites</a></td><td>Перечислить все <a href="/api/links#chat-folder-links">глубокие ссылки на папку чатов »</a>, связанные с папкой</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
