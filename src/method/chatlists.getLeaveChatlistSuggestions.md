---
title: "chatlists.getLeaveChatlistSuggestions"
original: "https://core.telegram.org/method/chatlists.getLeaveChatlistSuggestions"
section: ref
kind: method
description: "Возвращает идентификаторы закреплённых или всегда включённых чатов из папки чатов, импортированной по глубокой ссылке на папку чатов », которые предлагается покинуть при удалении…"
layout: layout.njk
---

# chatlists.getLeaveChatlistSuggestions

Возвращает идентификаторы закреплённых или всегда включённых чатов из папки чатов, импортированной по [глубокой ссылке на папку чатов »](/api/links/#chat-folder-links), которые предлагается покинуть при удалении папки.

```
---functions---
chatlists.getLeaveChatlistSuggestions#fdbcd714 chatlist:InputChatlist = Vector<Peer>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist">InputChatlist</a></td><td>Идентификатор папки</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>Указанный идентификатор фильтра недействителен.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>Указанный фильтр нельзя использовать в этом контексте.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
