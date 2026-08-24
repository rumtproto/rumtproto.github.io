---
title: "chatlists.ExportedChatlistInvite"
original: "https://core.telegram.org/type/chatlists.ExportedChatlistInvite"
section: ref
kind: type
description: "Экспортированная глубокая ссылка на папку с чатами »."
layout: layout.njk
---

# chatlists.ExportedChatlistInvite

Экспортированная [глубокая ссылка на папку с чатами »](/api/links/#chat-folder-links).

```
chatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;

---functions---

chatlists.exportChatlistInvite#8472478e chatlist:InputChatlist title:string peers:Vector<InputPeer> = chatlists.ExportedChatlistInvite;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatlists.exportedChatlistInvite">chatlists.exportedChatlistInvite</a></td><td>Информация об экспортированной <a href="/api/links#chat-folder-links">глубокой ссылке на папку с чатами »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/chatlists.exportChatlistInvite">chatlists.exportChatlistInvite</a></td><td>Экспортировать <a href="/api/folders">папку »</a>, создав <a href="/api/links#chat-folder-links">глубокую ссылку на папку чатов »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
