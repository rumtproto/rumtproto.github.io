---
title: "ExportedChatlistInvite"
original: "https://core.telegram.org/type/ExportedChatlistInvite"
section: ref
kind: type
description: "Экспортированная глубокая ссылка на папку с чатами »."
layout: layout.njk
---

# ExportedChatlistInvite

Экспортированная [глубокая ссылка на папку с чатами »](/api/links/#chat-folder-links).

```
exportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;

---functions---

chatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/exportedChatlistInvite">exportedChatlistInvite</a></td><td>Экспортированная <a href="/api/links#chat-folder-links">глубокая ссылка на папку чатов »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/chatlists.editExportedInvite">chatlists.editExportedInvite</a></td><td>Изменить <a href="/api/links#chat-folder-links">глубокую ссылку на папку чатов »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
