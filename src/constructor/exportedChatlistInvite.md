---
title: "exportedChatlistInvite"
original: "https://core.telegram.org/constructor/exportedChatlistInvite"
section: ref
kind: constructor
description: "Экспортированная глубокая ссылка на папку с чатами »."
layout: layout.njk
---

# exportedChatlistInvite

Экспортированная [глубокая ссылка на папку с чатами »](/api/links/#chat-folder-links).

```
exportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название ссылки</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links#chat-folder-links">Глубокая ссылка на папку чатов »</a>.</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Пиры для импорта</td></tr></tbody></table>

### Тип

[ExportedChatlistInvite](/type/ExportedChatlistInvite/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
