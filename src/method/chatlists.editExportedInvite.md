---
title: "chatlists.editExportedInvite"
original: "https://core.telegram.org/method/chatlists.editExportedInvite"
section: ref
kind: method
description: "Изменить глубокую ссылку на папку чатов »."
layout: layout.njk
---

# chatlists.editExportedInvite

Изменить [глубокую ссылку на папку чатов »](/api/links/#chat-folder-links).

```
exportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;
---functions---
chatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist">InputChatlist</a></td><td>Идентификатор папки</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] <code>slug</code>, полученный из <a href="/api/links#chat-folder-links">глубокой ссылки на папку чатов »</a>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Если установлено, задаёт новое имя для ссылки</td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Если установлено, изменяет список пиров, доступных по ссылке</td></tr></tbody></table>

### Результат

[ExportedChatlistInvite](/type/ExportedChatlistInvite/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>FILTER_ID_INVALID</td><td>Указанный идентификатор фильтра недействителен.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>Указанный фильтр нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>INVITE_SLUG_EMPTY</td><td>Указанный слаг приглашения пуст.</td></tr><tr><td>400</td><td>INVITE_SLUG_EXPIRED</td><td>Срок действия указанной ссылки на папку чатов истёк.</td></tr><tr><td>400</td><td>PEERS_LIST_EMPTY</td><td>Указанный список пиров пуст.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
